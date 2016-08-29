$(document).ready(function(){


  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  var tabletWidth = 1024;
  var tabletSmallWidth = 800;
  var smallScreenWidth = 600;

<<<<<<< HEAD
  $('.background-box').css('height', windowHeight*4.5+'px');
=======
  $('.background-box').css('height', 400+windowHeight*4+'px');
>>>>>>> origin/master

    $(window).on('resize', res);
    res();

function res() {
    $('.main-bg').css('height',$(window).height()+'px');
}


   /*  MENU FUNCTIONALITY */


  $('#menu').on('click', Menu);

  function Menu() {
     if($('.menu-screen').hasClass('menu-on')){
        $('.menuline-1').removeClass('menurot');
        $('.menuline-3').removeClass('menurot2');
        $('.menuline-1').addClass('menurot-rev');
        $('.menuline-2').css('opacity','1');
        $('.menuline-3').addClass('menurot2-rev');
        $('.menu-screen').removeClass('menu-on');
      }
      else {
        $('.menuline-1').removeClass('menurot-rev');
        $('.menuline-3').removeClass('menurot2-rev');
        $('.menu-screen').addClass('menu-on');
        $('.menuline-1').addClass('menurot');
        $('.menuline-2').css('opacity','0');
        $('.menuline-3').addClass('menurot2');
      }
  };


     /*  ANCHOR SCROLLING */



   $(".home").click(function (){
                Menu();
                $('html, body').animate({
                    scrollTop: $("#top").offset().top
                }, 0);
    });
   $(".about-me").click(function (){
                Menu();
                $('html, body').animate({
                    scrollTop: $(".about").offset().top-200
                }, 0);
    });
    $(".portfolio").click(function (){
                Menu();
                $('html, body').animate({
                    scrollTop: $(".portfolio-box").offset().top
                }, 0);
    });
   $(".kontakt").click(function (){
                Menu();
                $('html, body').animate({
                    scrollTop: $(".contact").offset().top
                }, 2000);
    });







   /*  SCROLL MAGIC FOR DESKTOP */


  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  if (windowWidth > 767) {
    var pinIntroScene = new ScrollMagic.Scene({
      triggerElement: '#main',
      triggerHook: 0,
      duration: '500%'
    })
    .setPin('#main')
    .addTo(controller);
      // build a scene
    var ourScene = new ScrollMagic.Scene({
      triggerHook: 0,
      reverse: true
      
    })
    .setClassToggle('.triangle-1', 'animacja-1') 
    .offset(100)
    .addTo(controller);

    // build a scene
    var ourScene2 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.triangle-2', 'animacja-2')
    .offset(100) 
    .addTo(controller);


    // build a scene
    var ourScene3 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('h1', 'fadeInUp')
    .offset(125) 
    .addTo(controller);

    // build a scene
    var ourScene4 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.triangle-1', 'animacja-3')
    .offset(100+windowHeight) 
    .addTo(controller);

    // build a scene
    var ourScene5 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.triangle-2', 'animacja-4')
    .offset(100+windowHeight) 
    .addTo(controller);

    // build a scene
    var ourScene6 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.second-h1', 'fadeOut')
    .offset(100+windowHeight) 
    .addTo(controller);

    // build a scene
    var ourScene7 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.first-h1', 'fadeOut')
    .offset(100+windowHeight) 
    .addTo(controller);

    // build a scene
    var ourScene8 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.background-box', 'animacja-5')
    .offset(200+windowHeight) 
    .addTo(controller);

    // build a scene
    var ourScene9 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.about', 'fadeIn')
    .offset(200+windowHeight) 
    .addTo(controller);

     // build a scene
    var ourScene10 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.about-p', 'fadeOut-2')
    .offset(200+windowHeight+windowHeight) 
    .addTo(controller);

     // build a scene
    var ourScene11 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.about-h2', 'fadeOut-2')
    .offset(200+windowHeight+windowHeight) 
    .addTo(controller);

     // build a scene
    var ourScene12 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.background-box', 'animacja-6')
    .offset(250+windowHeight+windowHeight) 
    .addTo(controller);

    // build a scene
    var ourScene13 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.portfolio-box', 'fadeInUp')
    .offset(255+windowHeight+windowHeight) 
    .addTo(controller);

    // build a scene
    var ourScene14 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.portfolio-box', 'fadeOut-2')
    .offset(255+windowHeight+windowHeight+windowHeight) 
    .addTo(controller);

    // build a scene
    var ourScene15 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })

    .setClassToggle('.background-box', 'animacja-7')
    .offset(260+windowHeight+windowHeight+windowHeight) 
    .addTo(controller);

    // build a scene
    var ourScene16 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })

    .setClassToggle('.technology-box', 'fadeInUp')
    .offset(265+windowHeight+windowHeight+windowHeight) 
    .addTo(controller);

    // build a scene
    var ourScene17 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })

    .setClassToggle('.technology-box', 'fadeOut-2')
    .offset(265+windowHeight+windowHeight+windowHeight+windowHeight) 
    .addTo(controller);

    // build a scene
    var ourScene17 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })

    .setClassToggle('.background-box', 'animacja-8')
    .offset(270+windowHeight+windowHeight+windowHeight+windowHeight) 
    .addTo(controller);

    // build a scene
    var ourScene18 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })

    .setClassToggle('.scroll-down', 'off')
    .offset(175) 
    .addTo(controller);
  }
  else {
    var pinIntroScene = new ScrollMagic.Scene({
      triggerElement: '#main',
      triggerHook: 0,
      duration: '500%'
    })
    .setPin('#main')
    .addTo(controller);
      // build a scene
    var ourScene = new ScrollMagic.Scene({
      triggerHook: 0,
      reverse: true
      
    })
    .setClassToggle('.triangle-1', 'fadeIn') 
    .offset(240)
    .addTo(controller);

    // build a scene
    var ourScene2 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.triangle-2', 'fadeIn')
    .offset(240) 
    .addTo(controller);


    // build a scene
    var ourScene3 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('h1', 'fadeInUp')
    .offset(250) 
    .addTo(controller);

    // build a scene
    var ourScene4 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.triangle-1', 'fadeOut')
    .offset(250+windowHeight) 
    .addTo(controller);

    // build a scene
    var ourScene5 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.triangle-2', 'fadeOut')
    .offset(250+windowHeight) 
    .addTo(controller);

    // build a scene
    var ourScene6 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.second-h1', 'fadeOut')
    .offset(250+windowHeight) 
    .addTo(controller);

    // build a scene
    var ourScene7 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.first-h1', 'fadeOut')
    .offset(250+windowHeight) 
    .addTo(controller);

    // build a scene
    var ourScene8 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.background-box', 'animacja-6')
    .offset(300+windowHeight) 
    .addTo(controller);

    // build a scene
    var ourScene9 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.about', 'fadeIn')
    .offset(350+windowHeight) 
    .addTo(controller);

     // build a scene
    var ourScene10 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.about-p', 'fadeOut-2')
    .offset(350+windowHeight+windowHeight) 
    .addTo(controller);

     // build a scene
    var ourScene11 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.about-h2', 'fadeOut-2')
    .offset(350+windowHeight+windowHeight) 
    .addTo(controller);

    // build a scene
    var ourScene13 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.portfolio-box', 'fadeInUp')
    .offset(365+windowHeight+windowHeight) 
    .addTo(controller);

    // build a scene
    var ourScene14 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.portfolio-box', 'fadeOut-2')
    .offset(850+windowHeight+windowHeight+windowHeight) 
    .addTo(controller);

    // build a scene
    var ourScene16 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })

    .setClassToggle('.technology-box', 'fadeInUp')
    .offset(850+windowHeight+windowHeight+windowHeight) 
    .addTo(controller);

    // build a scene
    var ourScene17 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })

    .setClassToggle('.technology-box', 'fadeOut-2')
    .offset(850+windowHeight+windowHeight+windowHeight+windowHeight) 
    .addTo(controller);

    // build a scene
    var ourScene17 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })

    .setClassToggle('.background-box', 'animacja-8')
    .offset(865+windowHeight+windowHeight+windowHeight+windowHeight) 
    .addTo(controller);

    // build a scene
    var ourScene18 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })

    .setClassToggle('.scroll-down', 'off')
    .offset(200) 
    .addTo(controller);
  }



  // pin again
  var pinIntroScene2 = new ScrollMagic.Scene({
    triggerElement: '.contact',
    triggerHook: 0.9999999999999,
  })
  .setPin('#main')
  .addTo(controller);





});
