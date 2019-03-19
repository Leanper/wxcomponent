## 系统信息 wx.getsystemInfo
  * console.log(res.model)  型号 
   *     console.log(res.pixelRatio) 像素比
   *     console.log(res.windowWidth) 
    *    console.log(res.windowHeight) 可用宽高度
    *    console.log(res.language) 语言
    *    console.log(res.version)  微信版本
     *   console.log(res.platform) 客户端平台  



## wx的展示信息
  * wx.showTabBarRedDot 展示右上角红点
    * wx.setNavigationBarTitle 动态修改标题
    
  *  //检测tabbar的点击事件处理 onTabItemTap(item){

      console.log(item.index)
       console.log(item.pagePath)
      console.log(item.text)
      console.log(app.globalData)
  }
    * wx.setTabBarItem 动态修tabbar的某项内容
    * wx.setTabBarStyle 动态修改tabbar整体样式
    * wx.setTabBarBadge为某一项添加文本 removeTabBarBadge移除
    * wx.setNavigationBarTitle 动态修改标题  
    * wx.showTabBarRedDot   hideTabBarRedDot（展示隐藏红点）


## 刷新
  * wx.startpulltorefresh 开始刷新
    * wx.stoppulltorefresh 停止刷新

    



  