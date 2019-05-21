// pages/InnerCimema/InnerCimema.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  gotoChoose(e){
    console.log(e.currentTarget.dataset)
    // console.log(e.currentTarget.dataset.scheuleid)//拿到影厅Id
    // console.log(e.currentTarget.dataset.name)//传递过来了电影名字
    // console.log(e.currentTarget.dataset.cimemaname)//传递过来了电影院名字
    // console.log(e.currentTarget.dataset.time)//传递过来了电影厅拍片时间
    let scheuleId = e.currentTarget.dataset.scheuleid;
    let movieName = e.currentTarget.dataset.name;
    let cimemaName = e.currentTarget.dataset.cimemaname;
    let scheuleTime = e.currentTarget.dataset.time;
    wx.navigateTo({
      url: `../scheule/scheule?scheuleId=${scheuleId}&movieName=${movieName}&cimemaName=${cimemaName}&scheuleTime=${scheuleTime}`,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    //终于将前面所点击电影的id和type传到了这里
    // console.log(options)
    // console.log(options.movieId);
    // console.log(options.movieType);
    // 同时传递过来上一个页面所点击的电影院ID
    // console.log(options.cinemaId)
    // console.log(options.movieName)
    that.setData({
      movieName: options.movieName
    })
    var that=this;
    //顶部影院数据部分
    wx.request({
      url:'http://127.0.0.1:3000/cinemas/find',
      data:{
        _id: options.cinemaId
      },
      success(res){
        // console.log(res.data);
        that.setData({
          cimemaMsg:res.data
        })
      }
    })
    // 电影数据部分
    // 根据传过来的type拉取不同类型电影数据
    if (options.movieType=='mov'){
      wx.request({
        url: 'http://127.0.0.1:3000/movies/find',
        data: {
          _id: options.movieId
        },
        success: function (res) {
          // console.log(res.data)
          res.data.bigImg = JSON.parse(res.data.bigImg)
          res.data.bigImg[0] = res.data.bigImg[0].replace(/\\/, "/")
            // console.log(res.data[i]);  
          that.setData({
            movieMsg: res.data
          })
        }
      })
    }else{
      wx.request({
        url: 'http://127.0.0.1:3000/upcoming/find',
        data: {
          _id: options.movieId
        },
        success: function (res) {
          // console.log(res.data)
          res.data.bigImg = JSON.parse(res.data.bigImg)
          res.data.bigImg[0] = res.data.bigImg[0].replace(/\\/, "/")
          // console.log(res.data[i]);  
          that.setData({
            movieMsg: res.data
          })
        }
      })
    }
    // 影厅部分数据  
    wx.request({
      url: 'http://127.0.0.1:3000/scheule/find',
      data: {},
      success(res) {
        // console.log(res.data);
        that.setData({
          scheuleList: res.data
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