// pages/cinema/cinema.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  gotoCinema(e) {
    //   参数里面传入e就是监听event事件，可以传入后打印e,获得可选取数据列表
    console.log(e.currentTarget.dataset)
    let cinemaId = e.currentTarget.dataset.cinemaid;
    wx.navigateTo({
      url: `../upCinema/upCinema?cinemaId=${cinemaId}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:3000/cinemas/find',
      method: 'GET',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        //  console.log(res.data);//影院数据
        that.setData({
          cinemasList: res.data
        })
      }
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