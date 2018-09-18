// pages/expert_middle/expert_middle.js
import $wuxGallery from "../../components/gallery.js"
import $wuxPickerCity from "../../components/picker-city/picker-city.js"

var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xingming:"请输入您的姓名",
    gongzuodanwei:"请输入您所在的工作单位",
    organization:"请选择被评估组织",
    neirong:"",
    xuqiu:"",
    liucheng:"",
    guocheng:"",
    xiaoguo:"",
    fugailv:"",
    fengong:"",
    tuanjie:"",
    zijin:"",
    caiwu:"",
    zizuzhi:"",
    xiangmusheji:"",
    zijinshiyong:"",
    time:"",
    nickname:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var expert_middleData = wx.getStorageSync('expert_middleData');
    if(expert_middleData){
      this.setData({
        xingming: expert_middleData.xingming,
        gongzuodanwei: expert_middleData.gongzuodanwei,
        organization: expert_middleData.organization,
        neirong: expert_middleData.neirong,
        xuqiu: expert_middleData.xuqiu,
        liucheng: expert_middleData.liucheng,
        guocheng: expert_middleData.guocheng,
        xiaoguo: expert_middleData.xiaoguo,
        fugailv: expert_middleData.fugailv,
        fengong: expert_middleData.fengong,
        tuanjie: expert_middleData.tuanjie,
        zijin: expert_middleData.zijin,
        caiwu: expert_middleData.caiwu,
        zizuzhi: expert_middleData.zizuzhi,
        xiangmusheji: expert_middleData.xiangmusheji,
        zijinshiyong: expert_middleData.zijinshiyong,
        time: expert_middleData.time,
        nickname: expert_middleData.nickname
      })
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

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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
  bindsuozaidanweiChange: function (e) {
    this.setData({
      suozaidanwei: e.detail.value
    });
  },
  /*选择被评估组织名称*/
  bindOrganizationPickerChange:function(){
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
      },
      onHidden() {
        console.log("[picker-city]: onHidden");
        that.setData({
          showContent: true
        });
      }
    });
},
  onChange1(e) {
    this.setData({
      neirong: e.detail.value,
    })
    console.log(e)
  },
  onChange2(e) {
    this.setData({
      xuqiu: e.detail.value,
    })
    console.log(e)
  },
  onChange3(e) {
    this.setData({
      liucheng: e.detail.value,
    })
    console.log(e)
  },
  onChange4(e) {
    this.setData({
      guocheng: e.detail.value,
    })
    console.log(e)
  },
  onChange5(e) {
    this.setData({
      xiaoguo: e.detail.value,
    })
    console.log(e)
  },
  onChange6(e) {
    this.setData({
      fugailv: e.detail.value,
    })
    console.log(e)
  },
  onChange7(e) {
    this.setData({
      fengong: e.detail.value,
    })
    console.log(e)
  },
  onChange8(e) {
    this.setData({
      tuanjie: e.detail.value,
    })
    console.log(e)
  },
  onChange9(e) {
    this.setData({
      zijin: e.detail.value,
    })
    console.log(e)
  },
  onChange10(e) {
    this.setData({
      caiwu: e.detail.value,
    })
    console.log(e)
  },


  bindzizuzhiChange: function (e) {
    var value = e.detail.value, len = parseInt(value.length);
    if (len > 300) return;
    this.setData({
      zizuzhi: e.detail.value,
    });
  },
  bindxiangmushejiChange: function (e) {
    var value = e.detail.value, len = parseInt(value.length);
    if (len > 300) return;
    this.setData({
      xiangmusheji: e.detail.value,
    });
  },
  bindzijinshiyongChange: function (e) {
    var value = e.detail.value, len = parseInt(value.length);
    if (len > 300) return;
    this.setData({
      zijinshiyong: e.detail.value,
    });
  },
  switchTopreview_exmiddle: function () {
    wx.navigateTo({
      url: '../preview_exmiddle/preview_exmiddle',
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
      url: 'https://45053688.dashilarsqyz.com:/log/expert_middle/words',
      method: "POST",
      data: {
        xingming: that.data.xingming,
        gongzuodanwei: that.data.gongzuodanwei,
        organization: that.data.organization,
        neirong: that.data.neirong,
        xuqiu: that.data.xuqiu,
        liucheng: that.data.liucheng,
        guocheng: that.data.guocheng,
        xiaoguo: that.data.xiaoguo,
        fugailv: that.data.fugailv,
        fengong: that.data.fengong,
        tuanjie: that.data.tuanjie,
        zijin: that.data.zijin,
        caiwu: that.data.caiwu,
        zizuzhi: that.data.zizuzhi,
        xiangmusheji: that.data.xiangmusheji,
        zijinshiyong: that.data.zijinshiyong,
        time: that.data.time,
        nickname: that.data.nickname
      },
      success: function (res) {
        var ret_code = res.data.ret_code;
        if (ret_code === "0") {
          that.setData({
            submitSuccess: true,
          });
          wx.removeStorageSync('expertData');
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

    if (this.data.xingming == "请输入您的姓名") {
      wx.showModal({
        title: '提示',
        content: '请填写您的名字',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.gongzuodanwei == "请输入您所在的单位") {
      wx.showModal({
        title: '提示',
        content: '请填写您的工作单位',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.gongzuodanwei == "请选择被评估组织") {
      wx.showModal({
        title: '提示',
        content: '请选择被评估组织',
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
    if (this.data.xuqiu == "") {
      wx.showModal({
        title: '提示',
        content: '请对问题2打分',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.liucheng == "") {
      wx.showModal({
        title: '提示',
        content: '请对问题3打分',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.guocheng == "") {
      wx.showModal({
        title: '提示',
        content: '请对问题4打分',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.xiaoguo == "") {
      wx.showModal({
        title: '提示',
        content: '请对问题5打分',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.fugailv == "") {
      wx.showModal({
        title: '提示',
        content: '请对问题6打分',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.fengong == "") {
      wx.showModal({
        title: '提示',
        content: '请对问题7打分',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.tuanjie == "") {
      wx.showModal({
        title: '提示',
        content: '请对问题8打分',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.zijin == "") {
      wx.showModal({
        title: '提示',
        content: '请对问题9打分',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.caiwu == "") {
      wx.showModal({
        title: '提示',
        content: '请对问题10打分',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }

    return true;
  },

})