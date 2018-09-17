

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
  switchToRecord: function () {
    wx.navigateTo({
      url: '../record/record',
    });
  },
  switchToComment: function(){
    wx.navigateTo({
      url: '../comment/comment',
    });
  },

  switchToPublic: function(){
    wx.navigateTo({
      url: '../public/public',
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
    var that = this;
    var residenceData = wx.getStorageSync('residenceData');
    console.log(residenceData);

    if(residenceData){
      if(residenceData.isGalleryOpen){
        wx.navigateTo({
          url: '../residence/residence',
        });
      }
    }
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