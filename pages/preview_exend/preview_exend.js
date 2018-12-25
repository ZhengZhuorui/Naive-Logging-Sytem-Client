// pages/preview_exend/preview_exend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    var expert_endData;
    wx.getStorage({
      key: 'expert_endData',
      success: function (res) {
        expert_endData = res.data;
        console.log(expert_endData);
        //读取本地存储的组织互评信息信息，放入本页Page.data
        console.log("[PREVIEW] read expert_endData from local storage");
        that.setData({
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
          jianyi1: expert_endData.zizuzhi,
          jianyi2: expert_endData.xiangmusheji,
          jianyi3: expert_endData.zijinshiyong,
          time: expert_endData.time,
          nickname: expert_endData.nickname
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