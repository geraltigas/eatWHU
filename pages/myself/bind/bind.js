// pages/myself/bind/bind.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isBind: true,
    isSame: true,
    password: '',
    passwordConfirm: '',
    xuehao:'',
    passwordText: '自强密码',
  },
//不知道不是从网络上得到是否绑定的信息
  getIsBind: function() {  
    //本地缓存读取
    //......
    //自强服务器读取
    //......
    return false
  },
  check: function() { //检测是否合格然后转跳
    
  },
  password: function(e) {
    var that = this;
    that.setData({
      password: e.detail.value,
    })
    console.log(that.data.password)
  },
  tapDelete: function(e) {
    console.log('jhhhh')
    var that = this
    that.setData({
      passwordConfirm: '',
    })
    console.log('ddasd')
  },
  isSame: function(e) {
    var that = this;
    if(that.data.password == e.detail.value){
      that.setData({
        isSame: true,
        passwordConfirm: e.detail.value,
      })
    }else{
      that.setData({
        isSame: false,
        passwordConfirm: e.detail.value,
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that =this;
    var isBind = that.getIsBind();
    console.log(isBind) //检验是否已绑定
    if(isBind){
      this.setData({
        passwordText:'新密码'
      })
    }else{
      this.setData({
        passwordText: '自强密码'
      })
    }
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