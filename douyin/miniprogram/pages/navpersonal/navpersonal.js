// pages/navpersonal/navpersonal.js
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
  myfs(){
    wx.navigateBack({
      
    })
  },
  // 开始挂牌
  kaishiguanp(){
    console.log("开始挂牌了")
  },
  //教练须知
  jjxx() {
    wx.navigateTo({
      url: '/pages/jxaq/jxaq',
    })
  }, 
  //年费支付
  navnifeizifu(){
    wx.navigateTo({
      url: '/pages/navjiaofu/navjiaofu',
    })
  }
})