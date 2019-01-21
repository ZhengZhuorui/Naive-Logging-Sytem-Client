// pages/mutualcomment_middle/mutualcomment_middle.js
import $wuxGallery from "../../components/gallery.js"
import $wuxPickerCity from "../../components/picker-city/picker-city.js"
var app = getApp()
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showOther1:"none",
    showOther2:"none",
    yourorganization: "请选择您所在的组织名称",
    organization: "请选择被评估组织名称",
    time:"",
    neirong: "",
    liucheng: "",
    xiaoguo: "",
    fengong: "",
    zijin: "",
    jianyi: "",
    nickname:"",
    city:""

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    var mutualcomment_middleData = wx.getStorageSync('mutualcomment_middleData')
    if (mutualcomment_middleData) {
      this.setData({
        showOther: mutualcomment_middleData.showOther,  //是否展示other这个输入框
        yourorganization: mutualcomment_middleData.yourorganization,
        organization: mutualcomment_middleData.organization,
        time: mutualcomment_middleData.time,
        neirong: mutualcomment_middleData.neirong, 
        liucheng: mutualcomment_middleData.liucheng,
        xiaoguo: mutualcomment_middleData.xiaoguo,
        fengong: mutualcomment_middleData.fengong,
        zijin: mutualcomment_middleData.zijin,
        jianyi: mutualcomment_middleData.jianyi,
        nickname: mutualcomment_middleData.nickname,
        city:mutualcomment_middleData.city
      });
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
        key: 'mutualcomment_middleData',
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
        key: 'mutualcomment_middleData',
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
  //选择评估者所在组织名称
  bindyourOrganizationPickerChange: function (e) {
    var that = this;
    this.setData({
      showContent: false
    });
    $wuxPickerCity.init('city', {
      title: '请选择您所在的组织名称',
      value: [8, 0, 11],
      onChange(p) {
        console.log(p);
        that.setData({
          yourorganization: p.value[2]
        });
        if (p.value[2] == "其他") {
          console.log("show other");
          this.setData({
            showOther1: "inline"
          });
        } else {
          //未选中‘其他’，隐藏输入框
          console.log("hide other");
          this.setData({
            showOther1: "none"
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
  /*选择被评估组织名称*/
  bindOrganizationPickerChange: function (e) {
    var that = this;
    this.setData({
      showContent: false
    });
    $wuxPickerCity.init('city', {
      title: '请选择被评估组织名称',
      value: [8, 0, 11],
      onChange(p) {
        console.log(p);
        that.setData({
          organization: p.value[2]
        });
        if (p.value[2] == "其他") {
          console.log("show other");
          this.setData({
            showOther2: "inline"
          });
        } else {
          //未选中‘其他’，隐藏输入框
          console.log("hide other");
          this.setData({
            showOther2: "none"
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

  yourorganizationChange(e) {
    this.setData({
      yourorganization: e.detail.value
    }
    )
  },
  organizationChange(e) {
    this.setData({
      organization: e.detail.value
    }
    )
  },

  onChange1(e) {
    this.setData({
      neirong: e.detail.value,
    })
    console.log(e)
  },
  onChange2(e) {
    this.setData({
      liucheng: e.detail.value,
    })
    console.log(e)
  },
  onChange3(e) {
    this.setData({
      xiaoguo: e.detail.value,
    })
    console.log(e)
  },
  onChange4(e) {
    this.setData({
      fengong: e.detail.value,
    })
    console.log(e)
  },
  onChange5(e) {
    this.setData({
      zijin: e.detail.value,
    })
    console.log(e)
  },

  bindJianyiChange: function (e) {
    var value = e.detail.value, len = parseInt(value.length);
    if (len > 300) return;
    this.setData({
      jianyi: e.detail.value,
    });
  },
  switchToPreview_mcmiddle: function () {
    wx.navigateTo({
      url: '../preview_mcmiddle/preview_mcmiddle',
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
      url: 'https://45053688.dashilarsqyz.com:/log/mutualcomment_middle/words',
      method: "POST",
      data: {
        yourorganization: that.data.yourorganization,//评估者所在组织
        time: that.data.time,
        organization: that.data.organization, //被评估组织名称
        neirong: that.data.neirong, //问题1
        liucheng: that.data.liucheng,      //问题2
        xiaoguo: that.data.xiaoguo,      //问题3
        fengong: that.data.fengong,       //问题4
        zijin: that.data.zijin,       //问题5
        jianyi: that.data.jianyi,   //建议
        nickname:that.data.nickname,
        city: that.data.city
      },
      success: function (res) {
        var ret_code = res.data.ret_code;
        if (ret_code === "0") {
          that.setData({
            submitSuccess: true,
          });
          wx.removeStorageSync('mutualcomment_middleData');
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
    if (this.data.organization == this.data.yourorganization) {
      wx.showModal({
        title: '提示',
        content: '您所在的组织和被评估组织相同，请重新选择',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }

    if (this.data.organization == "请选择被评估组织名称") {
      wx.showModal({
        title: '提示',
        content: '请选择被评估组织名称',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.yourorganization == "请选择您所在的组织名称") {
      wx.showModal({
        title: '提示',
        content: '请选择您所在的组织名称',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }

    if (this.data.neirong == "") {
      wx.showModal({
        title: '提示',
        content: '请对问题1打分',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.liucheng == "") {
      wx.showModal({
        title: '提示',
        content: '请对问题2打分',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.xiaoguo == "") {
      wx.showModal({
        title: '提示',
        content: '请对问题3打分',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.fengong == "") {
      wx.showModal({
        title: '提示',
        content: '请对问题4打分',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.zijin == "") {
      wx.showModal({
        title: '提示',
        content: '请对问题5打分',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }

    return true;
  },
})