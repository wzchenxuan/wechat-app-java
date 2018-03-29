//about.js

Page({
  data: {
    image:"../../images/1.jpg",
    title: "师大社区",
    intro:"浙江师范大学（Zhejiang Normal University）是一所以教师教育为主的多科性省属重点大学，是浙江省重点建设高校,前身为杭州师范专科学校，创建于1956年。1958年升格为杭州师范学院。1962年，杭州师范学院与浙江教育学院、浙江体育学院合并，更名为浙江师范学院。1965年，浙江师范学院从杭州搬迁至金华。1980年被列为省属重点高校。1985年更名为浙江师范大学。2000年、2001年、2004年浙江财政学校、浙江幼儿师范学校和金华铁路司机学校相继并入。2014年入选“卓越教师培养计划”。",
    contab:"村里还没通电话",
    address:"zjnu",
    
    //轮播图开始
    imgUrls:["../../images/6.jpg",
             "../../images/2.jpg",
             "../../images/3.jpg"
             ],
    autoplay: true,
    interval: 5000,
    duration: 1000,
  },
changeIndicatorDots: function(e) {
     this.setData({
       indicatorDots: !this.data.indicatorDots
     })
   },
   changeAutoplay: function(e) {
     this.setData({
       autoplay: !this.data.autoplay
     })
   },
   intervalChange: function(e) {
     this.setData({
       interval: e.detail.value
     })
   },
   durationChange: function(e) {
     this.setData({
       duration: e.detail.value
     })
   },
   //轮播图结束

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})