// app.js
// 检测缓存来确定是否登录以及登陆者的身份
var loginDetect = function (){
  if(wx.getStorageSync('isLogin')){
    if(wx.getStorageSync('isStudent')){
      wx.setTabBarItem({
        index: 1,
        text:"餐厅",
        iconPath: "source/canteen_selected.png",
        selectedIconPath:"source/canteen.png"
      })
    }else{
      wx.setTabBarItem({
        index: 1,
        text:"消息",
        iconPath: "source/message_after.png",
        selectedIconPath:"source/message.png"
      })
    }
  }else{
    wx.showToast({
      title: '未登录',
      duration:1000,
      icon:"none"
    })
  }
}

App({
  onLaunch() {
    loginDetect();
    console.log(wx.getStorageSync('isLogin'))
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', )

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onload:function(){
    
  },
  globalData: {
    userInfo: null,

  }
})
