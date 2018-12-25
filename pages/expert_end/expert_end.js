// pages/expert_end/expert_end.js
import $wuxGallery from "../../components/gallery.js"
import $wuxPickerCity from "../../components/picker-city/picker-city.js"

var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showOther: "none",  //是否展示other这个输入框
    xingming: "",
    gongzuodanwei: "",
    organization: "请选择被评估组织",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q10: "",
    jianyi1: "",
    jianyi2: "",
    jianyi3: "",
    time: "",
    nickname: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var expert_endData = wx.getStorageSync('expert_endData');
    if (expert_endData) {
      this.setData({
        showOther: expert_endData.showOther,  //是否展示other这个输入框
        xingming: expert_endData.xingming,
        gongzuodanwei: expert_endData.gongzuodanwei,
        organization: expert_endData.organization,
        q1: expert_endData.q1,
        q2: expert_endData.q2,
        q3: expert_endData.q3,
        q4: expert_endData.q4,
        q5: expert_endData.q5,
        q6: expert_endData.q6,
        q7: expert_endData.q7,
        q8: expert_endData.q8,
        q9: expert_endData.q9,
        q10: expert_endData.q10,
        jianyi1: expert_endData.jianyi1,
        jianyi2: expert_endData.jianyi2,
        jianyi3: expert_endData.jianyi3,
        time: expert_endData.time,
        nickname: expert_endData.nickname
      })
    }
    var time = util.getNowFormatDate();
    this.setData({
      time: time
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
        key: 'expert_endData',
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
        key: 'expert_endData',
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
  /*选择被评估组织名称*/
  bindOrganizationPickerChange: function () {
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
          organization: p.value[2],
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
  organizationchange(e){
    this.setData({
      organization:e.detail.value
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
  onChange9(e) {
    this.setData({
      q9: e.detail.value,
    })
    console.log(e)
  },
  onChange10(e) {
    this.setData({
      q10: e.detail.value,
    })
    console.log(e)
  },


  bindzizuzhiChange: function (e) {
    var value = e.detail.value, len = parseInt(value.length);
    if (len > 300) return;
    this.setData({
      jianyi1: e.detail.value,
    });
  },
  bindxiangmushejiChange: function (e) {
    var value = e.detail.value, len = parseInt(value.length);
    if (len > 300) return;
    this.setData({
      jianyi2: e.detail.value,
    });
  },
  bindzijinshiyongChange: function (e) {
    var value = e.detail.value, len = parseInt(value.length);
    if (len > 300) return;
    this.setData({
      jianyi3: e.detail.value,
    });
  },
  switchTopreview_exend: function () {
    wx.navigateTo({
      url: '../preview_exend/preview_exend',
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
      url: 'https://45053688.dashilarsqyz.com:/log/expert_end/words',
      method: "POST",
      data: {
        xingming: that.data.xingming,
        gongzuodanwei: that.data.gongzuodanwei,
        organization: that.data.organization,
        q1: that.data.q1,
        q2: that.data.q2,
        q3: that.data.q3,
        q4: that.data.q4,
        q5: that.data.q5,
        q6: that.data.q6,
        q7: that.data.q7,
        q8: that.data.q8,
        q9: that.data.q9,
        q10: that.data.q10,
        jianyi1: that.data.jianyi1,
        jianyi2: that.data.jianyi2,
        jianyi3: that.data.jianyi3,
        time: that.data.time,
        nickname: that.data.nickname
      },
      success: function (res) {
        var ret_code = res.data.ret_code;
        if (ret_code === "0") {
          that.setData({
            submitSuccess: true,
          });
          wx.removeStorageSync('expert_endData');
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
    if (this.data.organization == "请选择被评估组织") {
      wx.showModal({
        title: '提示',
        content: '请选择被评估组织',
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
    if (this.data.q9 == "") {
      wx.showModal({
        title: '提示',
        content: '请对问题9打分',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if (this.data.q10 == "") {
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