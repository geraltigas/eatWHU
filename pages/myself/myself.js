var selfInfo = function(that){
  var Info = wx.getStorageSync('selfInfo')
  if (Info){
    console.log(Info)
    that.setData({
      name:Info.name,
      studentID:Info.studentID,
      headImage:Info.headImage,
      isServer:Info.isServer
    });
  }else{
    wx.showToast({
      title: "未登录",
      icon:"none",
      duration: 1000
    })
  }
}
// pages/myself/myself.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    studentId:null,
    headImage:null,
    isServer:false
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
    selfInfo(this);
    var isServer = wx.getStorageSync('selfInfo').isServer;
    console.log(isServer)
    if(isServer){
      wx.setTabBarItem({
        index: 1,
        text: "消息",
        iconPath:"source/message_after.png",
        selectedIconPath:"source/message.png",
        fail:function(){
         console.log("fail")
        }
      })
    }else{
      console.log("fuck")
    }
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