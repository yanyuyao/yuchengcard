// pages/phonelist/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    tapval:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title:options.title
    })
    wx.setNavigationBarTitle({
      title: "同城电话簿-"+this.data.title,
    })
  },

  //跳转链接
  linkbindtap: function (e) {
    var tapval = e.currentTarget.dataset.val;
    wx.navigateTo({
      url: "../phoneinfo/info?title=" + tapval
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