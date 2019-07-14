var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
var qqmapsdk;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    qqmapsdk = new QQMapWX({
      key: '6S7BZ-BNIWF-HGFJL-JSLO3-YP5ZO-UYB7Y'
    });
    const posts = [
      {
        id: 1,
        photo: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg',
        name: 'name',
        description: 'descriptiondescriptiondescriptiondescriptiondescription',
        location: 'location1',
        distance: '200m'
      },
      {
        id: 2,//数字，加exact match 索引，自动增长
        title: '字符串，加模糊索引,',
        description: '字符串，加模糊索引',
        date_str: '字符串，未解析的原字符串，加模糊索引',
        date: '日期类型，解析字符串结果，加exact match 索引',
        time_str: '字符串，未解析的原字符串，加模糊索引',
        time: '时间类型，解析字符串结果，加exact match 索引',
        breed: '宠物品种',//字符串,加模糊索引',
        color: ['red', 'green'],//'宠物颜色，字符串，加exact match 索引',
        pet_name: '宠物名字，字符串',//加exact match 索引',
        photo: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg',
        //'宠物照片路径，字符串，不加索引',
        location: '地址',//string
        city: '城市，字符串，加exact match 索引',
        // lon:1,
        // lat:2,
        contact_phone: ['123', '456'],//'寻狗联系电话，加exact match 索引',
        contact_name: '寻狗联系人姓名，加exact match 索引',
        remark: ['备注，其它相关信息，不加索引', 'test test test test'],
        source_type: 3,//int, enumarate of 1-5
        source_url: '',
      }
    ];
    for (const post of posts) {
      post.distance = `${200}m`;
      console.log(JSON.stringify(post));
      post.stringifiedVal = JSON.stringify(post);
      console.log(post);
      console.log(post.stringifiedVal);
    }
    this.setData({ list: posts });
    // var that = this;
    // const baseUrl = 'http://ec2-3-1-221-157.ap-southeast-1.compute.amazonaws.com:8888';
    // wx.request({
    //   url: baseUrl + '/find_lost',
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded'
    //   },
    //   method: 'POST',
    //   data: {
    //     "address": '西溪',
    //   },
    //   success: function (res) {
    //     for (const post of res.data.posts) {
    //       post.distance = `${200}m`;
    //     }
    //     that.setData({
    //       list: res.data.posts,
    //     });
    //   },
    //   fail: function (res) {
    //     console.log('submit fail');
    //   },
    // });
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

  selectCity: function () {
    wx.navigateTo({
      url: '/libs/citySelector/switchcity/switchcity',
    })
  }
})