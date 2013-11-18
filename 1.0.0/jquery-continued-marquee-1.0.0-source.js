/**
* jQuery窗口持续滚动插件
* author: 1125271180@qq.com
*/
jQuery.fn.extend({
	marquee2Up:function(speech,force){
		if(speech===undefined || speech===null) speech = 100;
		
		//固定展示窗口
		var thisCss = {'display':'block','position':'relative','overflow':'hidden'};
		this.css(thisCss);
		var thisWidth = this.width();
		var thisHeight = this.height();
		
		//判断是否要强制滚动
		var child = this.children();
		var childWidth = child.width();
		var childHeight = child.height();
		var overflow = (childHeight>thisHeight);
		if ( (force!==true) && (!overflow ) ) return;
		
		//添加滚动窗口
		var moveId = 'movement_'+parseInt(Math.random() * 10000);
		var moveCss = {'display':'block','position':'relative','clear':'both',
						'border-collapse':'collapse',
						'border-spacing':'0px',
						'margin':'0','padding':'0',
						'width':childWidth+'px',
						'height':(childHeight*2)+'px'};
		var moveContainerHtml = '<table id="'
								+moveId+'" cellpadding="0" cellspacing="0" border="0"><tr><td>'
								+this.html()+'</td></tr><tr><td>'
								+this.html()+'</td></tr></table>';
		this.html('');
		this.html(moveContainerHtml);
		
		//设置滚动容器
		var step = -1;
		//var moveChild = jQuery('#'+moveId);
		var moveChild = this.children();
		moveChild.css(moveCss);
		var moveChildWidth = moveChild.width();
		var moveChildHeight = moveChild.height();
		//
		var top = moveChild.position().top;
		function start_marquee(){
			top = moveChild.position().top;
			top = top + step;
			moveChild.css('top', top);
			moveChild.attr('data-move', 'top:'+top);
			if ( top+(moveChildHeight/2) < 0 ) moveChild.css('top', 0);
		}
		var initmarquee = setInterval(start_marquee, speech);
		this.mouseover(function(e) {
			clearInterval(initmarquee);
		});
		this.mouseout(function(e) {
			initmarquee = setInterval(start_marquee, speech);
		});
		//
	},
	marquee2Down:function(speech,force){
		if(speech===undefined || speech===null) speech = 100;
		
		//固定展示窗口
		var thisCss = {'display':'block','position':'relative','overflow':'hidden'};
		this.css(thisCss);
		var thisWidth = this.width();
		var thisHeight = this.height();
		
		//判断是否要强制滚动
		var child = this.children();
		var childWidth = child.width();
		var childHeight = child.height();
		var overflow = (childHeight>thisHeight);
		if ( (force!==true) && (!overflow ) ) return;
		
		//添加滚动窗口
		var moveId = 'movement_'+parseInt(Math.random() * 10000);
		var moveCss = {'display':'block','position':'relative',
					   'clear':'both',
					   'border-collapse':'collapse',
					   'border-spacing':'0px',
					   'margin':'0','padding':'0',
					   'width':childWidth+'px',
					   'height':(childHeight*2)+'px'};
		var moveContainerHtml = '<table id="'
								+moveId+'" cellpadding="0" cellspacing="0" border="0"><tr><td>'
								+this.html()+'</td></tr><tr><td>'
								+this.html()+'</td></tr></table>';
		this.html('');
		this.html(moveContainerHtml);
		
		//设置滚动容器
		var step = 1;
		//var moveChild = jQuery('#'+moveId);
		var moveChild = this.children();
		moveChild.css(moveCss);
		var moveChildWidth = moveChild.width();
		var moveChildHeight = moveChild.height();
		//console.log('moveChildHeight:'+moveChildHeight);
		moveChild.css('top', -(moveChildHeight/2));
		var top = moveChild.position().top;
		function start_marquee(){
			top = moveChild.position().top;
			top = top + step;
			moveChild.css('top', top);
			moveChild.attr('data-move', 'top:'+top);
			if ( top >= 0 ) moveChild.css('top', -(moveChildHeight/2));
		}
		var initmarquee = setInterval(start_marquee, speech);
		this.mouseover(function(e) {
			clearInterval(initmarquee);
		});
		this.mouseout(function(e) {
			initmarquee = setInterval(start_marquee, speech);
		});
		//
		
		},
	marquee2Right:function(speech,force){
		if(speech===undefined || speech===null) speech = 100;
		
		//固定展示窗口
		var thisCss = {'display':'block','position':'relative','overflow':'hidden'};
		this.css(thisCss);
		var thisWidth = this.width();
		var thisHeight = this.height();
		
		//判断是否要强制滚动
		var child = this.children();
		var childWidth = child.width();
		var childHeight = child.height();
		//var overflow = (childHeight>thisHeight);
		var overflow = (childWidth>thisWidth);
		if ( (force!==true) && (!overflow ) ) return 'not overflow.';
		
		//添加滚动窗口
		var moveId = 'movement_'+parseInt(Math.random() * 10000);
		var moveCss = {'display':'block','position':'relative',
					   'clear':'both','border-collapse':'collapse',
					   'margin':'0','padding':'0',
					   'border-spacing':'0px',
					   'width':(childWidth*2)+'px',
					   'height':(childHeight)+'px'};
		var moveContainerHtml = '<table id="'
								+moveId+'" cellpadding="0" cellspacing="0" border="0"><tr><td>'
								+this.html()+'</td><td>'
								+this.html()+'</td></tr></table>';
		this.html('');
		this.html(moveContainerHtml);
		
		//设置滚动容器
		var step = 1;
		//var moveChild = jQuery('#'+moveId);
		var moveChild = this.children();
		moveChild.css(moveCss);
		var moveChildWidth = moveChild.width();
		var moveChildHeight = moveChild.height();
		//console.log('moveChildHeight:'+moveChildHeight);
		//moveChild.css('top', -(moveChildHeight/2));
		moveChild.css('left', -(moveChildWidth/2));

		var left = moveChild.position().left;
		function start_marquee(){

			left = moveChild.position().left;
			left = left + step;

			moveChild.css('left', left);
			moveChild.attr('data-move', 'left:'+left);
			if ( left >= 0 ) moveChild.css('left', -(moveChildWidth/2));
		}
		var initmarquee = setInterval(start_marquee, speech);
		this.mouseover(function(e) {
			clearInterval(initmarquee);
		});
		this.mouseout(function(e) {
			initmarquee = setInterval(start_marquee, speech);
		});
		//
		},
	marquee2Left:function(speech,force){
		if(speech===undefined || speech===null) speech = 100;
		
		//固定展示窗口
		var thisCss = {'display':'block','position':'relative','overflow':'hidden'};
		this.css(thisCss);
		var thisWidth = this.width();
		var thisHeight = this.height();
		
		//判断是否要强制滚动
		var child = this.children();
		var childWidth = child.width();
		var childHeight = child.height();
		//var overflow = (childHeight>thisHeight);
		var overflow = (childWidth>thisWidth);
		if ( (force!==true) && (!overflow ) ) return 'not overflow.';
		
		//添加滚动窗口
		var moveId = 'movement_'+parseInt(Math.random() * 10000);
		var moveCss = {'display':'block','position':'relative',
					   'clear':'both','border-collapse':'collapse',
					   'margin':'0','padding':'0',
					   'border-spacing':'0px',
					   'width':(childWidth*2)+'px',
					   'height':(childHeight)+'px'};
		var moveContainerHtml = '<table id="'
								+moveId+'" cellpadding="0" cellspacing="0" border="0"><tr><td>'
								+this.html()+'</td><td>'
								+this.html()+'</td></tr></table>';
		this.html('');
		this.html(moveContainerHtml);
		
		//设置滚动容器
		var step = -1;
		//var moveChild = jQuery('#'+moveId);
		var moveChild = this.children();
		moveChild.css(moveCss);
		var moveChildWidth = moveChild.width();
		var moveChildHeight = moveChild.height();
		//console.log('moveChildHeight:'+moveChildHeight);
		//moveChild.css('top', -(moveChildHeight/2));
		moveChild.css('left', 0);

		var left = moveChild.position().left;
		function start_marquee(){

			left = moveChild.position().left;
			left = left + step;

			moveChild.css('left', left);
			moveChild.attr('data-move', 'left:'+left);
			if ( left <= -(moveChildWidth/2) ) moveChild.css('left', 0);
		}
		var initmarquee = setInterval(start_marquee, speech);
		this.mouseover(function(e) {
			clearInterval(initmarquee);
		});
		this.mouseout(function(e) {
			initmarquee = setInterval(start_marquee, speech);
		});
		
		}	
});