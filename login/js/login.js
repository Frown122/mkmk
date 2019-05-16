//验证码
$(function(){
	$.idcode.setCode();
	$("#btns").click(function (){
	  var IsBy = $.idcode.validateCode(); 
	  alert(IsBy);
	});
});
//
$('#log').click(function(){
	Phone();
	Pwd();
	Cfm();
	Pic();
	Sms();
	Bir();
})
//获取元素
var phone = $('.one').val();
var pwd = $('.two').val();
var cfm = $('.three').val();
var pic = $('.four').val();
var sms = $('.five').val();
var bir = $('.seven').val();
//function Phone(){
//	if(phone == ''){
//		var t = s1.html('请输入正确格式');
//	}
//}
//function Pwd(){
//	if(pwd == ''){
//		alert('用户名不能为空');
//	}
//}
//function Cfm(){
//	if(cfm == ''){
//		alert('请重新输入密码');
//	}
//}
//function Pic(){
//	if(pic == ''){
//		alert('图片字符不能为空');
//	}
//}
//function Sms(){
//	if(sms == ''){
//		alert('短信验证码不能为空');
//	}
//}
//function Bir(){
//	if(bir == ''){
//		alert('请输入您的生日');
//	}
//}
//正则
//$('form input').blur(function(){
//	//验证手机号
//	var regPh = /^1[3|4|5|8][0-9]\d{8}$/;
//	if(!regPh.test(phone)){
//		alert('请输入有效的手机号');
//	}
//	//验证密码
//	var regPwd = /^[A-Za-z0-9]{8,20}$/;
//	if(!regPwd.test(pwd)){
//		alert('请输入正确格式的密码');
//	}
//	//确认密码
//	if(!pwd == cfm){
//		alert('输入密码不一致，请重新输入');
//	}
//	//
//})

