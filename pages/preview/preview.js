// pages/preview/preview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    organization: "请选择组织名称",
    joinNumber: "", //参加人数
    location: "",
    date: "请点击选择日期",
    time: "请点击选择时间",
    theme: "",
    content: "",

    name: "",     //提交者姓名
    feeling: "",  //感受 
    other: "",

    //活动照片的url列表
    activityPhotoUrls: [],
    //微创投照片的URL列表
    sheetPhotoUrls: [],
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
    var residenceData;
    wx.getStorage({
      key: 'residenceData',
      success: function(res) {
        residenceData = res.data;
        console.log(residenceData);
        //读取本地存储的居民填写信息，放入本页Page.data
        console.log("[PREVIEW] read residence data from local storage");
        that.setData({
          organization: residenceData.organization,
          joinNumber: residenceData.joinNumber, //参加人数
          location: residenceData.location,
          date: residenceData.date,
          time: residenceData.time,
          theme: residenceData.theme,
          content: residenceData.content,

          name: residenceData.name,     //发声者名称
          feeling: residenceData.feeling,  //感受 
          other: residenceData.other,

          activityPhotoUrls: residenceData.activityPhotoUrls,
          sheetPhotoUrls: residenceData.sheetPhotoUrls,
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

  switchBack: function(){
    wx.navigateBack({});
  }
})