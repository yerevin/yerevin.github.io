$(document).ready(function(){



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


  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  var tabletWidth = 1024;
  var tabletSmallWidth = 800;
  var smallScreenWidth = 600;





   /*  SCROLL MAGIC FOR DESKTOP */


  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  if (windowWidth > 767) {
    var pinIntroScene = new ScrollMagic.Scene({
      triggerElement: '#main',
      triggerHook: 0,
      duration: '200%'
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
    .offset(600) 
    .addTo(controller);

    // build a scene
    var ourScene5 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.triangle-2', 'animacja-4')
    .offset(600) 
    .addTo(controller);

    // build a scene
    var ourScene6 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.second-h1', 'fadeOut')
    .offset(600) 
    .addTo(controller);

    // build a scene
    var ourScene7 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.first-h1', 'fadeOut')
    .offset(600) 
    .addTo(controller);

    // build a scene
    var ourScene8 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.rect-1', 'animacja-5')
    .offset(700) 
    .addTo(controller);

    // build a scene
    var ourScene9 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.about', 'fadeIn')
    .offset(700) 
    .addTo(controller);

     // build a scene
    var ourScene10 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.about-p', 'fadeOut-2')
    .offset(1050) 
    .addTo(controller);

     // build a scene
    var ourScene11 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.about-h2', 'fadeOut-2')
    .offset(1050) 
    .addTo(controller);

     // build a scene
    var ourScene12 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.rect-1', 'animacja-6')
    .offset(1050) 
    .addTo(controller);

    // build a scene
    var ourScene13 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.portfolio-box', 'fadeInUp')
    .offset(1055) 
    .addTo(controller);

    // build a scene
    var ourScene14 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.portfolio-box', 'fadeOut-2')
    .offset(1400) 
    .addTo(controller);

    // build a scene
    var ourScene15 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })

    .setClassToggle('.rect-1', 'animacja-7')
    .offset(1410) 
    .addTo(controller);

    // build a scene
    var ourScene16 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })

    .setClassToggle('.technology-box', 'fadeInUp')
    .offset(1410) 
    .addTo(controller);

    // build a scene
    var ourScene17 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })

    .setClassToggle('.technology-box', 'fadeOut-2')
    .offset(1750) 
    .addTo(controller);

    // build a scene
    var ourScene17 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })

    .setClassToggle('.rect-1', 'animacja-8')
    .offset(1750) 
    .addTo(controller);

    // build a scene
    var ourScene18 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })

    .setClassToggle('.scroll-down', 'off')
    .offset(1750) 
    .addTo(controller);
  }
  else {
    var pinIntroScene = new ScrollMagic.Scene({
      triggerElement: '#main',
      triggerHook: 0,
      duration: '600%'
    })
    .setPin('#main')
    .addTo(controller);
      // build a scene
    var ourScene = new ScrollMagic.Scene({
      triggerHook: 0,
      reverse: true
      
    })
    .setClassToggle('.triangle-1', 'animacja-1') 
    .offset(300)
    .addTo(controller);

    // build a scene
    var ourScene2 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.triangle-2', 'animacja-2')
    .offset(300) 
    .addTo(controller);


    // build a scene
    var ourScene3 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('h1', 'fadeInUp')
    .offset(350) 
    .addTo(controller);

    // build a scene
    var ourScene4 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.triangle-1', 'animacja-3')
    .offset(900) 
    .addTo(controller);

    // build a scene
    var ourScene5 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.triangle-2', 'animacja-4')
    .offset(900) 
    .addTo(controller);

    // build a scene
    var ourScene6 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.second-h1', 'fadeOut')
    .offset(875) 
    .addTo(controller);

    // build a scene
    var ourScene7 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.first-h1', 'fadeOut')
    .offset(875) 
    .addTo(controller);

    // build a scene
    var ourScene8 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.rect-1', 'animacja-6')
    .offset(1050) 
    .addTo(controller);

    // build a scene
    var ourScene9 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.about', 'fadeIn')
    .offset(1150) 
    .addTo(controller);

     // build a scene
    var ourScene10 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.about-p', 'fadeOut-2')
    .offset(1550) 
    .addTo(controller);

     // build a scene
    var ourScene11 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.about-h2', 'fadeOut-2')
    .offset(1550) 
    .addTo(controller);

    // build a scene
    var ourScene13 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.portfolio-box', 'fadeInUp')
    .offset(1650) 
    .addTo(controller);

    // build a scene
    var ourScene14 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })
    .setClassToggle('.portfolio-box', 'fadeOut-2')
    .offset(2700) 
    .addTo(controller);

    // build a scene
    var ourScene16 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })

    .setClassToggle('.technology-box', 'fadeInUp')
    .offset(2800) 
    .addTo(controller);

    // build a scene
    var ourScene17 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })

    .setClassToggle('.technology-box', 'fadeOut-2')
    .offset(3250) 
    .addTo(controller);

    // build a scene
    var ourScene17 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })

    .setClassToggle('.rect-1', 'animacja-8')
    .offset(3300) 
    .addTo(controller);

    // build a scene
    var ourScene18 = new ScrollMagic.Scene({
      reverse: true,
      triggerHook: 0
    })

    .setClassToggle('.scroll-down', 'off')
    .offset(300) 
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
