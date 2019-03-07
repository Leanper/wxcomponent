// pages/formassembly/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    section__titles:"",
  },
  switchChanges:function(e){
     var b= e.detail.value;
     console.log(b);
  },
  sliderchange:function(e){
    console.log(e.detail.value)
  },
  inputgetvalue:function(e){
    var val = e.detail.value;
     this.setData({
       section__titles:val
     });
  },
  group:function(e){
    e.detail.value
    console.log(e.detail.value)
  },
  radios:function(e){
    console.log(e.detail.value)
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
  formSubmit(e){
    
    console.log(e.detail.value)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
        wx.showToast({
          title: '分享',

        })
  }
})