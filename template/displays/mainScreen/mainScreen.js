define({
	render: function() {
		this.content = this.html;

		var preloader = this.renderPreloader();

		$('#app').html('').append(preloader, this.content);
		this.preloadImage(150);
		this.subscribe();
	},
	subscribe: function() {
		var self = this;
		this.on('Preload:End', self.startVideo);
		var scene = self.content.find('#scene');
		var parallax = new Parallax(scene[0]);
		var videobackground = new $.backgroundVideo($('#video'), {
	      "align": "centerXY",
	      "width": 1920,
	      "height": 1080,
	      "path": "video/",
	      "filename": "startVideo",
	      "types": ["mp4"],
	      "preload": true,
	      "autoplay": false,
	      "loop": false
	    });
	},
	startVideo: function(){
		var self = this;
		var video = this.content.find('#video_background');
		var closeVideo = this.content.find('#closeVideo');
		var scene = this.content.find('#scene');
		$(closeVideo).on('click', function(){
			$(scene).css("display" ,"block");
			video.remove();
			closeVideo.remove();
			self.animate();
			$(closeVideo).off('click');
		});

		$(video)[0].play();
		setTimeout(function(){
			$(scene).css("display" ,"block");
			self.animate();
		},20000);
		setTimeout(function(){
			$(closeVideo).remove();
			$(video)[0].remove();
			self.off('Preload:End', self.startVideo);
		},24000);
	},
	animate: function(){
		var self = this;
		self.timer('li:nth-of-type(8) img',0);
		self.timer('li:nth-of-type(9) img',1000);
		self.timer('li:nth-of-type(5) img',1200);
		self.timer('li:nth-of-type(7) img',1200);
		self.timer('li:nth-of-type(4) img',2000);
		self.timer('li:nth-of-type(6) img',2000);
		self.timer('li:nth-of-type(10) img',2000);
		self.timer('li:nth-of-type(2) img',2120);
		self.timer('li:nth-of-type(3) img',3080);
		self.timer('nav',4000);
	},
	timer: function(element,timeout){
		var self = this;

		setTimeout(function(){
			self.content.find(element).css('opacity','1');
		}, timeout);
	}
});
