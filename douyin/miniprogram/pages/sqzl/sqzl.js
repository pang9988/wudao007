// pages/sqzl/sqzl.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 上传图片
    files: [
      // {url: '',}, {loading: true}, {error: true}
      ],
     // 目前居住城市假数据,
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',
    multiIndex: [0, 0, 0],
    // 评级假数据,
    array: ['AAA', 'BBB', 'CCC', 'DDD'],
    objectArray: [
      {id: 0,name: 'AAA'},
      {id: 1,name: 'BBB'},
      {id: 2,name: 'CCC'},
      {id: 3,name: 'DDD'}
    ],
    // 身高
    // 身高假数据,
    array1: ['155~165', '165~175', '175~180', '180以上'],
    objectArray: [
      {id: 0, name: '155~165'},
      {id: 1,name: '165~175'},
      {id: 2,name: '175~180'},
      {id: 3,name: '180以上'}
    ],
    // 性别假数据,
    array2: ['男', '女', '富婆', '富公'],
    objectArray: [
      {id: 0,name: '男'},
      {id: 1,name: '女'},
      {id: 2,name: '富婆'},
      {id: 3,name: '富公'}
    ],
    // 属相假数据,
    array3: ['蛇', '龙', '虎', '鼠'],
    objectArray: [
      { id: 0, name: '蛇'},
      { id: 1, name: '龙'},
      { id: 2, name: '虎'},
      { id: 3, name: '鼠'}
    ],
    // 星座假数据,
    array4: ['獅子座', '射手座', '水瓶座', '天秤座'],
    objectArray: [
      { id: 0, name: '獅子座'},
      { id: 1, name: '射手座'},
      { id: 2, name: '水瓶座'},
      { id: 3, name: '天秤座'}
    ],
    // 年龄范围假数据,
    array5: ['18~22', '22~28', '28~35', '35~45'],
    objectArray: [
      { id: 0, name: '18~22'},
      { id: 1, name: '22~28'},
      { id: 2, name: '28~35'},
      { id: 3, name: '35~45'}
    ],
    // 血型假数据,
    array6: ['A', 'B', 'AB', 'O'],
    objectArray: [
      { id: 0, name: 'A'},
      { id: 1, name: 'B'},
      { id: 2, name: 'AB'},
      { id: 3, name: 'O'}
    ],
  },
// 评级:
  bindPickerChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
// 等级:
  bindPickerChange0: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detai0.value
    })
  },
// 身高:
  bindPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },
// 性别:
  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },
// 属相:
  bindPickerChange3: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index3: e.detail.value
    })
  },
// 星座:
  bindPickerChange4: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index4: e.detail.value
    })
  },
  // 年龄范围
  bindPickerChange5: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index5: e.detail.value
    })
  },
  // 血型
  bindPickerChange6: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index6: e.detail.value
    })
  },
  // 目前居住城市
  bindRegionChange7: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  // 舞种
  bindRegionChange8: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  // 学历
  bindRegionChange9: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 上传图片
    this.shangquang()
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
  // 返回上一层
  myfs(){
    wx.navigateBack({
      
    })
  },
  // 自定义封装函数
  shangquang(){
    this.setData({
      selectFile: this.selectFile.bind(this),
      uplaodFile: this.uplaodFile.bind(this)
    })
  
  },
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },
  selectFile(files) {
    console.log('files', files)
    // 返回false可以阻止某次文件上传
  },
  uplaodFile(files) {
    console.log('upload files', files)
    // 文件上传的函数，返回一个promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('some error')
      }, 1000)
    })
  },
  uploadError(e) {
    console.log('upload error', e.detail)
  },
  uploadSuccess(e) {
    console.log('upload success', e.detail)
  },
  // 教练须知跳转
  jjxx() {
    wx.navigateTo({
      url: '/pages/jxaq/jxaq',
    })
  },
  
})