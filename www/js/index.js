/***********************清除最上方的广告**********************************/
$("div.top .ct").click(function(){
	$("div.top").css("display","none")
})
/***********************导航栏**********************************/
//导航栏的定位
$("nav .place ").mouseenter(function(){
	$("nav .place .other").css("display","block");
	$("nav .place .other li").click(function(){
			$(this).css({
				color: "#FFF",
				backgroundColor: "#F10215"
			});
			$(this).siblings().css({
				color: "#AC99AC",
				backgroundColor: "#FFF"
			})
		$("nav .place .FP").text($(this).text())
	});
});
$("nav .place ").mouseleave(function(){
	$("nav .place .other").css("display","none");
});
//二维码
$("nav .nav_r .ma .ma_s").mouseenter(function(){
	$("nav .nav_r .ma .ma_b").css("display","block");
	
})
$("nav .nav_r .ma .ma_b").mouseleave(function(){
	$(this).css("display","none");
})
/***************************轮播图区域**************************************/
//轮播图区域左部分
$(".banner .banner_l li:odd").mouseover(function(){
	$(".banner .banner_l .ou").css("display","block")
})
$(".banner .banner_l li:odd").mouseout(function(){
	$(".banner .banner_l .ou").css("display","none")
})
$(".banner .banner_l li:even").mouseover(function(){
	$(".banner .banner_l .ji").css("display","block")
})
$(".banner .banner_l li:even").mouseout(function(){
	$(".banner .banner_l .ji").css("display","none")
})
//轮播图部分
//当前轮播到第几张了
	var index = 0;
	var last = 4;
	//上一张的index是多少？
	function getIndexPrev(){
		return  index <= 0 ? $(".banner_m .lbt .banner_img_a").length-1:index-1;
	}
	//下一张的index是多少？
	function getIndexNext(){
		return index >= $(".banner_m .lbt .banner_img_a").length-1 ? 0:index+1;
	}
	//显示图片
	function showPrevImage(){
		index = getIndexPrev();
		$(".banner_m .lbt .banner_img_a").eq(last).css({
			left: 0,
		}).finish().show().animate({
			left: 880,
		},500,function(){
			$(this).hide().css({
				left: -880,
			});
		});
		$(".banner_m .lbt .banner_img_a").eq(index).css({
			left: -880,
		}).finish().show().animate({
			left: 0,
		},500);
		$(".banner_m .lbt .indicator span").removeClass("cur");
		$(".banner_m .lbt .indicator span").eq(index).addClass("cur");
		last = index;
	}
	function showNextImage(){
		index = getIndexNext();
		$(".banner_m .lbt .banner_img_a").eq(last).css({
			left: 0,
		}).finish().show().animate({
			left: -880,
		},500,function(){
			$(this).hide().css({
				left: 880,
			});
		});
		$(".banner_m .lbt .banner_img_a").eq(index).css({
			left: 880,
		}).finish().show().animate({
			left: 0,
		},500);
		$(".banner_m .lbt .indicator span").removeClass("cur");
		$(".banner_m .lbt .indicator span").eq(index).addClass("cur");
		last = index;
	}
	//定时器轮播
	var timer = setInterval(showNextImage,3000);
	//鼠标放到指示器时的效果
	 $('.banner_m .lbt .indicator span').hover(function(){
            window.clearInterval(timer);
            index = $('.banner_m .lbt .indicator span').index(this) - 1;
            showNextImage();
       },function(){
            timer = window.setInterval(showNextImage,3000);
    	}) ;

      $('.banner_m .lbt .page span').hover(function(){
           window.clearInterval(timer);
      },function(){
           timer = window.setInterval(showNextImage,3000);
       }) ;
       
       //改变上一张下一张
       $('.banner_m .lbt .page .prev').click(function(){
            showPrevImage();
        });
        $('.banner_m .lbt .page .next').click(function(){            
			showNextImage();
        });
/****************************倒计时****************************************/
	var hour = $(".shop1 .red .redr .clock .hour");
	var mins = $(".shop1 .red .redr .clock .min");
	var secs = $(".shop1 .red .redr .clock .sec");
setInterval(updateTime,1000);
var totalSeconds = null;
function updateTime(){

	
	//获取总的时间(s)，并让时间减一
	//字符串*数字=数字
//	 console.log(hour.text(),minutes,seconds)
	
	totalSeconds = hour.text()*3600 + mins.text()*60 + secs.text()*1;
		totalSeconds--;
//		console.log(totalSeconds)
	//重新把时间写上去,获取分钟和秒数
	var hours = Math.floor(totalSeconds / 3600);
	var minutes = Math.floor(totalSeconds / 60) - (hours*60);
	var seconds = totalSeconds % 60;
//	 console.log(hours,minutes,seconds)
	
	//如果时间小于10，在前面加0(三目运算符)
		hours = hours < 10 ? "0" + hours : hours;
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
//	
//	 console.log(hours)
	 //把时间显示上去(正则表达式)
	 $(".shop1 .red .redr .clock .hour").text(hours);
	 $(".shop1 .red .redr .clock .min").text(minutes);
	 $(".shop1 .red .redr .clock .sec").text(seconds);
	 
}
/****************************页面左侧****************************************/
$(".html_left .hl_buttom").click(function(){
	$("body,html").animate({scrollTop:0},1000)
})
$(document).mousemove(function(e){
//	console.log(e.pageY);
	if (e.pageY > $(".xpz").offset().top) {
		$(".html_left").fadeIn();
		$(".showhead").fadeIn()
	} else{
		$(".html_left").fadeOut()
		$(".showhead").fadeOut()
	}
});

/****************************页面右侧****************************************/
$(".tan .tu").mouseover(function(){
	console.log($(this))
	$(this).parent().find(".xiang").fadeIn()
})
$(".tan .tu").mouseout(function(){
	$(this).parent().find(".xiang").fadeOut()
})
/*****************************判断用户是否登录*******************************/
var username = $.cookie("username");
if (username) {
	console.log(username)
	$("#user").text(username);
} 
//else{
//	$("#user").find("span").last().text("登录").end().end().removeAttr("data-toggle").click(function(){
//		location.href = "login.html";
//	});
//	
//}