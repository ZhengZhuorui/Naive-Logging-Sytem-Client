// pages/self_evaluation/self_evaluation.js
import $wuxGallery from "../../components/gallery.js"
import $wuxPickerCity from "../../components/picker-city/picker-city.js"
var app = getApp()
var util = require('../../utils/util.js'); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showOther:"none",
    radioidentityItems: [
      { name: '组织负责人（核心组成员）', value: "组织负责人（核心组成员）", checked: true},
      { name: '财务负责人（核心组成员）', value: "财务负责人（核心组成员）"},
      { name: '其他核心组成员', value: "其他核心组成员"},
      { name: '一般成员', value: "一般成员"},
    ],
    organization:"您所在的组织名称",
    name:"",
    q1:"",
    q2:"",
    q3:"",
    q4:"",
    q5:"",
    q6:"",
    q7:"",
    q8:"",
    identity:"组织负责人（核心组成员）", 
    time:"",
    city:""

  },

  /**
    * 生命周期函数--监听页面加载
    */
  onLoad: function () {
    var that = this;
    var self_evaluationData = wx.getStorageSync('self_evaluationData');
    var time = util.getNowFormatDate();
    var city = getApp().globalData.city;
    this.setData({
      time: time,
      city: city
    }
    );
    if (self_evaluationData) {
      this.setData({
        showOther: self_evaluationData.showOther,
        organization: self_evaluationData.organization,
        name: self_evaluationData.name,
        time: self_evaluationData.time,
        q1: self_evaluationData.q1,
        q2: self_evaluationData.q2,
        q3: self_evaluationData.q3,
        q4: self_evaluationData.q4,
        q5: self_evaluationData.q5,
        q6: self_evaluationData.q6,
        q7: self_evaluationData.q7,
        q8: self_evaluationData.q8,
        identity: self_evaluationData.identity,
        city:self_evaluationData.city
      });
    }

  },




  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
  * 生命周期函数--监听页面隐藏
  */
  onHide: function () {
    var that = this;
    this.setData({
      showContent: true
    });
    if (!that.data.submitSuccess) {
      wx.setStorage({
        key: 'self_evaluationData',
        data: this.data,
      });
    }

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    var that = this;
    if (!that.data.submitSuccess) {
      this.setData({
        showContent: true
      });
      wx.setStorage({
        key: 'self_evaluationData',
        data: this.data,
      });
    }
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /*姓名监听器*/
  bindnameChange: function (e) {
    this.setData({
      name: e.detail.value
    });
  },
  
  /*选择所在组织名称*/
  bindOrganizationPickerChange: function (e) {
    var that = this;
    this.setData({
      showContent: false
    });
    $wuxPickerCity.init('city', {
      title: '您所在的组织名称',
      value: [8, 0, 11],
      onChange(p) {
        console.log(p);
        that.setData({
          organization: p.value[2]
        });
        if (p.value[2] == "其他") {
          console.log("show other");
          this.setData({
            showOther: "inline"
          });
        } else {
          //未选中‘其他’，隐藏输入框
          console.log("hide other");
          this.setData({
            showOther: "none"
          });
        }
      },
      onHidden() {
        console.log("[picker-city]: onHidden");
        that.setData({
          showContent: true
        });
      }
    });
  },
  organizationChange(e) {
    this.setData({
      organization: e.detail.value
    }
    )
  },
  onChange1(e) {
    this.setData({
      q1: e.detail.value,
    })
    console.log(e)
  },
  onChange2(e) {
    this.setData({
      q2: e.detail.value,
    })
    console.log(e)
  },
  onChange3(e) {
    this.setData({
      q3: e.detail.value,
    })
    console.log(e)
  },
  onChange4(e) {
    this.setData({
      q4: e.detail.value,
    })
    console.log(e)
  },
  onChange5(e) {
    this.setData({
      q5: e.detail.value,
    })
    console.log(e)
  },
  onChange6(e) {
    this.setData({
      q6: e.detail.value,
    })
    console.log(e)
  },
  onChange7(e) {
    this.setData({
      q7: e.detail.value,
    })
    console.log(e)
  },
  onChange8(e) {
    this.setData({
      q8: e.detail.value,
    })
    console.log(e)
  },

  identityChange: function (e) {
    console.log(e.detail.value);
    this.setData({
      identity: e.detail.value
    });
  },

/*转入预览页面*/
  switchTopreview_selfevaluation: function () {
    wx.navigateTo({
      url: '../preview_selfevaluation/preview_selfevaluation',
    });
  },

  //提交表单数据
  submitAll: function () {
    var that = this;

    //验证必要信息是否全部提交了
    if (!this.validate()) {
      return;
    }
    wx.request({
      url: 'https://45053688.dashilarsqyz.com:/log/self_evaluation/words',
      method: "POST",
      data: {
        organization: that.data.organization,//评估者所在组织
        name:that.data.name,
        zhiwu:that.data.zhiwu,
        time: that.data.time,
        q1: that.data.q1, //问题1
        q2: that.data.q2,      //问题2
        q3: that.data.q3,      //问题3
        q4: that.data.q4,       //问题4
        q5: that.data.q5,       //问题5
        q6: that.data.q6,
        q7: that.data.q7,
        q8: that.data.q8,
        city:that.data.city
      },
      success: function (res) {
        var ret_code = res.data.ret_code;
        if (ret_code === "0") {
          that.setData({
            submitSuccess: true,
          });
          wx.removeStorageSync('self_evaluationData');
          wx.redirectTo({
            url: '../mutualcomment_success/mutualcomment_success',
          });
          return;
        } else {
          /* 提交表单信息失败，跳出对话框提示 */
          wx.showModal({
            title: '操作失败',
            content: '提交信息失败！请稍后再试',
            showCancel: false, //不显示取消按钮
            confirmText: '确定'
          })
        }
      }
    })
  },

  validate: function () {
    if (this.data.name == "") {
      wx.showModal({
        title: '提示',
        content: '请填写您的姓名',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }

    if (this.data.organization == "您所在的组织名称") {
      wx.showModal({
        title: '提示',
        content: '请选择您所在的组织名称',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }

    if (this.data.q1 == "") {
      wx.showModal({
        title: '提示',
        content: '请对问题1打分',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.q2 == "") {
      wx.showModal({
        title: '提示',
        content: '请对问题2打分',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.q3 == "") {
      wx.showModal({
        title: '提示',
        content: '请对问题3打分',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.q4 == "") {
      wx.showModal({
        title: '提示',
        content: '请对问题4打分',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.q5 == "") {
      wx.showModal({
        title: '提示',
        content: '请对问题5打分',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.q6 == "") {
      wx.showModal({
        title: '提示',
        content: '请对问题6打分',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.q7 == "") {
      wx.showModal({
        title: '提示',
        content: '请对问题7打分',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.q8 == "") {
      wx.showModal({
        title: '提示',
        content: '请对问题8打分',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.identity == "") {
      wx.showModal({
        title: '提示',
        content: '请选择您的职务',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }

    return true;
  },

})