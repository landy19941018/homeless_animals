// pages/found-upload/found-upload.js
import { $init, $digest } from '../../utils/common.util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    $init(this);
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

  chooseImage(e) {
    wx.chooseImage({
      sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        const images = this.data.images.concat(res.tempFilePaths)
        // 限制最多只能留下4张照片
        this.data.images = images.length <= 4 ? images : images.slice(0, 4);
        $digest(this);
      }
    })
  },

  removeImage(e) {
    const idx = e.target.dataset.idx
    this.data.images.splice(idx, 1)
    $digest(this)
  },

  handleImagePreview(e) {
    const idx = e.target.dataset.idx
    const images = this.data.images
    wx.previewImage({
      current: images[idx],  //当前预览的图片
      urls: images,  //所有要预览的图片
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    const { time, location, breed, sex, age, color, color_2, remark, contact_name, contact_phone, contact_wechat } = e.detail.value;

    var that = this;
    const baseUrl = 'http://ec2-3-1-221-157.ap-southeast-1.compute.amazonaws.com:8888';
    wx.request({
      url: baseUrl + '/upload_owner',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      data: {
        "title": '',
        "description": '',
        "date_str": '',
        "date": '',
        "time_str": '',
        "time": time,
        "breed": breed,
        "color": color,
        "pet_name": '',
        "photo": that.data.images.toString(),
        "location": location,
        "city": '',
        "contact_phone": contact_phone,
        "contact_name": contact_name,
        "remark": remark,
      },
      success: function (res) {
        console.log('submit success');
      },
      fail: function (res) {
        console.log('submit fail');
      },
    });
  },
})