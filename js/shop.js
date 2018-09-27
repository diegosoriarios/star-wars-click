$(document).ready(function(){
	$('#close').click(function(){
		$('#shop').css("display", "none");
		$('#box').css("display", "none");
	});
	$('#shopping').click(function(){
		$('#shop').css("display", "block");
		$('#box').css("display", "block");
	});
});