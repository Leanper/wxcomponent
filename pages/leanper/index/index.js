//index.js
//获取应用实例
const app = getApp()

var brand;
var ratio;
ischeck:false

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
      { "title": "标题3", "src": "/images/hh.jpg", "dec": "狍子3" }
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
  }




})
