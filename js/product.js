//Tab切换
var img_small = $(".img_small")[0].children;

for(var i=0;i<img_small.length;i++){
	img_small[i].setAttribute("index",i);
	//事件赋值
	img_small[i].onclick = function(){
		//1、改变小图片的样式
		for(var j=0;j<img_small.length;j++){
			img_small[j].style="";
			this.style.borderColor ="red"; 
		}
		//2、改变大图显示和隐藏
		var img_big = $(".img_big")[0].children;
		for(var j=0;j<img_big.length;j++){
			img_big[j].style.display = "none";
		}
		var index = this.getAttribute("index");//this被点击的a标签
		img_big[index].style.display = "block";
	}
}

//手机购物二维码
$("#qrcode").mouseenter( function(){
	$("#wechat_price")[0].style.display = "block";
});
$("#wechat_price").mouseleave( function(){
	$("#wechat_price")[0].style.display = "none";
});

//优惠券
$(".more-coupon").click(function(e){
	$("#coupon_list")[0].style.display = "block";
	$(".more-coupon")[0].style.display = "none";
	e.stopPropagation();
})
$(".coupon_show > li").click(function(e){
	$("#coupon_list")[0].style.display = "block";
	$(".more-coupon")[0].style.display = "none";
	e.stopPropagation();
})
$(document).click(function(){
	$("#coupon_list")[0].style.display = "none";
	$(".more-coupon")[0].style.display = "block";
})

//手机购物二维码2
$("#qrcode_list").mouseenter( function(){
	$("#phone_price")[0].style.display = "block";
});
$("#phone_price").mouseleave( function(){
	$("#phone_price")[0].style.display = "none";
});
//产品介绍隐藏部分
//$(function(){	
//  var document_one = $(document).scrollTop();
//  var pro_show = $('.pro_show').outerHeight();
//  var img_details = $('.img_details').scrollTop();
//
//  $(window).scroll(function() {
//      
//
//      if (img_details < pro_show){
//      	$('.img_details').css({marginTop:"0",visibility:"visible"});
//      }
//      else {
//      	$('.img_details').css({marginTop:"-100px",visibility:"hidden"});
//      }
//
//      if (img_details < document_one){
//      	$('.img_details').css({marginTop:"0",visibility:"visible"});
//      }
//      else {
//      	$('.img_details').css({marginTop:"-100px",visibility:"hidden"});
//      }
//
//      document_one = $(document).scrollTop();	
//   });
//});
