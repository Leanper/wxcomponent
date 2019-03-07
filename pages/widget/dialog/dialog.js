// pages/widget/dialog/dialog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  
toast:function(e){

wx.showToast({
  title: '吐司',
  image:"/images/shopping.png",
  duration:1000,
  mask:true,

})
},
  loading: function (e) {
      wx.showLoading({
        title: 'loading',
       
      })
      setTimeout(function(){
      wx.hideLoading()
      },2000)
  },
  modal: function (e) {

     wx.showModal({
       title: 'title',
       content: '内容',
       cancelColor:'#00ff00',
       cancelText:"滚",
       confirmColor:"#ff0000",
       confirmText:"啊妈呀",

       success(res){

           if (res.confirm) {
             console.log('用户点击确定'),
             getDatas();

           } else if (res.cancel) {
             console.log('用户点击取消')
           
         }
       }

       

     })


  },


  actionsheet:function(e){
    wx.showActionSheet({
      itemList: ["s","aa","qq"],
      success(res){
        console.log("成功"+res.tapIndex);
     
      },
      fail(r){
        console.log("aaaaaaaaa"+r.errMsg);
      },
      
    }) 
  },

  getDatas:function(){

    wx.request({
      url: 'http://ip.taobao.com/service/getIpInfo.php?ip=63.223.108.42',
      header: { 'Content-Type': 'application/json' },
      setTimeout:2000,
      success(res){
        console.log(res.data);
      },fail(res){
        console.log(res.errMsg);

      }
    })
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