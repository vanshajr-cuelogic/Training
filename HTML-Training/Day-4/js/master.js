$(document).ready(function(){

	var c = document.getElementById("canvas_text");
	var context = c.getContext("2d");
	context.font = "30px Arial";
	context.fillStyle = '#fff';
	context.fillText("Bingo",5,25);


	$(".site-blog-section").hide();
	$(".video-blog-section").hide();

	$(".img-blog").click(function(){
		$(".site-blog-section").hide();
		$(".video-blog-section").hide();
		$(".image-blog-section").show();
	});
	$(".site-blog").click(function(){
		$(".image-blog-section").hide();
		$(".video-blog-section").hide();
		$(".site-blog-section").show();	
	})
	$(".video-blog").click(function(){
		$(".site-blog-section").hide();
		$(".image-blog-section").hide();
		$(".video-blog-section").show();

	});
});