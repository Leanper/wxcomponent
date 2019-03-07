// pages/widget/checkbox/checkbox.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'USA', value: '韩狍子' },
      { name: 'CHN', value: '韩晓伟傻狍子', checked: 'true' },
      { name: 'BRA', value: '降狍十八掌' },

    ],
  },
  sing:function(e){

      if(e.detail.value){
        console.log("未选中");
      }else{
        console.log("已选中");

      }
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})