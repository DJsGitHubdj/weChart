// pages/scheule/scheule.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hall: '',
    seat: [],
    selected: {
      "0": "../img/choose_01.png",
      "1": "../img/choose_02.png",
      "2": "../img/choose_03.png"
    },
    array: []
  },
  change(e) {
    // var that=this;
    let name = e.currentTarget.dataset.name;
    let x = e.currentTarget.dataset.x;
    let y = e.currentTarget.dataset.y;
    if (name == 0) {

      if (this.data.array.length < 4) {
        this.data.seat[x][y] = 2
        this.data.array.push(e.currentTarget.dataset);
        this.setData({
          seat: this.data.seat,
          array: this.data.array
        })
      }



    }
    if (name == 2) {
      this.data.seat[x][y] = 0;
      for (let i = 0; i < this.data.array.length; i++) {
        if (this.data.array[i].x == x && this.data.array[i].y == y) {
          this.data.array.splice(i, 1)
          this.setData({
            seat: this.data.seat,
            array: this.data.array

          })
        }
      }

    }
    console.log(e);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    // console.log(options.movieName)//拿到从上一个页面传递来的本页面所需数据
    // console.log(options.cimemaName)
    // console.log(options.scheuleTime)
    // 设置顶部标题
    
    wx.setNavigationBarTitle({
      title: options.movieName
    })
    that.setData({
      cimemaName:options.cimemaName,
      scheuleTime: options.scheuleTime,
      hall: options.hall,
      seat: JSON.parse(options.seat)
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