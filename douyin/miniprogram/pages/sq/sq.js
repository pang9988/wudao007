// pages/sq/sq.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },
  previewImage(e){
    console.log(1);
    var current = e.target.dataset.src;   //这里获取到的是一张本地的图片
    wx.previewImage({
      current: current,//需要预览的图片链接列表
      urls: [current]  //当前显示图片的链接
    })
  },
  // previewImage (e) {
  //   var current = e.target.dataset.src;
  //   wx.previewImage({
  //     current: current,
  //     urls: [current]
  //   })
  // },
// 返回上一层
  myfs() {
    wx.navigateBack({
      url: '/pages/anquan/anquan',
    })
  },
  jjxx(){
    wx.navigateTo({
      url: '/pages/jxaq/jxaq',
    })
  },
  // 教练注册跳转
  jiaoliazc() {
    wx.navigateTo({
      url: '/pages/sqzl/sqzl'
    })
  }
})