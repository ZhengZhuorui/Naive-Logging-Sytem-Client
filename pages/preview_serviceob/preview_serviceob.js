// pages/preview_serviceob/preview_serviceob.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showOther: "none",  //是否展示other这个输入框
    xingming: "",
    gongzuodanwei: "",
    servicedate: "",
    servicetime: "",
    serviceplace: "",
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
    var that = this;
    var seviceobjectData;
    wx.getStorage({
      key: 'seviceobjectData',
      success: function (res) {
        seviceobjectData = res.data;
        console.log(seviceobjectData);
        //读取本地存储的组织互评信息信息，放入本页Page.data
        console.log("[PREVIEW] read seviceobjectData from local storage");
        that.setData({
          xingming: seviceobjectData.xingming,
          gongzuodanwei: seviceobjectData.gongzuodanwei,
          organization: seviceobjectData.organization,
          servicedate: seviceobjectData.servicedate,
          servicetime: seviceobjectData.servicetime,
          serviceplace: seviceobjectData.serviceplace,
          organization: seviceobjectData.organization, //举办活动的社区组织名称 
          q1: seviceobjectData.q1,
          q2: seviceobjectData.q2,
          q3: seviceobjectData.q3,
          jianyi: seviceobjectData.jianyi,
          time: seviceobjectData.time,
          nickname: seviceobjectData.nickname
        })
      },
    })

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
  switchBack: function () {
    wx.navigateBack({});
  }
})