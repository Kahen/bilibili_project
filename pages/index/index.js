Page({

  /**
   * 页面的初始数据
   */
  data: {

    //被点击的首页导航栏的菜单的索引
    currentIndexNav:0,
    //首页导航数据
    navList: ["首页","动画","番剧","国创","音乐","舞蹈","科技","游戏","娱乐","鬼畜","电影","电视剧","纪录片","影视","时尚","生活","广告","直播","相簿"],
    //轮播图数据
    swiperList: ["../../Pictures/p1.jpg","../../Pictures/p2.jpg","../../Pictures/p3.jpg","../../Pictures/p4.jpg","../../Pictures/p5.jpg"],
    //视频列表数据
    videoList: [
      {num:0,
       video_img:"../../Video_img/img1.jpg",
       comments:"第一个视频第一个视频第一个视频第一个视频第一个视频第一个视频",
       play_num:"123",
       comment_num:"456"
      },
      {num:1,
       video_img:"../../Video_img/img2.jpg",
       comments:"第二个视频第二个视频第二个视频第二个视频第二个视频第二个视频",
       play_num:"789",
       comment_num:"435"
      },
      {num:2,
       video_img:"../../Video_img/img3.jpg",
       comments:"第三个视频第三个视频第三个视频第三个视频第三个视频第三个视频",
       play_num:"456",
       comment_num:"778"
      },
      {num:3,
       video_img:"../../Video_img/img4.jpg",
       comments:"第四个视频第四个视频第四个视频第四个视频第四个视频第四个视频",
       play_num:"556",
       comment_num:"778"
      },
      {num:4,
       video_img:"../../Video_img/img5.jpg",
       comments:"第五个视频第五个视频第五个视频第五个视频第五个视频第五个视频",
       play_num:"776",
       comment_num:"887"
      },
      {num:5,
       video_img:"../../Video_img/img6.jpg",
       comments:"第六个视频第六个视频第六个视频第六个视频第六个视频第六个视频",
       play_num:"886",
       comment_num:"991"
      },
      {num:6,
       video_img:"../../Video_img/img7.jpg",
       comments:"第七个视频第七个视频第七个视频第七个视频第七个视频第七个视频",
       play_num:"123",
       comment_num:"332"
      },
      {num:7,
       video_img:"../../Video_img/img8.jpg",
       comments:"第八个视频第八个视频第八个视频第八个视频第八个视频第八个视频",
       play_num:"335",
       comment_num:"663"
      },
      {num:8,
       video_img:"../../Video_img/img9.jpg",
       comments:"第九个视频第九个视频第九个视频第九个视频第九个视频第九个视频",
       play_num:"748",
       comment_num:"852"
      },
      {num:9,
       video_img:"../../Video_img/img10.jpg",
       comments:"第十个视频第十个视频第十个视频第十个视频第十个视频第十个视频",
       play_num:"789",
       comment_num:"987"
      }
    ]
  },

  //点击首页导航按钮
  activeNav(e){
    // console.log(e)
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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