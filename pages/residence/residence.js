import $wuxGallery from "../../components/gallery.js"
import $wuxPickerCity from "../../components/picker-city/picker-city.js"

var util = require('../../utils/util.js');

Page({
  data: {
    /* 填写的表单信息 */
    organization: "请选择组织名称",
    joinNumber: "", //参加人数
    location: "",
    date: "请点击选择日期",
    time: "请点击选择时间",
    theme: "",
    content: "",

    name: "",     //发声者名称
    feeling: "",  //感受 
    other: "",

    //活动照片的url列表
    activityPhotoUrls: [],
    //微创投照片的URL列表
    sheetPhotoUrls: [],

    /* 位置信息 */
    latitude: "",
    longitude: "",
    
    // tab切换  
    currentTab: 0,

    //控制3个分页显示的变量
    showPage1:true,
    showPage2:false,
    showPage3:false,
   
    //监听使用返回键的时候需不需要关闭gallery
    isGalleryOpen:false,

    //记录是否提交成功，用于在页面销毁的时候判断是否需要储存信息
    submitSuccess:false,

    //记录自定义的组织名称选择器是否弹出，用于控制活动内容textarea的隐藏
    showContent:true,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    var residenceData = wx.getStorageSync('residenceData');
    wx.getLocation({
      success: function (res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        });
      },
    });

    if (residenceData) {
      this.setData({
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

        indexOrganization: residenceData.indexOrganization,

        currentTab: residenceData.currentTab,
        showPage1: residenceData.showPage1,
        showPage2: residenceData.showPage2,
        showPage3: residenceData.showPage3

      });
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
    var that = this;
    this.setData({
      showContent:true
    });
    if (!that.data.submitSuccess) {
      wx.setStorage({
        key: 'residenceData',
        data: this.data,
      });
    }

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    var that = this;
    if (!that.data.submitSuccess) {
      this.setData({
        showContent: true
      });
      wx.setStorage({
        key: 'residenceData',
        data: this.data,
      });
    }else {
      var residenceShareMsg = {
        name:this.data.name,
        date:this.data.date,
        time:this.data.time,
        organization:this.data.organization,
      };
      wx.setStorage({
        key: 'residenceShare',
        data: residenceShareMsg,
      })
    }
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


  /* 点击tab切换页面 */
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      var currentVal = e.target.dataset.current;
      that.setData({
        currentTab: e.target.dataset.current
      });
      if (currentVal == 0) {
        that.setData({
          showPage1: true,
          showPage2: false,
          showPage3: false,
        });
      } else if (currentVal == 1) {
        that.setData({
          showPage1: false,
          showPage2: true,
          showPage3: false,
        });
      } else if (currentVal == 2) {
        that.setData({
          showPage1: false,
          showPage2: false,
          showPage3: true,
        });
      }
    }
  },


  /* 选择社区组织名称 */
  bindOrganizationPickerChange: function (e) {
    var that = this;
    this.setData({
      showContent: false
    });
    $wuxPickerCity.init('city', {
      title: '请选择社区及组织名称',
      value: [8, 0, 11],
      onChange(p) {
        console.log(p);
        that.setData({
          organization: p.value[2],
      });
      },
      onHidden(){
        console.log("[picker-city]: onHidden");
        that.setData({
          showContent: true
        });
      }
    });
  },

  /* 下面分别是参与人数，地点，日期，时间的监听器 */
  bindJoinNumberChange: function (e) {
    this.setData({
      joinNumber: e.detail.value
    });
  },
  bindLocationChange: function (e) {
    this.setData({
      location: e.detail.value
    });
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  /* 下面分别是 活动主题，活动内容 的监听器 */
  bindThemeChange: function (e) {
    this.setData({
      theme: e.detail.value
    });
  },
  bindContentChange: function (e) {
    var value = e.detail.value, len = parseInt(value.length);
    if (len > 300) return;
    this.setData({
      content: e.detail.value,
    });
  },
  
  /* 下面分别是 姓名，感悟，背景介绍 的监听器 */
  bindNameChange: function (e) {
    this.setData({
      name: e.detail.value
    });
  },
  bindFeelingChange: function (e) {
    var value = e.detail.value, len = parseInt(value.length);
    if (len > 300) return;
    this.setData({
      feeling: e.detail.value,
    })
  },
  bindOtherChange: function (e) {
    var value = e.detail.value, len = parseInt(value.length);
    if (len > 300) return;
    this.setData({
      other: e.detail.value,
    });

  },


  /* 上传活动时候的照片 */
  chooseActivityImage: function (e) {
    var that = this;
    if(that.data.activityPhotoUrls.length<10){
    wx.chooseImage({
      count:10,//一次可以选择的最多图片数
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          activityPhotoUrls: that.data.activityPhotoUrls.concat(res.tempFilePaths),
        });

      }
    })
    }else{
      wx.showModal({
        title: '提示',
        content: '最多上传10张图片',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      }); 
    }
  },

  /* 上传微创投表图片 */
  chooseSheetImage: function (e) {
    var that = this;
    if (that.data.sheetPhotoUrls.length < 10) {
    wx.chooseImage({
      count: 10,//一次可以选择的最多图片数
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          sheetPhotoUrls: that.data.sheetPhotoUrls.concat(res.tempFilePaths),
        });

      }
    })
    } else {
      wx.showModal({
        title: '提示',
        content: '最多上传10张图片',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
    }
  },

  /* 自定义的组件gallery，实现预览图片的时候删除 */
  showGallery(e) {
    var that = this;
    const dataset = e.currentTarget.dataset;
    const current = dataset.current;
    const photo_type = dataset.type;
    var urls = [];
    if (photo_type === "activity") {
      urls = this.data.activityPhotoUrls;
    } else {
      urls = this.data.sheetPhotoUrls;
    }
    this.setData({ isGalleryOpen: true });

    $wuxGallery.show({

      current: current,
      urls: urls,
      [`delete`](current, urls) {
        urls.splice(current, 1);
        if (photo_type === "activity") {
          this.setData({
            activityPhotoUrls: urls,
            isGalleryOpen: false,
          });
        } else {
          this.setData({
            sheetPhotoUrls: urls,
            isGalleryOpen: false,
          });
        }
        return !0
      },
      cancel: function () {
        this.setData({
          isGalleryOpen: false,
        });
      },
    });
  },

 /* 跳转到预览页面，会调用onHide中的方法，存储页面数据 */
  switchToPreview: function () {
    wx.navigateTo({
      url: '../preview/preview',
    });
  },

  /* 提交表单数据 */
  submitAll: function () {
    var that = this;

    //验证必要信息是否全部提交了
    if (!this.validate()) {
      return;
    }

    wx.request({
      url: 'https://45053688.dashilarsqyz.com:/log/residence/words',
      method: "POST",
      data: {
        organization: that.data.organization, //组织名称
        joinNumber: that.data.joinNumber, //参加人数
        location: that.data.location,      //位置
        date: that.data.date,      //日期
        time: that.data.time,       //时间
        theme: that.data.theme,       //主题
        content: that.data.content,   //内容

        name: that.data.name,
        feeling: that.data.feeling,
        other: that.data.other,        //其他背景
        
        
        latitude: that.data.latitude,
        longitude: that.data.longitude,
      },

      success: function (res) {
        var ret_code = res.data.ret_code;
        if(ret_code==="0"){
          /* 提交表单信息成功，下面判断是否需要提交图片 */
          var photoNum = that.data.activityPhotoUrls.length + that.data.sheetPhotoUrls.length;
          
          if (photoNum == 0) {
            /* 没有传图片，只发表感受 -> 把本地缓存清空，跳转到提交成功页面 */
            that.setData({
              submitSuccess:true,
            });
            wx.removeStorageSync('residenceData');
            wx.redirectTo({
              url: '../residence_success/residence_success',
            });
            return;
          }else{
            /* 需要上传图片 -> 上传图片 */
            wx.showLoading({
              title: '正在上传图片',
            })

            var successUp = 0; //成功个数
            var failUp = 0; //失败个数
            var length = photoNum; //总共个数
            var i = 0; //第几个
            var filePaths = [];
            for (var i = 0; i < that.data.activityPhotoUrls.length; i++) {
              var dic = {};
              dic['path'] = that.data.activityPhotoUrls[i];
              dic['type'] = 'activity';
              filePaths.push(dic);
            }
            for (var i = 0; i < that.data.sheetPhotoUrls.length; i++) {
              var dic = {};
              dic['path'] = that.data.sheetPhotoUrls[i];
              dic['type'] = 'sheet';
              filePaths.push(dic);
            }
            console.log(filePaths);
            console.log(successUp);
            console.log(failUp);
            console.log(i);
            console.log(length);

            that.uploadDIY(filePaths, successUp, failUp, 0, length);
          }
        }else{
          /* 提交表单信息失败，跳出对话框提示 */
          wx.showModal({
            title: '操作失败',
            content: '提交信息失败！请稍后再试',
            showCancel: false, //不显示取消按钮
            confirmText: '确定'
          })
        }
      },
    });
  },

  /* 上传图片到服务器 */
  uploadDIY(filePaths, successUp, failUp, i, length) {
    console.log(filePaths);
    console.log(successUp);
    console.log(failUp);
    console.log(length);
    var that = this;
    wx.uploadFile({
      url: 'https://45053688.dashilarsqyz.com:/log/residence/pic',
      filePath: filePaths[i].path,
      name: 'file',
      formData: {
        'date': that.data.date,
        'time': that.data.time,
        'organization': that.data.organization,
        'name':that.data.name,
        "type": filePaths[i]['type']
      },
      success: (resp) => {
        successUp++;
      },
      fail: (res) => {
        failUp++;
      },
      complete: () => {
        i++;
        if (i === length) {
          
          if(successUp===filePaths.length){
            wx.hideLoading();
            /* 已经成功上传所有图片 */
            that.setData({
              submitSuccess: true,
            });
            wx.removeStorageSync('residenceData');
            wx.redirectTo({
              url: '../residence_success/residence_success',
            });
          }else{
            /* 没有成功上传所有图片 */
            wx.hideLoading();
            wx.showModal({
              title: '操作失败',
              content: '提交信息失败！请稍后再试',
              showCancel: false, //不显示取消按钮
              confirmText: '确定'
            })
          }
        }
        else {  //递归调用uploadDIY函数
          this.uploadDIY(filePaths, successUp, failUp, i, length);
        }
      },
    });
  },
  
  /* 验证页面有没有没填的东西了 */
  validate: function () {

    if (this.data.organization === "请选择组织名称") {
      wx.showModal({
        title: '提示',
        content: '请选择组织名称',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if(this.data.date==="请点击选择日期"){
      wx.showModal({
        title: '提示',
        content: '请选择日期',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    
    if(this.data.name===""){
      wx.showModal({
        title: '提示',
        content: '请输入您的姓名',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }
    if(this.data.feeling==="") {
      wx.showModal({
        title: '提示',
        content: '请输入您的感受',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      });
      return false;
    }

    return true;
  },



  

  

  
  
});
