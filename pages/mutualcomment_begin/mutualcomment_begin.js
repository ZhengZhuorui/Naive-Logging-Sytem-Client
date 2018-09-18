// pages/mutualcomment/mutualcomment.js
import $wuxGallery from "../../components/gallery.js"
import $wuxPickerCity from "../../components/picker-city/picker-city.js"

var util = require('../../utils/util.js'); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yourorganization:"请选择您所在的组织名称",
    organization:"请选择被评估组织名称",
    time:"",
    fengong:"",
    chongdie:"",
    fuwu:"",
    canyudu:"",
    yusuan:"",
    jianyi:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    var mutualcomment_beginData = wx.getStorageSync('mutualcomment_beginData');
    var time = util.getNowFormatDate();
    this.setData({
      time:time
    }
    );
    if (mutualcomment_beginData) {
      this.setData({
        yourorganization:mutualcomment_beginData.yourorganization,
        organization: mutualcomment_beginData.organization,
        time: mutualcomment_beginData.time,
        fengong: mutualcomment_beginData.fengong,
        chongdie: mutualcomment_beginData.chongdie,
        fuwu: mutualcomment_beginData.fuwu,
        canyudu: mutualcomment_beginData.canyudu,
        yusuan: mutualcomment_beginData.yusuan,
        jianyi: mutualcomment_beginData.jianyi,
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
        key: 'mutualcomment_beginData',
        data: this.data,
      });
    }

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },
  onUnload: function () {
    var that = this;
    if (!that.data.submitSuccess) {
      this.setData({
        showContent: true
      });
      wx.setStorage({
        key: 'mutualcomment_beginData',
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
  bindOrganizationPickerChange: function(e) {
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

  sliderChange(e) {
    this.setData({
      slider: e.detail.value,
    })
  },
  onChange1(e) {
    this.setData({
      fengong: e.detail.value,
    })
    console.log(e)
  },
  onChange2(e) {
    this.setData({
      chongdie: e.detail.value,
    })
    console.log(e)
  },
  onChange3(e) {
    this.setData({
      fuwu: e.detail.value,
    })
    console.log(e)
  },
  onChange4(e) {
    this.setData({
      canyudu: e.detail.value,
    })
    console.log(e)
  },
  onChange5(e) {
    this.setData({
      yusuan: e.detail.value,
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

  switchToPreview_mcbegin: function () {
    wx.navigateTo({
      url: '../preview_mcbegin/preview_mcbegin',
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
      url: 'https://45053688.dashilarsqyz.com:/log/mutualcomment_begin/words',
      method: "POST",
      data: {
        yourorganization: that.data.yourorganization,//评估者所在组织
        time: that.data.time,
        organization: that.data.organization, //被评估组织名称
        fengong: that.data.fengong, //问题1
        chongdie: that.data.chongdie,      //问题2
        fuwu: that.data.fuwu,      //问题3
        canyudu: that.data.canyudu,       //问题4
        yusuan: that.data.yusuan,       //问题5
        jianyi: that.data.jianyi,   //建议
      },
      success: function (res) {
        var ret_code = res.data.ret_code;
        if (ret_code === "0") {
          that.setData({
            submitSuccess: true,
          });
          wx.removeStorageSync('mutualcomment_beginData');
          wx.redirectTo({
            url: '../mutualcomment_success/mutualcomment_success',
          });
          return;
        } else{
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

    if (this.data.organization == "请选择被评估组织名称") {
      wx.showModal({
        title: '提示',
        content: '请选择被评估组织名称',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.organization == "请选择您所在的组织名称") {
      wx.showModal({
        title: '提示',
        content: '请选择您所在的组织名称',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }

    if (this.data.fengong == "") {
      wx.showModal({
        title: '提示',
        content: '请对问题1打分',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.chongdie == "") {
      wx.showModal({
        title: '提示',
        content: '请对问题2打分',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.fuwu == "") {
      wx.showModal({
        title: '提示',
        content: '请对问题3打分',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.canyudu == "") {
      wx.showModal({
        title: '提示',
        content: '请对问题4打分',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.yusuan == "") {
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