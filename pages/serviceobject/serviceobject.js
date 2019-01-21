// pages/serviceobject/serviceobject.js
import $wuxGallery from "../../components/gallery.js"
import $wuxPickerCity from "../../components/picker-city/picker-city.js"
var app = getApp()
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showOther: "none",  //是否展示other这个输入框
    xingming: "",
    gongzuodanwei: "",
    servicedate:"请选择活动日期",
    servicetime:"请选择活动具体时间",
    serviceplace:"",
    organization: "", //举办活动的社区组织名称 
    q1: "",
    q2: "",
    q3: "",
    jianyi: "",
    time: "",
    nickname: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var seviceobjectData = wx.getStorageSync('seviceobjectData');
    if (seviceobjectData) {
      this.setData({
        showOther: seviceobjectData.showOther,  //是否展示other这个输入框
        xingming: seviceobjectData.xingming,
        gongzuodanwei: seviceobjectData.gongzuodanwei,
        organization: seviceobjectData.organization,
        servicedate: seviceobjectData.servicedate,
        servicetime: seviceobjectData.servicetime,
        serviceplace: seviceobjectData.serviceplace,
        q1: seviceobjectData.q1,
        q2: seviceobjectData.q2,
        q3: seviceobjectData.q3,
        jianyi: seviceobjectData.jianyi,
        time: seviceobjectData.time,
        nickname: seviceobjectData.nickname,
        city: serviceobjectData.city
      })
    }
    var time = util.getNowFormatDate();
    var city = getApp().globalData.city;
    this.setData({
      time: time,
      city: city
    }
    );
    
    wx.getUserInfo({
      success: function (res) {
        console.log(res);
        var avatarUrl = 'userInfo.avatarUrl';
        var nickName = 'userInfo.nickName';
        that.setData({
          avatarUrl: res.userInfo.avatarUrl,
          nickname: res.userInfo.nickName,
        });
        console.log(nickname);
      }
    })

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
        key: 'seviceobjectData',
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
        key: 'seviceobjectData',
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
  /*姓名和所在单位监听器*/
  bindxingmingChange: function (e) {
    this.setData({
      xingming: e.detail.value
    });
  },
  bindgongzuodanweiChange: function (e) {
    this.setData({
      gongzuodanwei: e.detail.value
    });
  },
  /*选择服务提供组织名称*/
  bindOrganizationPickerChange: function () {
    var that = this;
    this.setData({
      showContent: false
    });
    $wuxPickerCity.init('city', {
      title: '',
      value: [8, 0, 11],
      onChange(p) {
        console.log(p);
        that.setData({
          organization: p.value[2],
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
  organizationchange(e) {
    this.setData({
      organization: e.detail.value
    })
  },
  //日期和时间监听器
  bindDateChange: function (e) {
    this.setData({
      servicedate: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      servicetime: e.detail.value
    })
  },
  bindPlaceChange: function (e) {
    this.setData({
      serviceplace: e.detail.value
    })
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
  

  bindjianyiChange: function (e) {
    var value = e.detail.value, len = parseInt(value.length);
    if (len > 300) return;
    this.setData({
      jianyi: e.detail.value,
    });
  },

  switchTopreview_serviceob: function () {
    wx.navigateTo({
      url: '../preview_serviceob/preview_serviceob',
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
      url: 'https://45053688.dashilarsqyz.com:/log/serviceobject/words',
      method: "POST",
      data: {
        xingming: that.data.xingming,
        gongzuodanwei: that.data.gongzuodanwei,
        organization: that.data.organization,
        servicedate: that.data.servicedate,
        servicetime: that.data.servicetime,
        serviceplace: that.data.serviceplace,
        q1: that.data.q1,
        q2: that.data.q2,
        q3: that.data.q3,
        jianyi: that.data.jianyi,
        time: that.data.time,
        nickname: that.data.nickname,
        city:that.data.city
      },
      success: function (res) {
        console.log(res);
        var ret_code = res.data.ret_code;
        if (ret_code === "0") {
          that.setData({
            submitSuccess: true,
          });
          wx.removeStorageSync('seviceobjectData');
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
      },
      fail: function (res){
        console.log(res);
      }
    })
  },

  validate: function () {
    if (this.data.xingming == "") {
      wx.showModal({
        title: '提示',
        content: '请填写您的名字',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.gongzuodanwei == "") {
      wx.showModal({
        title: '提示',
        content: '请填写您的工作单位',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.organization == "") {
      wx.showModal({
        title: '提示',
        content: '请选择举办此次活动的组织名称',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.servicedate == "请选择活动日期") {
      wx.showModal({
        title: '提示',
        content: '请选择活动日期',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.servicetime == "请选择活动具体时间") {
      wx.showModal({
        title: '提示',
        content: '请选择活动具体时间',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.serviceplace == "") {
      wx.showModal({
        title: '提示',
        content: '请选择活动地点',
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

    return true;
  },

})