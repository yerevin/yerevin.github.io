$(document).ready(function(){


$("#openNav" ).click(function() {
    $("#mySidenav").css('width', '250px');
    $("#main").css('margin-right', '250px');
    $("#openNav").css('display', 'none');
});
$(".closebtn").on('click', Close);
function Close() {
    $("#mySidenav").css('width', '0px');
    $("#main").css('margin-right', '0px');
    $("#openNav").css('display', 'initial');
}


   $(".home").click(function (){
                Close();
                $('html, body').animate({
                    scrollTop: $(".main-bg").offset().top
                }, 1000);
    });
   $(".profil").click(function (){
                Close();
                $('html, body').animate({
                    scrollTop: $(".about-section").offset().top
                }, 1000);
    });
    $(".history").click(function (){
                Close();
                $('html, body').animate({
                    scrollTop: $(".about-section-two").offset().top
                }, 1000);
    });
   $(".eco-products").click(function (){
                Close();
                $('html, body').animate({
                    scrollTop: $(".about-section-three").offset().top
                }, 1000);
    });
    $(".about-production").click(function (){
                Close();
                $('html, body').animate({
                    scrollTop: $(".about-section-four").offset().top
                }, 1000);
    });
    $(".shoes").click(function (){
                $('html, body').animate({
                    scrollTop: $(".shoes-section").offset().top
                }, 2000);
    });
    $(".wear").click(function (){
                $('html, body').animate({
                    scrollTop: $(".wear-section").offset().top
                }, 2000);
    });
    $(".cars").click(function (){
                $('html, body').animate({
                    scrollTop: $(".cars-section").offset().top
                }, 2000);
    });
    $(".medic").click(function (){
                $('html, body').animate({
                    scrollTop: $(".medic-section").offset().top
                }, 2000);
    });
    $(".furniture").click(function (){
                $('html, body').animate({
                    scrollTop: $(".furniture-section").offset().top
                }, 2000);
    });

    $(window).scroll(function() {
    var scrollPosition = $(window).scrollTop();

    if(scrollPosition  > 1250) {
        $('.arrow').css('display', 'initial');
    }
    else {
        $('.arrow').css('display', 'none');
    }
});


     $(".arrow").click(function (){
            $('html, body').animate({
                    scrollTop: 0
            }, 1000);
            //window.scrollTo(0,0);
    });
            setTimeout(function() {
                  $('.logo').addClass('fadeIn');
                }, 500);
            setTimeout(function() { 
                  $('.slogan-line').addClass('sloganLineAnim');
                }, 1800);
            setTimeout(function() {
                  $('.logo').attr('src','img/logo.png');
                  $('.logo').removeClass('fadeIn'); 
                  $('.logo').addClass('fadeIn-2');
                }, 2000);
         



							// init
							var controller = new ScrollMagic.Controller({
								globalSceneOptions: {
									triggerHook: 'onLeave'
								}
							});

							// get all slides
							var slides = document.querySelectorAll("section.panel");

							// create scene for every slide
							for (var i=0; i<slides.length; i++) {
								var sceneOne = new ScrollMagic.Scene({
										triggerElement: slides[i]

									})
									.setPin(slides[i])
									.addTo(controller);
							}
							  var pinIntroScene = new ScrollMagic.Scene({
							    triggerElement: '.main-bg'
							  })
							  .setPin('.main-bg')
							  .addTo(controller);




});							

