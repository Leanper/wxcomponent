// pages/mediaassembly/camare/camare.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showView: true
  },

  onLoad: function (options) { 
    this.ctx = wx.createCameraContext() 
    showView: (options.showView == "true" ? true : false)
    }, 
    
    //开始录像
   btnClick1:function(){
      this.ctx.startRecord({ 
        success: (res) => { 
          console.log('startRecord')
           }
            }) 
            }, 
   //结束录像
    btnClick2: function () {
       this.ctx.stopRecord({
          success: (res) => { 
            this.setData({
               videoSrc: res.tempVideoPath
                }) 
                } 
                }) 
                },
     //拍摄照片
      btnClick3: function () { this.ctx.takePhoto({ quality: 'high', success: (res) => { this.setData({ src: res.tempImagePath }) } }) },
         onChangeShowState: function () {

    var that = this;

    that.setData({

      showView: (!that.data.showView)

    })

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
  opencamare:function(e){
    
   

  },
  

})