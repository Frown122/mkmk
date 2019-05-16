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
let bigBox = $('.boxBox');
let storage = window.localStorage;
let storageStr = storage.cart?storage.cart:'';
let storageObj = $.strToObj(storageStr);					
for(let key in storageObj){
	let good = storageObj[key];
	let str = `
				<div class="mean-t" data-good-id="${key}">
					<div class="pic">
						<a href="../product/product.html">
							<img src="${good.src}"/>
						</a>
					</div>
					<div class="txt">
						<a href="../product/product.html">${good.name}</a>
						<p>规格：1.5磅</p>
						<p class="good-id">M714015</p>
					</div>
					<section class="lump1">￥${good.price}.00</section>
					<section class="lump2">
						<div class="lump2-cont">
							<a href="javasrcipt:void(0)" class="minus">-</a>
							<input type="text" class='number' value="${good.num}" min="1" max="19159"/>
							<a href="javascript:void(0)" class="plus">+</a>
						</div>	
					</section>
					<section class="lump3">￥0.00</section>
					<section class="lump4">￥${good.price}.00</section>
					<section class="lump5">￥${good.price*good.num}.00</section>
					<section class="lump6">
						<a href="#">收藏</a>&nbsp;
						<a href="#" class="del">移除</a>
					</section>
				</div>
				<div class="mean-b">
					<div class="money">
						<li>
							<span class="price">商品总金额：</span>
							<span class="price1">￥${good.price*good.num}.00</span>
						</li>
						<li>
							<span class="price">订单优惠金额：</span>
							<span class="price1">￥0.00</span>
						</li>
						<li>
							<span class="sum">(订单可得积分297)<i>总金额：</i></span>
							<span class="sum1">￥${good.price*good.num}.00</span>
						</li>
					</div>
				</div>
			</div>
		</div>
	`;
	$('.mean').append(str);
}
//-
$('.minus').each(function(){
	$(this).click(function(){
		let id = $('.good-id').html();
		console.log(id)
		let storage = window.localStorage;
		let storageStr = storage.cart?storage.cart:'';
		let storageObj = $.strToObj(storageStr);
		if(storageObj[id].num > 0){
			storageObj[id].num --;
		}
		storage.cart = JSON.stringify(storageObj);
		$(this).next().val(storageObj[id].num);
		$('.lupm5').innerHTML = storageObj[id].num *storageObj[id].price;
	})
})
//+
$('.plus').each(function(){
	$(this).click(function(){
		let id = $('.good-id').html();
		console.log(id)
		let storage = window.localStorage;
		let storageStr = storage.cart?storage.cart:'';
		let storageObj = $.strToObj(storageStr);
		console.log(storageObj)
		storageObj[id].num ++;
		storage.cart = JSON.stringify(storageObj);
		$(this).prev().val(storageObj[id].num);
		$('.lupm5').innerHTML = storageObj[id].num *storageObj[id].price;
	})
})
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
		$('.lupm5').innerHTML = storageObj[id].num *storageObj[id].price;
	})
})
//删除
$('.del').each(function(){
	$(this).click(function(){
		let id = $('.good-id').html();
		let storage = window.localStorage;
		let storageStr = storage.cart?storage.cart:'';
		let storageObj = $.strToObj(storageStr);
		delete storageObj[id];
		history.go(0);
		storage.cart = JSON.stringify(storageObj);

	})
})
$('.one').each(function(){
	$(this).click(function(){
		let id = $('.good-id').html();
		let storage = window.localStorage;
		let storageStr = storage.cart?storage.cart:'';
		let storageObj = $.strToObj(storageStr);
		delete storageObj[id];
		history.go(0);
		storage.cart = JSON.stringify(storageObj);

	})
})


