// pages/weChart/wechart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar:["热映","待映"],
    currentTab:0
  },
  // 事件处理函数
   navbarTap:function(e){
     this.setData({
       currentTab : e.currentTarget.dataset.idx
     })
   },
   gotoSearch(){
     wx.navigateTo({
       url:"../search/search"
     })
   },
   gotoDetails:function(e){
     //   参数里面传入e就是监听event事件，可以传入后打印e,获得可选取数据列表
    //  console.log(e.currentTarget.dataset)
     let movieId = e.currentTarget.dataset.movieid;
     let movieType = e.currentTarget.dataset.type;  
       wx.navigateTo({
         url: `../details/details?movieId=${movieId}&movieType=${movieType}`,
       })
   },
  //  监听页面加载
   onLoad: function () {
    
    var that=this;
    wx.request({
      url: 'http://127.0.0.1:3000/movies/find', 
      method:'GET',
      data: { },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        //  console.log(res.data);
        for(let i=0;i<res.data.length;i++){
          // console.log(res.data[i].bigImg)
          res.data[i].bigImg=JSON.parse(res.data[i].bigImg)
          // console.log(res.data[i].bigImg)
          res.data[i].bigImg[0]=res.data[i].bigImg[0].replace(/\\/,"/")
          // console.log(res.data[i]);  
        }
        that.setData({
          moviesList: res.data
        })
      }
    })
    //影院数据渲染
    wx.request({
      url: 'http://127.0.0.1:3000/cinemas/find',
      method: 'GET',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
          // console.log(res.data.length);

      }
    })
    //待映页面数据渲染
    wx.request({
      url: 'http://127.0.0.1:3000/upcoming/find',
      method: 'GET',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        // console.log(res.data);
        for (let i = 0; i < res.data.length; i++) {
          res.data[i].bigImg = JSON.parse(res.data[i].bigImg)
          res.data[i].bigImg[0] = res.data[i].bigImg[0].replace(/\\/, "/")
          // console.log(res.data[i]);  
        }
        that.setData({
          comingList: res.data
        })
  
      }
    })
  //  加载函数结束 
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