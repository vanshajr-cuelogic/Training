$(document).ready(function(){
	$(".video-blog").hide();
	$(".img-blog").click(function(){
		$(".site-blog-section").hide();
		$(".image-blog-section").show();
	});
	$(".site-blog").click(function(){
		$(".image-blog-section").hide();
		$(".site-blog-section").show();	
	})
})