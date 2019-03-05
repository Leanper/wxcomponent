Page({
  data: {
    result: '',
    state: '',
    info:'',
    textdata: "", 
  },

  getMessage: function (e) {
    var that = this;
    var fromData = e.detail.value.message;
    var resultMessage;

    wx.request({
      url: 'https://www.apiopen.top/satinApi?type=1&page=1',
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        // resultMessage = res.data.showapi_res_body.pagebean.contentlist;
        console.log(res)
        resultMessage = res.data.success
        that.setData({
          info: res,
          textdata: res.errCode
        })
        wx.showToast({
          title: '已经提交',
          icon: 'success',
          duration: 2000
        })
      }
    })

    var val = resultMessage;

    console.log('user', val)
    
  },


})