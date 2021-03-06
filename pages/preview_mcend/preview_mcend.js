// pages/preview_mcend/preview_mcend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yourorganization: "请选择您所在的组织名称",
    organization: "请选择被评估组织名称",
    time: "",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    jianyi: ""
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
    var mutualcomment_endData;
    wx.getStorage({
      key: 'mutualcomment_endData',
      success: function (res) {
        mutualcomment_endData = res.data;
        console.log(mutualcomment_endData);
        //读取本地存储的组织互评信息信息，放入本页Page.data
        console.log("[PREVIEW] read mutualcomment_endData from local storage");
        that.setData({
          yourorganization: mutualcomment_endData.yourorganization,
          organization: mutualcomment_endData.organization,
          time: mutualcomment_endData.time,
          q1: mutualcomment_endData.q1,
          q2: mutualcomment_endData.q2,
          q3: mutualcomment_endData.q3,
          q4: mutualcomment_endData.q4,
          q5: mutualcomment_endData.q5,
          jianyi: mutualcomment_endData.jianyi,
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