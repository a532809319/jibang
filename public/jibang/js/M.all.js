//M.config( 'isDebug', true );
M.config('isSwitch',true);
M.config( 'banner', true );
M.config('isOnScroll',true);
//公共
M(function(){
/*
	//二级导航
	var mcloud={};
	$('[_t_nav]').hover(function(){
		var _nav = $(this).attr('_t_nav');
		clearTimeout( mcloud[ _nav + '_timer' ] );
		mcloud[ _nav + '_timer' ] = setTimeout(function(){
			$('[_t_nav]').each(function(){
				$(this)[ _nav == $(this).attr('_t_nav') ? 'addClass':'removeClass' ]('nav-up-selected');
			});
			$('#'+_nav).stop(true,true).slideDown(1);
		},30);
	},function(){
		var _nav = $(this).attr('_t_nav');
		clearTimeout( mcloud[ _nav + '_timer' ] );
		mcloud[ _nav + '_timer' ] = setTimeout(function(){
			$('[_t_nav]').removeClass('nav-up-selected');
			$('#'+_nav).stop(true,true).slideUp(1);
		},30);
	});*/
	setTimeout(function(){
		$('.select2.select2-container.select2-container--default').css('width','176'+'px');
	},200);
	var ttt;
	$('.stuckMenu li').hover( function(){
		clearTimeout( ttt );
		$('.navigation-down .web').children().hide().eq( $(this).index() ).show();
		$('.navigation-down').css('display','block');	
	},function(){
		ttt = setTimeout(function(){
			$('.navigation-down').css('display','none');
		},800);
	});
	$('.navigation-down').hover(function(){
		clearTimeout( ttt );
	},function(){
		$('.navigation-down').css('display','none');
	});
	
	
	M(".yl-allList input.inp  ut-c-333").fn("placeholder",{color:'#333333',auto:false});
	M.gotoPosition();
	//下拉框
	M("input.input-c-000").fn("placeholder",{color:'#000',auto:false});
	M("input.input-c-ccc").fn("placeholder",{color:'#ccc',auto:false});
	M("input.input-c-333").fn("placeholder",{color:'#333',auto:false});
	M("input.input-c-666").fn("placeholder",{color:'#666',auto:false});
	M("").fn("placeholder",{color:'#fff',auto:false});
	
	$('.yl-sec').selectOrDie();
});

M({
	left_hover:function(){
		//左侧菜单
		$(".yi-ji li a").hover(function(){
			$(this).addClass("img-on");
		},function(){
			$(this).removeClass("img-on");
		});
	}
},'global');

M({
 	index:function(){
		$('.marquee').m_marquee({time:3000,speed:300});
		$('.remember').click(
			function(){

				if($('.remember span:first').hasClass('checked1')){

					$('.remember .checked').removeClass('checked1');
				}else{
					$('.remember .checked').addClass('checked1')
				}
			}
		);
		//滚动条

		/*$('.yl-index.yl-jihe-mian2 .table').niceScroll({  
			cursorcolor:"#ccc",  
			cursoropacitymax:1,  
			touchbehavior:false,  
			cursorwidth:"10px", 
			cursorborder:"0",  
			cursorborderradius:"5px"  
	  });*/
		//M('.q-slide-listtag').fn('banner',{on:'mouseover'});
		
	},
	ceer:function(){
		//产品首页
		$(".ml-type-box .t-fl").hover(function(){
			$(this).addClass("on");
		},function(){
			$(this).removeClass("on");
		});
		$(".m-opposite-icon .t-fl").hover(function(){
			$(this).addClass("on");
		},function(){
			$(this).removeClass("on");
		});
	},
	yl_about:function(){
		function tt( i, h ){	
			if( $('.yl-main2 .con' + i + ' .y-cccc').height() > h ){
				$('.yl-main2 .con' + i + ' .y-cccc').height( h );
				$('.yl-main2 .con' + i + ' .icon').click(function(){
					if( $('.yl-main2 .con' + i ).hasClass('open') ){
						$('.yl-main2 .con' + i ).removeClass('open');
					}else{
						$('.yl-main2 .con' + i ).addClass('open');
					};
				});
			}else{
				$('.yl-main2 .con' + i + ' .icon').remove();
			};	
		};
		
		tt( 1, 190 );
		tt( 2, 220 );
		
	},
	
	yl_content:function(){
		$('.yl-hover-img').hover(function(){
			$('.yl-hover').css('display','block');	
		});	
		$('.yl-hover-img').mouseout(function(){
			$('.yl-hover').css('display','none');	
		});	
		$('.ylContent1 .p2-right .bigBox td').hover(function(){
			$('.ylContent1 .p2-right .bigBox td').parent().css('z-index','0');
			if( $(this).hasClass('on') ){
				$(this).removeClass('on');	
			}else{
				$('.ylContent1 .p2-right .bigBox td.on').removeClass('on');
				$(this).addClass('on').parent().css('z-index','5');
				
			};
		});
	},
	m_kai1:function(){
		$('.m-yiread span').click(function(){
			$(this).toggleClass('on');
		});
	},
	m_kai2:function(){
		$('.m-sle').selectOrDie();
		$('.mx-bank .m-list').click(function(){
			$(this).addClass('on').siblings().removeClass('on');
		});
	},
	m_dengly:function(){
		$('.m-sle').selectOrDie();
	},
	m_person:function(){
		this.left_hover();
	},
	yl_check:function(){
		//弹出--复选框
		$('.yl-checkbox').each(function(index, element) {
			var $this = $(this);
			$this.append('<b></b>');
			var $input = $this.prev('input');
			if( $input.is(':checked') ){
				$this.addClass('checked');
			}else{
				$this.removeClass('checked');
			};
			
			$this.parents('label').click(function(){
				var $inss = $input.parents('.g-radioBox');
				if( $inss.index() ==-1 ){				
					if( $input.is(':checked') ){
						$this.addClass('checked');
					}else{
						$this.removeClass('checked');
					};
				}else{
					$('.yl-checkbox',$inss).each(function(index, element) {
						var $this2 = $(this);
						var $input2 = $this2.prev('input');
						if( $input2.is(':checked') ){
							$this2.addClass('checked');
						}else{
							$this2.removeClass('checked');
						};
					});;
				};
			});
			
		});		
	}
	
});