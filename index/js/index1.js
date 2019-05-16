let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
if(scrollTop > 0){
	$('.ic7').click(function(){
		$('body,html').animate({
			scrollTop: 0
		},200)
	})
}