// pages/details/details.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		// 视频详情
		videoInfo:[],
		// 其他一些视频地址：
		// http://uksir.gitee.io/bilibili/medias/2018120195458.mp4
		// http://uksir.gitee.io/bilibili/medias/20181219211856.mp4
		// http://uksir.gitee.io/bilibili/medias/20181219211920.mp4
		// http://uksir.gitee.io/bilibili/medias/20181219211910.mp4
		url:"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
		// 推荐视频信息
		recommend_info:[{
			img_url:"../../Video_img/img1.jpg",
			title:"第一个推荐视频第一个推荐视频第一个推荐视频第一个推荐视频第一个推荐视频",
			play_num:"111",
			comment_num:"222"
		},{
			img_url:"../../Video_img/img2.jpg",
			title:"第二个推荐视频第二个推荐视频第二个推荐视频第二个推荐视频第二个推荐视频",
			play_num:"333",
			comment_num:"444"
		},{
			img_url:"../../Video_img/img3.jpg",
			title:"第三个推荐视频第三个推荐视频第三个推荐视频第三个推荐视频第三个推荐视频",
			play_num:"555",
			comment_num:"666"
		},{
			img_url:"../../Video_img/img4.jpg",
			title:"第四个推荐视频第四个推荐视频第四个推荐视频第四个推荐视频第四个推荐视频",
			play_num:"777",
			comment_num:"888"
		},{
			img_url:"../../Video_img/img5.jpg",
			title:"第五个推荐视频第五个推荐视频第五个推荐视频第五个推荐视频第五个推荐视频",
			play_num:"999",
			comment_num:"101"
		},{
			img_url:"../../Video_img/img6.jpg",
			title:"第六个推荐视频第六个推荐视频第六个推荐视频第六个推荐视频第六个推荐视频",
			play_num:"112",
			comment_num:"456"
		},{
			img_url:"../../Video_img/img7.jpg",
			title:"第七个推荐视频第七个推荐视频第七个推荐视频第七个推荐视频第七个推荐视频",
			play_num:"456",
			comment_num:"564"
		},{
			img_url:"../../Video_img/img8.jpg",
			title:"第八个推荐视频第八个推荐视频第八个推荐视频第八个推荐视频第八个推荐视频",
			play_num:"789",
			comment_num:"254"
		},{
			img_url:"../../Video_img/img9.jpg",
			title:"第九个推荐视频第九个推荐视频第九个推荐视频第九个推荐视频第九个推荐视频",
			play_num:"555",
			comment_num:"666"
		},{
			img_url:"../../Video_img/img10.jpg",
			title:"第十个推荐视频第十个推荐视频第十个推荐视频第十个推荐视频第十个推荐视频",
			play_num:"777",
			comment_num:"333"
		}],
		// 评论数据
		commentData:null
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		// 从主页传递过来的视频id参数
		// console.log(options);
		let videoId=options.id;
		this.getvideoInfo(videoId);
		this.getCommentList(videoId);
	},
	getvideoInfo(videoId){
		let that=this;
		var videoId = parseInt(videoId);
		videoId=videoId+1;
		that.setData({
			videoInfo:{videotitle:"第"+videoId+"个视频，第"+videoId+"个视频，第"+videoId+"个视频，第"+videoId+"个视频，第"+videoId+"个视频，第"+videoId+"个视频",
						author:"第"+videoId+"个",
						play_count:videoId+250,
						comment_count:videoId+500,
						time:"12-"+videoId}
		})
	},
	// 获取评论数据
	getCommentList(videoId){
		let that=this;
		wx.request({
			url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id="+videoId,
			success(res){
				//console.log(res);
				if(res.data.code===0){
					that.setData({
						commentData:res.data.data.commentData
					})
				}
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