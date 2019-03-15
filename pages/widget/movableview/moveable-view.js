Page({
  data: {
    x: 0,
    y: 0
  },
  tap(e) {
    this.setData({
      x: 30,
      y: 80
    })
  },
  onChange(e) {
    console.log(e.detail)
  },
  onScale(e) {
    console.log(e.detail)
  }
})