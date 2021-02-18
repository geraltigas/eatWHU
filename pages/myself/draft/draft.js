// pages/myself/draft/draft.js
var storeDraft = require('../../../utils/tools/draft_store.js').storeDraft;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    draft:{
      1:{
      address:"信息学部二食堂",
      text:"hahahahaha",
      timestamp: new Date().getTime(),
      }
    },
    showDraft: 1
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    storeDraft("1111","111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",111111111)
    setTimeout(function () {
    console.log("ok")
    console.log(that.data)
    wx.getStorage({
      key: 'draft',
      success: function (res) {
        console.log("1")
        if(that.data.draft){
          that.setData({
            draft: res.data
          })
          console.log(that.data.draft)
          console.log("2")
        }else{
        that.setData({
          draft: {}
        })
        console.log(3)
      }
      },
      fail:function (){
        
        console.log("fail")
      }
    })}
    ,100)
    console.log("okkkk")
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
    console.log(this.data.draft)
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