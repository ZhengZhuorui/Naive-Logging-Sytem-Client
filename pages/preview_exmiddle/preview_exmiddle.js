// pages/preview_exmiddle/preview_exmiddle.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xingming: "请填写您的姓名",
    gongzuodanwei: "请填写您的工作单位",
    organization: "请选择被评估组织",
    neirong: "",
    xuqiu: "",
    liucheng: "",
    guocheng: "",
    xiaoguo: "",
    fugailv: "",
    fengong: "",
    tuanjie: "",
    zijin: "",
    caiwu: "",
    zizuzhi: "",
    xiangmusheji: "",
    zijinshiyong: "",
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
    var expert_middleData;
    wx.getStorage({
      key: 'expert_middleData',
      success: function (res) {
        expert_middleData = res.data;
        console.log(expert_middleData);
        //读取本地存储的组织互评信息信息，放入本页Page.data
        console.log("[PREVIEW] read expert_middleData from local storage");
        this.setData({
          xingming: expert_middleData.xingming,
          gongzuodanwei: expert_middleData.gongzuodanwei,
          organization: expert_middleData.organization,
          neirong: expert_middleData.neirong,
          xuqiu: expert_middleData.xuqiu,
          liucheng: expert_middleData.liucheng,
          guocheng: expert_middleData.guocheng,
          xiaoguo: expert_middleData.xiaoguo,
          fugailv: expert_middleData.fugailv,
          fengong: expert_middleData.fengong,
          tuanjie: expert_middleData.tuanjie,
          zijin: expert_middleData.zijin,
          caiwu: expert_middleData.caiwu,
          zizuzhi: expert_middleData.zizuzhi,
          xiangmusheji: expert_middleData.xiangmusheji,
          zijinshiyong: expert_middleData.zijinshiyong,
          time: expert_middleData.time,
          nickname: expert_middleData.nickname
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