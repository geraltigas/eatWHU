// pages/myself/draft/draft.js
var storeDraft = require('../../../utils/function.js').storeDraft;
var arrayGenerator = function (number){
  var i = [];
  for(var a = 1; a <= number;++a){
    i[a-1]=false;
  }
  return i;
}
var darftget = (that) =>{

    wx.getStorage({
      key: 'draft',
      success: function (res) {
        if(that.data.draft){
          that.setData({
            draft: res.data,
            selected: arrayGenerator(Object.keys(res.data).length)
          })
        }else{
        that.setData({
          draft: {}
        })
      }
      },
      fail:function (){
        
        console.log("fail")
      }
    })
}
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
    showDraft: 1,
    selected:[],
    trush:"../../../source/trushcan.png",
    selectedtrush:"../../../source/trushcan_after.png",
  },
  taptrush:function(event){
    var that = this
    console.log(event)
    var key = event.currentTarget.dataset.key
    console.log(key)
    that.setData({
      selected: ((key)=>{
        that.data.selected[key-1] = !that.data.selected[key-1];
        return that.data.selected
      })(key)
    })
    console.log(that.data.selected)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      darftget(this)
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