// pages/mediaassembly/inter/getdata.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrays:'',
  },

  onLoad: function () {
    
    var that = this
    wx.request({
      url: 'https://api.apiopen.top/musicRankingsDetails?type=1',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        //将获取到的json数据，存在名字叫list的这个数组中
        that.setData({
          arrays:res.data.result

         
          //res代表success函数的事件对，data是固定的，list是数组
        })
      }
    })},

    onPullDownRefresh:function(){
      wx.request({
        url: 'https://api.apiopen.top/musicRankingsDetails?type=2',
        headers: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          console.log(res)
          //将获取到的json数据，存在名字叫list的这个数组中
          that.setData({
            arrays: res.data.result


            //res代表success函数的事件对，data是固定的，list是数组
          })
        }

      })
    },
    

 
 


})