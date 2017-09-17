function Banner(){
	
/*	function gg(){
		alert( $( '.yl-ui-pic', $('.yl-ui-blist li').eq(0) ).width() );
	}
	setTimeout(gg,2000);*/
	

/*	setTimeout(function (){
		
	},2000);
	*/

		//alert( $( '.yl-ui-pic', $('.yl-ui-blist li').eq(0) ).attr("src") );

	
	/*alert($('.bb','.aa').html());
	
	$('.aa .bb')*/
	var i = 0;
	var timer;
	var l = $('.yl-ui-blist li').length;
	$('.yl-ui-btn-list').html('');
	for( var k=0; k<l; k++ ){
		if( k==0 ){
			$('.yl-ui-btn-list').append( '<li class="yl-ui-btn bg">' + (k+1) + '</li>' );
		}else{
			$('.yl-ui-btn-list').append( '<li class="yl-ui-btn">' + (k+1) + '</li>' );
		};
	};
	
	
	//因为我们给li绝对定位，.yl-ui-banner的高度因为绝对定位原因变成了0，而图片自动缩放得动态给 .yl-ui-banner赋值高度，取得绽放高度的两种方法
	//方法1
	var img = new Image();//<img /> 
	img.src = $( '.q-slide-listul li', $('.yl-ui-blist li').eq(0) ).attr("src");//获取图片地址src//<img src="images/1.jpg" /> 
	function bhfunc(){
		//lih/liw = imgh/imgw	
		var lih = img.height/img.width*$('.banner').width();
		//alert(lih);
		$(".banner").height( lih );
		
	};
	img.onload = bhfunc;
	//方法2
	/*function gg(){
		var h = $( '.yl-ui-pic', $('.yl-ui-blist li').eq(0) ).height();
		if( h <= 0 ){
			//console.log( "未加载完成" );//高为0，即未加载完成
			setTimeout(function (){
				gg();
			},10);
		}else{
			//console.log(  "加载完成" );	
			$(".yl-ui-banner").height( h );
		};
	};
	gg();*/
	
	$( window ).resize(function(){
		//gg();
		bhfunc();	
	});
	
	
	
	setTimeout(function(){
		var btnw = $(".banner .yl-ui-btn-list").width();
		//alert( btnw );
		$(".banner .yl-ui-btn-list").css({"margin-left":(btnw/2)*(-1)});
	});
	
	
	$('.yl-ui-blist li').eq(0).show().siblings().hide();
	
	function Show(){
		//$('.yl-ui-blist li').eq(i).slideUp(300).siblings().slideDown(300);
		 $(".yl-ui-blist li").slideToggle("click"); 
		$('.yl-ui-btn-list li').eq(i).addClass('bg').siblings().removeClass('bg');
	};
	
	function ShowTime(){
		timer=setInterval(function(){
			i++;	
			if(i==l){
				i=0
			};/*$('.yl-ui-blist li').eq(i).show().siblings().hide();*/	
			
			Show();
			
		},2000);	
	};

	

	ShowTime();
	$('.yl-ui-btn-list li').hover(function(){
		i=$(this).index();
		Show();
		clearInterval(timer);//清除轮播
	},function(){
		ShowTime();	
	});
	$('.banner .prev').click(function(){
		clearInterval(timer);
		if(i==0)
		{
			i=l
			
		}	
		i--;
		Show();
		ShowTime();
	});
	$('.banner .next').click(function(){
		clearInterval(timer);
		i++;
		if(i>=l)
		{
			i=0
			
		}
		
		Show();
		ShowTime();
	});
//	$('.banner').hover(function(){$('.banner .pagebtn').show();},function(){$('.banner .pagebtn').hide();});
};


$(function(){
	
	Banner();
	
	
});















