
// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     text:"热门搜索",
     movieName:"",
     vvv:"",
     flag:true
  },
  KeyInput(e){
    // console.log(e.detail.value)
    var that=this;
    let movieName=[];
     this.setData({
       vvv: e.detail.value
     })
     console.log(this.data.vvv)
     if (this.data.vvv)//if可以省略{},默认作用域为下一个else if条件出现之前
     wx.request({
       url: 'http://127.0.0.1:3000/upcoming/find',
       data: {
         CName: this.data.vvv,
       },
       success(res) {
         console.log(res.data)
         for (let i = 0; i < res.data.length; i++) {
           res.data[i].bigImg = JSON.parse(res.data[i].bigImg)
           res.data[i].bigImg[0] = res.data[i].bigImg[0].replace(/\\/, "/")
         }
         that.setData({
           searchMoviesList: res.data
         })
       }
     }) 
     if(this.data.vvv){
       this.data.flag=true
     }else{
       this.data.flag=false
     }
     this.setData({
       flag:this.data.flag
     })
  },
  
  gotoDetails: function (e) {
    //   参数里面传入e就是监听event事件，可以传入后打印e,获得可选取数据列表
    //  console.log(e.currentTarget.dataset)
    let movieId = e.currentTarget.dataset.movieid;
    console.log(movieId)
    wx.navigateTo({
      url: `../details/details?movieId=${movieId}`
    })
  },
  goback(){
    wx.navigateBack({
      delta: 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 推荐数据拉取
    wx.request({
      url: 'http://127.0.0.1:3000/upcoming/find',
      method: 'GET',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        // console.log(res.data);//推荐电影数据
        that.setData({
          moviesList: res.data
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