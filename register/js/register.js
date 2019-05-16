$(function(){
	$('.regBox-r').css('display','none');
	$('h2:eq(1)').click(function(){
		$('.regBox-r').css('display','block');
		$('.regBox-l').css('display','none');
		$('h2:eq(2)').click(function(){
			$('.regBox-r').css('display','none');
			$('.regBox-l').css('display','block');
		});
	});
});
////验证码
$(function(){
	$.idcode.setCode();
	$("#btns").click(function (){
	  var IsBy = $.idcode.validateCode(); 
	  alert(IsBy);
	});
});



