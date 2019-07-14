// pages/animalPage/animal.js
Page({

  /**
   * Page initial data
   */
  data: {
    animal: {},
    animalAttrs: [],
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const animal = JSON.parse(options.item);
    
    const animalAttrs = [];
    animalAttrs.push({
      key:'品种',
      value: animal.breed,
    });
    animalAttrs.push({
      key: '颜色',
      value: animal.color,
    });
    animalAttrs.push({
      key: '特征',
      value: animal.remark,
    });
    const contact = animal.contact_name + '' + animal.contact_phone
    animalAttrs.push({
      key: '联系方式',
      value: contact,
    });
    
    // for(const key in animal) {
    //   const attr = {key, value: animal[key]};
    //   animalAttrs.push(attr);
    // }
    this.setData({
      animal,
      animalAttrs,
    });
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})