// pages/login.js
const getStorePromise = require('../../utils/function.js').getStorePromise;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    studentID: null,
    password: null,
    isServer: false
  },
  bindinput1: function(event){
    var that=this;
    that.setData({
      studentID:event.detail.value
    });
  },
  bindinput2: function(event){
    var that=this;
    that.setData({
      password:event.detail.value
    });
  },
  bindtap: function(event){
    var that = this;
    
  },
  bindcheck: function(event){
    var that = this;
    that.setData({
      isServer: !that.data.isServer
    })
    wx.setStorageSync('isServer',that.data.isServer)
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