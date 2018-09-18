// pages/expert/expert.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  switchToexpert_begin: function () {
    wx.navigateTo({
      url: '../expert_begin/expert_begin',
    });
  },
  switchToexpert_middle: function () {
    wx.navigateTo({
      url: '../expert_middle/expert_middle',
    });
  },

  switchToexpert_end: function () {
    wx.navigateTo({
      url: '../expert_end/expert_end',
    });
  },

  switchToNot_existed: function () {
    wx.navigateTo({
      url: '../not_existed/not_existed',
    });
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

  }
})