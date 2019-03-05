//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    info :'',
    hasUserInfo: false,


    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

    onLoad: function () {
      var that = this;
      wx.request({
        url: 'https://www.apiopen.top/satinApi?type=1&page=1',//要遍历的url，http没有数据的话用https
        header: { 'Content-Type': 'application/json' },
        data:{
          info:'',
        },

        success: function (res) {
          console.log(res)
         
               that.setData({
                 info: res.data,
              
                //  tv_size: res.msg,

              })
         
         
         
    
        }

      })
    
  },

  getdata:function(e){
    var that = this;
    wx.request({
      url: 'https://www.apiopen.top/satinApi?type=1&page=1',//要遍历的url，http没有数据的话用https
      header: { 'Content-Type': 'application/json' },
      data: {
        info: '',
      },

      success: function (res) {
        console.log(res)

        that.setData({
          info: res.data,

          //  tv_size: res.msg,

        })




      }

    })
  }

})
