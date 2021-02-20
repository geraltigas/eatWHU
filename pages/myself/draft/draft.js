// pages/myself/draft/draft.js
var storeDraft = require('../../../utils/function.js').storeDraft;
var deleteJSON = require('../../../utils/function.js').deleteJSON;
var timeToTime = require('../../../utils/function.js').timeToTime;
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
            draft: (()=>{
              console.log(res.data)
              for(var i=1;i <= Object.keys(res.data).length;i++){
                res.data[i].timestamp = "保存于"+timeToTime(res.data[i].timestamp);
              }
              return res.data
            })(),
            isDraft:false
          })
        }else{
        that.setData({
          draft: {},
          isDraft:true
        })
      }
      },
      fail:function (){
        
        console.log("fail")
      }
    })
}
var cleanDraft = function (key,that){
  console.log(that.data.draft)
  var draft = deleteJSON(that.data.draft,key)
  console.log(draft)
  wx.setStorage({
    data: draft,
    key: 'draft',
    success: function (res) {
      that.setData({
        draft:draft
      })
    },
    fail:function (){
      wx.showToast({
        title: '删除失败',
        icon:"none",
        duration: 1000
      })
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
    isDraft: true,
  },
  taptrush:function(event){
    var that = this
    var key = event.currentTarget.dataset.key
    cleanDraft(key,that);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    storeDraft("hhhh","okkkkkkk")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    darftget(this);
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