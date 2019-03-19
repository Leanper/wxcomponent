//index.js
//获取应用实例
const app = getApp()

App({
  globalData: 323
})

var brand;
var ratio;
ischeck:false

Page({
  showView: false,
  data: {
    imgUrls: [
      '/images/aa.jpg',
      '/images/b.jpg',
      '/images/c.jpg'

    ],
   
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    inputValue:'',
    datas: [
      wx.getSystemInfo({
        success: function(res) {
        brand=  res.brand;
        ratio=res.pixelRatio;
        },
      }),
      { "title": brand, "src": '/images/hh.jpg', "dec": "狍子1" },
      { "title": ratio, "src": "/images/hh.jpg", "dec": "狍子2" },
      { "title": "标题3", "src": "/images/hh.jpg", "dec": "狍子3" },

      wx.hideShareMenu({
     
      })
    ],

   

  },



  checkboxChange(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },





 /**
* 生命周期函数--监听页面初次渲染完成
*/
onReady: function () {
    //获得dialog组件
  this.dialog = this.selectComponent("#alert");
  },


  showDialog() {
    this.dialog.showDialog();
    this.dialog.getInfos("sssssssssssss")
  },
  //取消事件
  _cancelEvent() {
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  //确认事件
  _confirmEvent() {
    console.log('你点击了确定');

    console.log(this.dialog.getInfos());
    this.dialog.hideDialog();



  },

  //分享按钮的点击处理
  onShareAppMessage(res){
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return{
      title:"铁了头",
      path:"pages/leanper/five/five",
      imageUrl:"/images/hh.jpg"
    }
  
   

  },
   //刷新请求
    onPullDownRefresh() {
  console.log("333333333333333333333");
  this.setData({
    showView: true,
    
  }),
      setTimeOut(function () {
        
        wx.stopPullDownRefresh()

      }, 4000)
  },

  //检测tabbar的点击事件处理
  onTabItemTap(item){

      console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
    console.log(app.globalData)

    wx.showToast({
      title: '抬头',
    }),
    //展示tabbar的
      wx.showTabBarRedDot({
        index: 2,

      })

    console.log(app.globalData.change)

//动态设置导航栏标题
    wx.setNavigationBarTitle({
      title: '还可以这样玩',
    }),
      wx.showTabBar({
        animation: true
      })
      , wx.setTabBarBadge({
        index: 0,
        text: '是',
      }),
      wx.createAnimation({
        duration:1000,
        timingFunction:'ease'
      }),

      wx.setTopBarText({
        text: '哈哈哈哈哈哈哈哈哈哈哈哈',
      })
    
    


  },
 





})
