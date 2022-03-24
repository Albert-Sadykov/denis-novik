$(function(){

	function ClickButton() {
		$('.menu').toggleClass('menu_active');
		console.log("123")
	}

	$('.menu-btn').on("click", function(e) {
		ClickButton()
		e.preventDefault;
		$(this).toggleClass("menu-btn-active");
		$('.content').toggleClass("content-active");
	})

	$(".menu-list a").on("click", function(){
		ClickButton()
		$('.menu-btn').toggleClass("menu-btn-active");
	})

	
});
