// pages/upCinema/upCinema.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataBar:['今天11月','明天11月','后天','周x'],
    currentTab: 0
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

  // formatTime(date){
  //   let month=date.getMonth()+1;
  //   let day=date.getDate();
  //   console.log(month+day)
  // },
  goInnerCimema(e){
    let movieId = e.currentTarget.dataset.movieid;
    let movieType = e.currentTarget.dataset.type;
    let cinemaId = e.currentTarget.dataset.cinemaid;
    let movieName = e.currentTarget.dataset.moviename;
    // console.log(e.currentTarget.dataset)
    // console.log(cinemaId)//保存电影院Id，以便下个网页使用
    // console.log(movieId)//保存电影Id，以便下个网页使用
    // console.log(movieType)保存电影类型，以便下个网页使用
    // console.log(movieName)//保存电影名字，以便下个网页使用
    wx.navigateTo({
      url: `../InnerCimema/InnerCimema?movieId=${movieId}&movieType=${movieType}&cinemaId=${cinemaId}&movieName=${movieName}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;
    //这里通过navigatorc传过来了两个参数，将用于数据传递（给下一个页面渲染用）和其他函数使用
    // console.log(options.movieId)
    // console.log(options.movieType)
    that.setData({
      movieId: options.movieId,
      movieType: options.movieType,
      movieName: options.movieName
    })
    // 设置顶部标题
    wx.setNavigationBarTitle({
      title: options.movieName
    })
    //先拉取渲染影院列表
    wx.request({
      url: 'http://127.0.0.1:3000/cinemas/find',
      method: 'GET',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        // console.log(res.data);//影院数据
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