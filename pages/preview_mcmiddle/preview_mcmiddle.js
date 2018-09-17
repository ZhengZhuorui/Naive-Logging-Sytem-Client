// pages/preview_mcmiddle/preview_mcmiddle.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yourorganization: "请选择您所在的组织名称",
    organization: "请选择被评估组织名称",
    neirong: "",
    liucheng: "",
    xiaoguo: "",
    fengong: "",
    zijin: "",
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
    var mutualcomment_middleData;
    wx.getStorage({
      key: 'mutualcomment_middleData',
      success: function (res) {
        mutualcomment_middleData = res.data;
        console.log(mutualcomment_middleData);
        //读取本地存储的组织评估信息，放入本页Page.data
        console.log("[PREVIEW] read mutualcomment_middleData from local storage");
        that.setData({
          yourorganization: mutualcomment_middleData.yourorganization,
          organization: mutualcomment_middleData.organization,
          neirong: mutualcomment_middleData.neirong,
          liucheng: mutualcomment_middleData.liucheng,
          xiaoguo: mutualcomment_middleData.xiaoguo,
          fengong: mutualcomment_middleData.fengong,
          zijin: mutualcomment_middleData.zijin,
          jianyi: mutualcomment_middleData.jianyi,
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