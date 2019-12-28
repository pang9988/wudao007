// pages/home1/home1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    newDataArr: [],
    filterObj: '',
    cao: [{
      img: "./../../images/hometu/7.jpg",
      site: "廉江",
      imgtx: "./../../images/hometu/44.png",
      textwz: "深圳,香港",
      textwz1: "金牌",
      textz2: "89"
    },
    {
      img: "./../../images/hometu/3.jpg",
      site: "廉江1",
      imgtx: "./../../images/hometu/44.png",
      textwz: "广西,那良",
      textwz1: "银牌",
      textz2: "99"
    },
    {
      img: "./../../images/hometu/11.jpg",
      site: "廉江2",
      imgtx: "./../../images/hometu/44.png",
      textwz: "深圳,香港",
      textwz1: "铜牌",
      textz2: "89"
    },
    {
      img: "./../../images/hometu/13.jpg",
      site: "廉江3",
      imgtx: "./../../images/hometu/44.png",
      textwz: "深圳,香港",
      textwz1: "银牌",
      textz2: "89"
    },
    {
      img: "./../../images/hometu/4.jpg",
      site: "廉江4",
      imgtx: "./../../images/hometu/44.png",
      textwz: "深圳,香港",
      textwz1: "金牌",
      textz2: "89"
    },
    {
      img: "./../../images/hometu/1.jpg",
      site: "廉江11",
      imgtx: "./../../images/hometu/44.png",
      textwz: "深圳,香港",
      textwz1: "银牌",
      textz2: "99"
    },
    {
      img: "./../../images/hometu/2.jpg",
      site: "廉江12",
      imgtx: "./../../images/hometu/44.png",
      textwz: "深圳,香港",
      textwz1: "铜牌",
      textz2: "89"
    },
    {
      img: "./../../images/hometu/3.jpg",
      site: "廉江3",
      imgtx: "./../../images/hometu/44.png",
      textwz: "深圳,香港",
      textwz1: "金牌",
      textz2: "69"
    },
    {
      img: "./../../images/hometu/2.jpg",
      site: "廉江4",
      imgtx: "./../../images/hometu/44.png",
      textwz: "那良,香港",
      textwz1: "铜牌",
      textz2: "89"
    },
    {
      img: "./../../images/hometu/1.jpg",
      site: "廉江11",
      imgtx: "./../../images/hometu/44.png",
      textwz: "深圳,香港",
      textwz1: "金牌",
      textz2: "69"
    },
    {
      img: "./../../images/hometu/13.jpg",
      site: "廉江12",
      imgtx: "./../../images/hometu/44.png",
      textwz: "深圳,香港",
      textwz1: "铜牌",
      textz2: "89"
    }

    ],
    mmp: [{
      img: "./../../images/hometu/13.jpg",
      site: "廉江5",
      imgtx: "./../../images/hometu/44.png",
      textwz: "深圳,香港",
      textwz1: "金牌",
      textz2: "89"
    },
    {
      img: "./../../images/hometu/1.jpg",
      site: "廉江6",
      imgtx: "./../../images/hometu/44.png",
      textwz: "那良,香港",
      textwz1: "金牌",
      textz2: "89"
    },
    {
      img: "./../../images/hometu/2.jpg",
      site: "廉江7",
      imgtx: "./../../images/hometu/44.png",
      textwz: "深圳,香港",
      textwz1: "金牌",
      textz2: "89"
    },
    {
      img: "./../../images/hometu/11.jpg",
      site: "廉江8",
      imgtx: "./../../images/hometu/44.png",
      textwz: "深圳,那良",
      textwz1: "金牌",
      textz2: "89"
    },
    {
      img: "./../../images/hometu/13.jpg",
      site: "廉江9",
      imgtx: "./../../images/hometu/44.png",
      textwz: "深圳,香港",
      textwz1: "金牌",
      textz2: "89"
    },
    {
      img: "./../../images/hometu/6.jpg",
      site: "廉江10",
      imgtx: "./../../images/hometu/44.png",
      textwz: "那良,香港",
      textwz1: "金牌",
      textz2: "89"
    },

    {
      img: "./../../images/hometu/6.jpg",
      site: "廉江6",
      imgtx: "./../../images/hometu/44.png",
      textwz: "湛江,那良",
      textwz1: "金牌",
      textz2: "89"
    },
    {
      img: "./../../images/hometu/1.jpg",
      site: "廉江7",
      imgtx: "./../../images/hometu/44.png",
      textwz: "深圳,香港",
      textwz1: "金牌",
      textz2: "89"
    },
    {
      img: "./../../images/hometu/2.jpg",
      site: "廉江8",
      imgtx: "./../../images/hometu/44.png",
      textwz: "深圳,香港",
      textwz1: "金牌",
      textz2: "89"
    },
    {
      img: "./../../images/hometu/9.jpg",
      site: "廉江9",
      imgtx: "./../../images/hometu/44.png",
      textwz: "深圳,香港",
      textwz1: "金牌",
      textz2: "89"
    },
    {
      img: "./../../images/hometu/10.jpg",
      site: "廉江10",
      imgtx: "./../../images/hometu/44.png",
      textwz: "深圳,香港",
      textwz1: "金牌",
      textz2: "89"
    },

    ]
  },
  // 筛选 
  jinpa() {
    console.log(1222345)
  },
  /**
   * 生命周期函数--监听页面加载**/
  onLoad: function (options) {
    this.jinpa();


    // console.log(list);
    // var list = []
    // var that = this;
    // that.data.cao.forEach(function(item) {
    //   if (item.textwz1 == "金牌") {
    //     list.push(item.textwz1)
    //   }
    //   cosnole.log(list)
    // })






    // var that=this;
    //   this.data.cao = [{
    //       img: "./../../images/hometu/11.jpg",
    //       site: "廉江",
    //       imgtx: "./../../images/hometu/13.jpg",
    //       textwz: "你不离我不弃"
    //     },
    //     {
    //       img: "./../../images/hometu/1.jpg",
    //       site: "廉江1",
    //       imgtx: "./../../images/hometu/2.jpg",
    //       textwz: "界面信息元素没有做到对"
    //     },
    //     {
    //       img: "./../../images/hometu/11.jpg",
    //       site: "廉江2",
    //       imgtx: "./../../images/hometu/7.jpg",
    //       textwz: "界面信息元素没有做到对齐，365元作为重要信息没有很好突出。背面的说明文字缺乏层次感。图三的整体层次感没有很好的凸现出来"
    //     },
    //     {
    //       img: "./../../images/hometu/3.jpg",
    //       site: "廉江3",
    //       imgtx: "./../../images/hometu/4.jpg",
    //       textwz: "界面信息元素没有做到对齐，365元作为重要信息没有很好突出"
    //     },
    //     {
    //       img: "./../../images/hometu/4.jpg",
    //       site: "廉江4",
    //       imgtx: "./../../images/hometu/1.jpg",
    //       textwz: "界面信息元素没有做到对齐，365元作为重要信息没有很好突出"
    //     },
    //     {
    //       img: "./../../images/hometu/1.jpg",
    //       site: "廉江11",
    //       imgtx: "./../../images/hometu/3.jpg",
    //       textwz: "界面信息元素没有做到对齐，365元作为重要信息没有很好突出"
    //     },
    //     {
    //       img: "./../../images/hometu/2.jpg",
    //       site: "廉江12",
    //       imgtx: "./../../images/hometu/4.jpg",
    //       textwz: "界面信息元素没有做到对齐，365元作为重要信息没有很好突出。背面的说明文字缺乏层次感。图三的整体层次感没有很好的凸现出来"
    //     },
    //     {
    //       img: "./../../images/hometu/3.jpg",
    //       site: "廉江3",
    //       imgtx: "./../../images/hometu/4.jpg",
    //       textwz: "界面信息元素没有做到对齐，365元作为重要信息没有很好突出"
    //     },
    //     {
    //       img: "./../../images/hometu/4.jpg",
    //       site: "廉江4",
    //       imgtx: "./../../images/hometu/1.jpg",
    //       textwz: "界面信息元素没有做到对齐，365元作为重要信息没有很好突出"
    //     },
    //     {
    //       img: "./../../images/hometu/1.jpg",
    //       site: "廉江11",
    //       imgtx: "./../../images/hometu/3.jpg",
    //       textwz: "界面信息元素没有做到对齐，365元作为重要信息没有很好突出"
    //     },
    //     {
    //       img: "./../../images/hometu/2.jpg",
    //       site: "廉江12",
    //       imgtx: "./../../images/hometu/4.jpg",
    //       textwz: "界面信息元素没有做到对齐，365元作为重要信息没有很好突出。背面的说明文字缺乏层次感。图三的整体层次感没有很好的凸现出来"
    //     }
    //   ];
    //   var arrLen = 3; //这里一行数组最多3个
    //   var newDataArr = [];
    //   for (var i = 0; i < this.data.cao.length; i += arrLen) {
    //     newDataArr.push(this.data.cao.slice(i, i + arrLen));
    //   }
    //   // console.log(newDataArr);

  },

  // 点击图片进入详情 
  leftdetails() {
    wx.navigateTo({
      url: '/pages/homezl/homezl'
    })
  },
  rightdetails() {
    wx.navigateTo({
      url: '/pages/homezl/homezl'
    })
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
    // wx.showLoading({
    //   title: '加载中',
    // });
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
    this.wocao()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  wocao() {
    var that = this;

  }
})