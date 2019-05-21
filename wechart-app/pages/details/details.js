// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topImg:['../img/icon_03.png', '../img/icon_05.png'],
    details:["想看","评分"]
  },
  gotoPlay(){
    
  },
  wantSee() {
    wx.showToast({
      title:"已标记为已想看",
      icon:"success",
      duration:1000,
    })
    this.setData({
      topImg: ['../img/red.png', '../img/icon_05.png'],
      details:["已想看","评分"]
    })
   },
  markScore(e){
    let movieName = e.currentTarget.dataset.name;
    wx.navigateTo({
      url: `../markScore/markScore?movieName=${movieName}`
    })
  },
  //点击优惠购票的跳转函数
  gotoCinema(e) {
    // console.log(e.currentTarget.dataset)//打印event点击事件
    let movieId = e.currentTarget.dataset.movieid;
    let movieType = e.currentTarget.dataset.type;
    let movieName = e.currentTarget.dataset.name;
    // console.log(e.currentTarget.dataset)
    wx.navigateTo({
      url: `../upCinema/upCinema?movieId=${movieId}&movieType=${movieType}&movieName=${movieName}`,
    })
  },  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    
    // 这边通过navigator的url传的evnt参数，将所点击电影的id和自定义的type发送过来了，
    // 这将作为参数通过ajax传到数据库里面进行筛选
    // console.log(options.movieId)
    // console.log(options.movieType)
    that.setData({
       movieId:options.movieId,
       movieType:options.movieType
    })
    if(options.movieType=='mov'){
      wx.request({
        url: 'http://127.0.0.1:3000/movies/find',
        data: {
          _id: options.movieId
        },
        success: function (res) {
          // console.log(res.data)
          //转换图片格式和转/符号
            res.data.bigImg = JSON.parse(res.data.bigImg)
            res.data.bigImg[0] = res.data.bigImg[0].replace(/\\/, "/")
            res.data.actorImg = JSON.parse(res.data.actorImg)
            res.data.pictures = JSON.parse(res.data.pictures)
            for (let i=0;i<res.data.actorImg.length;i++){
              res.data.actorImg[i] = res.data.actorImg[i].replace(/\\/, "/"); 
            }
            let actorList = res.data.actors.split("，")
            // console.log(actorList);//已经用split把字符串转化成了数组
            // console.log(res.data.actorImg)//本身就是数组
            // let actorsMsg = actorList.concat(res.data.actorImg);
            // console.log(actorsMsg)//合并为一个数组
            for (let i = 0; i < res.data.pictures.length; i++) {
              res.data.pictures[i] = res.data.pictures[i].replace(/\\/, "/")
            }
            //res.data.actors在这里是一个字符串，需要用split来进行分割，再let一个空数组把它们用push装起来
            
          that.setData({
            detailsMsg: res.data,
            actorImgList: res.data.actorImg,
            actorList: actorList
          })
        }
      })
    }else
    {
      wx.request({
        url: 'http://127.0.0.1:3000/upcoming/find',
        data: {
          _id: options.movieId
        },
        success: function (res) {
          console.log(res.data)
          // console.log(res.data)
          //转换图片格式和转/符号
          res.data.bigImg = JSON.parse(res.data.bigImg)
          res.data.bigImg[0] = res.data.bigImg[0].replace(/\\/, "/")
          res.data.actorImg = JSON.parse(res.data.actorImg)
          res.data.pictures = JSON.parse(res.data.pictures)
          for (let i = 0; i < res.data.actorImg.length; i++) {
            res.data.actorImg[i] = res.data.actorImg[i].replace(/\\/, "/");
          }
          let actorList = res.data.actors.split("，")
          // console.log(actorList);//已经用split把字符串转化成了数组
          // console.log(res.data.actorImg)//本身就是数组
          // let actorsMsg = actorList.concat(res.data.actorImg);
          // console.log(actorsMsg)//合并为一个数组
          for (let i = 0; i < res.data.pictures.length; i++) {
            res.data.pictures[i] = res.data.pictures[i].replace(/\\/, "/")
          }
          //res.data.actors在这里是一个字符串，需要用split来进行分割，再let一个空数组把它们用push装起来

          that.setData({
            detailsMsg: res.data,
            actorImgList: res.data.actorImg,
            actorList: actorList
          })
        }
      })
    }
      
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