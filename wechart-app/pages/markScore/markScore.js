// pages/markScore/markScore.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieName:"xx",
    text:"请滑动星星评分",
    start:"../img/newstart.png",
    fullstart:"../img/fullstart.png",
    textAreaContent:""
  },
  //输入框失去焦点时触发，detail.value是输入的值
  bindTextAreaBlur: function (e) {
    console.log(e.detail.value)
    this.setData({
      textAreaContent: e.detail.value
  })
  },
  upLoad(){
    wx.showToast({
      title:"提交评论成功",
      icon:"success",
      duration: 1000,
    })
    setTimeout(function(){
      wx.navigateBack()
    }, 2000)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.movieName)
    this.setData({
      movieName: options.movieName
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