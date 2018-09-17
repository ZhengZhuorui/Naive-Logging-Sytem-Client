// pages/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath:
    ["../../images/shareBackground/background_new_1.jpg",
      "../../images/shareBackground/background_new_2.jpg"],
    textColor: ["#757575","#1565c0"],
    namePos:[{x:130,y:111},{x:115,y:102}],
    datePos:[{x:148,y:137},{x:130,y:127}],
    timePos: [{ x: 250, y: 137 }, { x: 225, y: 127 }],
    organizationPos:[{x:165 ,y:170},{x:154,y:158}],
    name:"方睿钰",
    date:"2000/01/20",
    time:"00:00",
    organization:"清华信义社区营造"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var residenceShareMsg;
    wx.getStorage({
      key: 'residenceShare',
      success: function(res) {
        residenceShareMsg = res.data;
        console.log(residenceShareMsg);
        that.setData({
          name:residenceShareMsg.name,
          date:residenceShareMsg.date.replace(/-/g,"/"),
          time:residenceShareMsg.time,
          organization:residenceShareMsg.organization,
        });
      },
    });

    wx.showToast({
      title: '分享生成中',
      icon: 'loading',
      duration: 2000
    });
    setTimeout(function () {
      wx.hideToast()
      that.createNewImage();
    }, 2000);
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
  
  },

  

  /* 返回主页面 */
  returnBack:function(){
    wx.navigateBack({
      
    });
  },

  createNewImage:function(){
    var that = this;
    var i = Math.floor(Math.random() * 2);
    var context = wx.createCanvasContext('sharePicCanvas');
    var path = this.data.imagePath[i];

    context.drawImage(path, 0, 0, 360, 280);
    that.writeName(context,i);
    that.writeDateTime(context,i);
    that.writeOrganization(context,i);

    context.draw();
  },

  writeName:function(context,i){
    var that = this;
    var namePos = this.data.namePos;
    context.setFontSize(20);
    context.setFillStyle(this.data.textColor[i]);
    context.fillText(this.data.name, namePos[i].x, namePos[i].y);
    context.stroke();
  },

  writeDateTime:function(context,i){
    var that = this;
    var datePos = this.data.datePos;
    var timePos = this.data.timePos;
    context.setFontSize(13);
    context.setFillStyle(this.data.textColor[i]);
    context.fillText(this.data.date, datePos[i].x, datePos[i].y);
    context.stroke();
    context.setFontSize(13);
    context.setFillStyle(this.data.textColor[i]);
    context.fillText(this.data.time, timePos[i].x, timePos[i].y);
    context.stroke();
    
  },
  writeOrganization: function (context, i) {
    var that = this;
    var orgPos = this.data.organizationPos;
    context.setFontSize(15);
    context.setFillStyle(this.data.textColor[i]);
    context.fillText(this.data.organization, orgPos[i].x, orgPos[i].y);
    context.stroke();
  },
  saveToLocal:function(){
    wx.showToast({
      title: '保存中',
      icon: 'loading',
      duration: 3000
    });
    //将生成好的图片保存到本地，需要延迟一会，绘制期间耗时
    setTimeout(function () {
      wx.canvasToTempFilePath({
        canvasId: 'sharePicCanvas',
        success: function (res) {
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success: function (res) {
              console.log(res);
              wx.showToast({
                title: '已保存到相册！',
              })
            },
            fail: function (res) {
              console.log(res)
              wx.showModal({
                title: '提示',
                content: '保存分享图片失败！',
              });
            }
          })  
        },
        fail: function (res) {
          console.log(res);
          wx.showModal({
            title: '提示',
            content: '保存分享图片失败！',
          })
        }
      });
    }, 2000);
  }
})