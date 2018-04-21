(function($){
	$.fn.z=function(v){
		if(typeof v!='undefined'){
			return this.each(function(i,o){
				$(o)
					.css('z-index',v)
				;
			});
		}else{
			return(this.css('z-index'));
		}
	};
	$.fn.x=function(v){
		if(typeof v!='undefined'){
			return this.each(function(i,o){
				$(o)
					.css('position','absolute')
					.css('left',v+'%')
				;
			});
		}else{
			return(this.offset().left/window.innerWidth*100);
		}
	};
	$.fn.y=function(v){
		if(typeof v!='undefined'){
			return this.each(function(i,o){
				$(o)
					.css('position','absolute')
					.css('top',v+'%')
				;
			});
		}else{
			return(this.offset().top/window.innerHeight*100);
		}
	};
	$.fn.w=function(v){
		if(typeof v!='undefined'){
			return this.each(function(i,o){
				$(o)
					.css('overflow','hidden')
					.css('width',v+'%')
					.css('background-size','100% 100%')
				;
			});
		}else{
			return(this.width()/window.innerWidth*100);
		}
	};
	$.fn.h=function(v){
		if(typeof v!='undefined'){
			return this.each(function(i,o){
				$(o)
					.css('overflow','hidden')
					.css('height',v+'%')
					.css('background-size','100% 100%')
				;
			});
		}else{
			return(this.height()/window.innerHeight*100);
		}
	};
	$.fn.r=function(v){
		if(typeof v!='undefined'){
			return this.each(function(i,o){
				$(o)
					.css('transform','rotate('+v+'deg)')
					.css('-o-transform','rotate('+v+'deg)')
					.css('-ms-transform','rotate('+v+'deg)')
					.css('-moz-transform','rotate('+v+'deg)')
					.css('-webkit-transform','rotate('+v+'deg)')
				;
			});
		}else{
			return this.css('transform')=='none'?0:parseInt(this.css('transform').split('rotate(')[1]);
		}
	};
	$.fn.b=function(v){
		if(typeof v!='undefined'){
			return this.each(function(i,o){
				$(o)
					.css('border-radius',v)
					.css('-o-border-radius',v)
					.css('-ms-border-radius',v)
					.css('-moz-border-radius',v)
					.css('-webkit-border-radius',v)
				;
			});
		}else{
			return this.css('border-radius')?parseInt(this.css('border-radius')):0;
		}
	};
	$.fn.isCrash=function(o){
		//return this.offset().left+this.width()>=$(o).offset().left&&this.offset().left<=$(o).offset().left+$(o).width()&&this.offset().top+this.height()>=$(o).offset().top&&this.offset().top<=$(o).offset().top+$(o).height()?1:0;
		return this.x()+this.w()>=$(o).x()&&this.x()<=$(o).x()+$(o).w()&&this.y()+this.h()>=$(o).y()&&this.y()<=$(o).y()+$(o).h()?1:0;
	};
})(jQuery);