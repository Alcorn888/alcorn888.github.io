define({
	renderTransformer3D: function(pages) {
		this.fillTransformer3D(pages);
		return this.transformer3DHtml;
	},
	fillTransformer3D: function(pages) {
		var self = this;
		this.transformer3DHtml.find('.frontSide').html(pages[0]);
		this.transformer3DHtml.find('.topSide').html(pages[1]);
		this.transformer3DHtml.find('.bottomSide').html(pages[2]);
		this.transformer3DHtml.find('.backSide').html(pages[3]);
		this.transformer3DHtml.find('figure').css({ 
			WebkitTransition : 'transform 1s',
		    MozTransition    : 'transform 1s',
		    MsTransition     : 'transform 1s',
		    OTransition      : 'transform 1s',
		    transition       : 'transform 1s'
	    });
	},
	goTop: function(){
		this.transformer3DHtml.find('#cube').removeClass();
		this.transformer3DHtml.find('#cube').toggleClass('show-top');
	},
	goBottom: function(){
		this.transformer3DHtml.find('#cube').removeClass();
		this.transformer3DHtml.find('#cube').toggleClass('show-bottom');
	},
	goFront: function(){
		this.transformer3DHtml.find('#cube').removeClass();
		this.transformer3DHtml.find('#cube').toggleClass('show-front');
	},
	goBack : function (){
		this.transformer3DHtml.find('#cube').removeClass();
		this.transformer3DHtml.find('#cube').toggleClass('show-back');
	}
});
