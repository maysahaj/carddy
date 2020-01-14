$(document).ready(function(){
    var scrollTop =0;
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
        if (scrollTop > 100){
            $('.navbar').addClass ('scrollNavbar');
            $('.backTop').addClass ('visible');
            var color = document.getElementById('nav-link');
            var logo= document.getElementById('logo');
            logo.src="assets/img/logo-scrol.png";
            var down = document.getElementById('down');
            $('.down').getElementById('down');
            
               
			
        }else if (scrollTop < 100){
            $('.navbar').removeClass('scrollNavbar');
            $('.backTop').removeClass ('visible');
            var logo= document.getElementById('logo');
            logo.src="assets/img/logo.png";
        };
    });
	$('.backTop').click (function(){
		$('body , html').animate({
			scrollTop:0
		},800);
	});
});