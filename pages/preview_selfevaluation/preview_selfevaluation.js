// pages/preview_selfevaluation/preview_selfevaluation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    organization: "您所在的组织名称",
    name: "",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    identity: false,
    time: ""
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
    var self_evaluationData;
    wx.getStorage({
      key: 'self_evaluationData',
      success: function (res) {
        self_evaluationData = res.data;
        console.log(self_evaluationData);
        //读取本地存储的组织评估信息，放入本页Page.data
        console.log("[PREVIEW] read self_evaluationData from local storage");
        that.setData({
          organization: self_evaluationData.organization,
          name: self_evaluationData.name,
          identity: self_evaluationData.identity,
          q1: self_evaluationData.q1,
          q2: self_evaluationData.q2,
          q3: self_evaluationData.q3,
          q4: self_evaluationData.q4,
          q5: self_evaluationData.q5,
          q6: self_evaluationData.q6,
          q7: self_evaluationData.q7,
          q8: self_evaluationData.q8,
        });
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