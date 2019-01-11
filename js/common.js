$(document).ready(function() {

	$(document).ready(function(){
		$('.btn-up').mPageScroll2id();
	});
	$(".btn-order-info").click(function(){
		$(".alert-vidpravka").css("display","block");
	});
	$(".zakrutu").click(function(){
		$(".alert-vidpravka").css("display","none");
	});
});
