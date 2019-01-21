// pages/new_index/new_index.js
import $wuxGallery from "../../components/gallery.js"

var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showOther: "none",  //是否展示other这个输入框
    radiocityItems: [
      { name: '北京', value: "北京", checked: true },
      { name: '成都', value: "成都"},
      { name: '南京',value: "南京"},
      { name: '其他', value: '其他' },
    ],

    city: '' //居民所在城市

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this);
    var that = this;
    var globaldata = wx.getStorageSync('globaldata');
    if (globaldata) {
      console.log("LLLL");
      this.setData({
        city:globaldata.city,
        showOther:globaldata.showOther
      })
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

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  //获取所在城市
  radiocityChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    //如果选择是’其他‘值，则把输入框设置为显示  
    if (e.detail.value == "其他") {
      console.log("show other");
      this.setData({ 
        showOther: "inline"
      });
    } else {
      //未选中‘其他’，隐藏输入框
      console.log("hide other");
      this.setData({
        showOther: "none"
      });
    }

    //根据序号把选中的框
    var radioItems = this.data.radiocityItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      city: e.detail.value,
      radiocityItems: radioItems,
      app: app.globalData.city = this.data.city
    });
  },

  cityChange: function (e) {
    console.log(e.detail.value);
    this.setData({
      city: e.detail.value,
      app:app.globalData.city = this.data.city
    });
  },
  
  switchToindex_page: function () {
    wx.navigateTo({
      url: '../index/index',
    });
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