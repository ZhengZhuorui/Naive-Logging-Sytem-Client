// pages/preview_mcbegin/preview_mcbegin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yourorganization: "请选择您所在的组织名称",
    organization: "请选择被评估组织名称",
    time:"",
    fengong: "",
    chongdie: "",
    fuwu: "",
    canyudu: "",
    yusuan: "",
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
    var mutualcomment_beginData;
    wx.getStorage({
      key: 'mutualcomment_beginData',
      success: function (res) {
        mutualcomment_beginData = res.data;
        console.log(mutualcomment_beginData);
        //读取本地存储的组织互评信息信息，放入本页Page.data
        console.log("[PREVIEW] read mutualcomment_beginData from local storage");
        that.setData({
          yourorganization: mutualcomment_beginData.yourorganization,
          organization: mutualcomment_beginData.organization,
          //time: mutualcomment_beginData.time,
          fengong: mutualcomment_beginData.fengong,
          chongdie: mutualcomment_beginData.chongdie,
          fuwu: mutualcomment_beginData.fuwu,
          canyudu: mutualcomment_beginData.canyudu,
          yusuan: mutualcomment_beginData.yusuan,
          jianyi: mutualcomment_beginData.jianyi,
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