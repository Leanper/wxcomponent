//index.js
//获取应用实例
const app = getApp()

var brand;
var ratio;

Page({
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
    datas: [
      wx.getSystemInfo({
        success: function(res) {
        brand=  res.brand;
        ratio=res.pixelRatio;
        },
      }),
      { "title": brand, "src": '/images/hh.jpg', "dec": "狍子1" },
      { "title": ratio, "src": "/images/hh.jpg", "dec": "狍子2" },
      { "title": "标题3", "src": "/images/hh.jpg", "dec": "狍子3" }
    ],
    click(){
      this.setData({ msg: 'Hello World' })
    }

  },






})