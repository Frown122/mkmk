
//切换1
$('.a').click(function(){
	$('#details1').css('display','block');
	$('#details2').css('display','none');
	$('#details3').css('display','none');
	$('#details4').css('display','none');
	$('#details5').css('display','none');
	
})
//切换2
$('.b').click(function(){
	$('#details2').css('display','block');
	$('#details1').css('display','none');
	$('#details3').css('display','none');
	$('#details4').css('display','none');
	$('#details5').css('display','none');
	
})
//切换3
$('.c').click(function(){
	$('#details3').css('display','block');
	$('#details1').css('display','none');
	$('#details2').css('display','none');
	$('#details4').css('display','none');
	$('#details5').css('display','none');
})
//切换4
$('.d').click(function(){
	$('#details4').css('display','block');
	$('#details1').css('display','none');
	$('#details2').css('display','none');
	$('#details3').css('display','none');
	$('#details5').css('display','none');
})
//切换5
$('.e').click(function(){
	$('#details5').css('display','block');
	$('#details1').css('display','none');
	$('#details2').css('display','none');
	$('#details3').css('display','none');
	$('#details4').css('display','none');
})
//更多
$('.more').mouseenter(function(){
	$('.many').css('display','block');
	$('.mark').css('display','block');
		$('.mark').mouseenter(function(){
		$('.many').css('display','block');
	})
})
$('.more').mouseleave(function(){
	$('.many').css('display','none');
	
})
$('.mark').mouseleave(function(){
	$('.many').css('display','none');
	$('.mark').css('display','none');
})
//推荐
$('.share-c').mouseenter(function(){
	$('.rec').css('display','block');
	$('.mark1').css('display','block');
	$('.mark1').mouseenter(function(){
		$('.rec').css('display','block');
	})
})
$('.share-c').mouseleave(function(){
	$('.rec').css('display','none');
	//$('.mark1').css('display','none');
})
$('.mark1').mouseleave(function(){
	$('.rec').css('display','none');
	$('.mark1').css('display','none');
})
//微信
$('.weixin').click(function(){
	$('.rwm').css('display','block');
	$('.rwm').click(function(){
		$('.rwm').css('display','none');
	})
})
//添加购物车
//购物车按钮 ic4  now
//添加按钮  join
var buy1 = $('.now');
var buy2 = $('.ic4');
var add = $('.join');

//添加事件
//购物车点击事件
buy1.click(function(){
	location.href = '../cart/cart.html';
})
//添加事件
add.click(function(){
	var goodid = $('.good-id').html();	
	var goodname = $('.good-name').html();
	var goodprice = $('.good-price').html();
	var goodsrc = $('.good-src').attr('src');
	var storage = window.localStorage;
	var storageStr = storage.cart?storage.cart:'';
	var storageObj = $.strToObj(storageStr);
	if(goodid in storageObj){
		storageObj[goodid].num ++;
	}else{
		storageObj[goodid]={
			"name":goodname,
			"price":goodprice,
			"src":goodsrc,
			"num":1	
		}
	}
	storage.cart = JSON.stringify(storageObj);
	//购物车数量
	var carnum = buy1.value;
	var re = /(\d+)/;
	var num = parseInt(re.exec($('.now').val())[1]);
	$('.now').val(`购物车(${num + 1})`);
	$('.ic4').val(`${num + 1}`);
	$('.total').val(`${num + 1}`);
})
//id  name   price  图片src 
//.good-id  .good-name good-price good-src
//初始化数量
//$.extend({
//	'carValue' : function(){
//		var storage = window.localStorage;
//		var storageStr = storage.cart?storage.cart:'';
//		var storageObj = $.strToObj(storageStr);
//		var sum = 0;
//		for(let key in storageObj){
//			sum += storageObj[key].num;
//			
//		}
//		$('.now').val(`购物车(${sum})`);
//		$('.ic4').val(`${sum}`);
//	}
//})
//-
//$('.minus').each(function(){
//	$(this).click(function(){
//		let id = $('.good-id').html();
//		console.log(id)
//		let storage = window.localStorage;
//		let storageStr = storage.cart?storage.cart:'';
//		let storageObj = $.strToObj(storageStr);
//		if(storageObj[id].num > 0){
//			storageObj[id].num --;
//		}
////		storage.cart = JSON.stringify(storageObj);
////		$(this).next().val(storageObj[id].num);
////		$('.lupm5').innerHTML = storageObj[id].num *storageObj[id].price;
//	})
//})
////+
//$('.plus').each(function(){
//	$(this).click(function(){
//		alert('bug修改中');
//		let id = $('.good-id').html();
//		console.log(id)
//		let storage = window.localStorage;
//		let storageStr = storage.cart?storage.cart:'';
//		let storageObj = $.strToObj(storageStr);
//		console.log(storageObj)
//		storageObj[id].num ++;
//		storage.cart = JSON.stringify(storageObj);
//		$(this).prev().val(storageObj[id].num);
////		$('.lupm5').innerHTML = storageObj[id].num *storageObj[id].price;
//	})
//})
//数量框
$('.number').each(function(){
	$(this).blur(function(){
		let id = $('.main-t').attr('data-good-id');
		let storage = window.localStorage;
		let storageStr = storage.cart?storage.cart:'';
		let storageObj = $.strToObj(storageStr);
		if(/^\d+$/.test(str) && str > 0){
			storageObj[id].num = str;
		}else{
			storageObj[id].num = 1;
		}
		storage.cart = JSON.stringify(storageObj);
		$(this).val(cookieObj[id].num);
//		$('.lupm5').innerHTML = storageObj[id].num *storageObj[id].price;
	})
})
//封装函数
$.extend({
	'strToObj' : function(str){
		if(!str){
			return{};
		}else{
			return JSON.parse(str);
		}
	}
})
var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	if(scrollTop > 0){
		$('.ic7').click(function(){
			$('body,html').animate({
				scrollTop: 0
			},200)
		})
	}


