$(document).ready(function(){function e(){$(".main-bg").css("height",$(window).height()+"px")}function o(){$(".menu-screen").hasClass("menu-on")?($(".menuline-1").removeClass("menurot"),$(".menuline-3").removeClass("menurot2"),$(".menuline-1").addClass("menurot-rev"),$(".menuline-2").css("opacity","1"),$(".menuline-3").addClass("menurot2-rev"),$(".menu-screen").removeClass("menu-on")):($(".menuline-1").removeClass("menurot-rev"),$(".menuline-3").removeClass("menurot2-rev"),$(".menu-screen").addClass("menu-on"),$(".menuline-1").addClass("menurot"),$(".menuline-2").css("opacity","0"),$(".menuline-3").addClass("menurot2"))}var r=window.innerHeight,a=window.innerWidth;$(".background-box").css("height",4.5*r+"px"),$(window).on("resize",e),e(),$("#menu").on("click",o),$(".home").click(function(){o(),$("html, body").animate({scrollTop:$("#top").offset().top},0)}),$(".about-me").click(function(){o(),$("html, body").animate({scrollTop:$(".about").offset().top-200},0)}),$(".portfolio").click(function(){o(),$("html, body").animate({scrollTop:$(".portfolio-box").offset().top},0)}),$(".kontakt").click(function(){o(),$("html, body").animate({scrollTop:$(".contact").offset().top},2e3)});var s=new ScrollMagic.Controller;if(a>767){new ScrollMagic.Scene({triggerElement:"#main",triggerHook:0,duration:"500%"}).setPin("#main").addTo(s),new ScrollMagic.Scene({triggerHook:0,reverse:!0}).setClassToggle(".triangle-1","animacja-1").offset(100).addTo(s),new ScrollMagic.Scene({reverse:!0,triggerHook:0}).setClassToggle(".triangle-2","animacja-2").offset(100).addTo(s),new ScrollMagic.Scene({reverse:!0,triggerHook:0}).setClassToggle("h1","fadeInUp").offset(125).addTo(s),new ScrollMagic.Scene({reverse:!0,triggerHook:0}).setClassToggle(".triangle-1","animacja-3").offset(100+r).addTo(s),new ScrollMagic.Scene({reverse:!0,triggerHook:0}).setClassToggle(".triangle-2","animacja-4").offset(100+r).addTo(s),new ScrollMagic.Scene({reverse:!0,triggerHook:0}).setClassToggle(".second-h1","fadeOut").offset(100+r).addTo(s),new ScrollMagic.Scene({reverse:!0,triggerHook:0}).setClassToggle(".first-h1","fadeOut").offset(100+r).addTo(s),new ScrollMagic.Scene({reverse:!0,triggerHook:0}).setClassToggle(".background-box","animacja-5").offset(200+r).addTo(s),new ScrollMagic.Scene({reverse:!0,triggerHook:0}).setClassToggle(".about","fadeIn").offset(200+r).addTo(s),new ScrollMagic.Scene({reverse:!0,triggerHook:0}).setClassToggle(".about-p","fadeOut-2").offset(200+r+r).addTo(s),new ScrollMagic.Scene({reverse:!0,triggerHook:0}).setClassToggle(".about-h2","fadeOut-2").offset(200+r+r).addTo(s),new ScrollMagic.Scene({reverse:!0,triggerHook:0}).setClassToggle(".background-box","animacja-6").offset(250+r+r).addTo(s),new ScrollMagic.Scene({reverse:!0,triggerHook:0}).setClassToggle(".portfolio-box","fadeInUp").offset(255+r+r).addTo(s),new ScrollMagic.Scene({reverse:!0,triggerHook:0}).setClassToggle(".portfolio-box","fadeOut-2").offset(400+r+r+r).addTo(s),new ScrollMagic.Scene({reverse:!0,triggerHook:0}).setClassToggle(".background-box","animacja-7").offset(405+r+r+r).addTo(s),new ScrollMagic.Scene({reverse:!0,triggerHook:0}).setClassToggle(".technology-box","fadeInUp").offset(410+r+r+r).addTo(s),new ScrollMagic.Scene({reverse:!0,triggerHook:0}).setClassToggle(".technology-box","fadeOut-2").offset(415+r+r+r+r).addTo(s),new ScrollMagic.Scene({reverse:!0,triggerHook:0}).setClassToggle(".background-box","animacja-8").offset(420+r+r+r+r).addTo(s),new ScrollMagic.Scene({reverse:!0,triggerHook:0}).setClassToggle(".scroll-down","off").offset(175).addTo(s)}else{new ScrollMagic.Scene({triggerElement:"#main",triggerHook:0,duration:"500%"}).setPin("#main").addTo(s),new ScrollMagic.Scene({reverse:!0,triggerHook:0}).setClassToggle("h1","fadeInUp").offset(250).addTo(s),new ScrollMagic.Scene({reverse:!0,triggerHook:0}).setClassToggle(".second-h1","fadeOut").offset(250+r).addTo(s),new ScrollMagic.Scene({reverse:!0,triggerHook:0}).setClassToggle(".first-h1","fadeOut").offset(250+r).addTo(s),new ScrollMagic.Scene({reverse:!0,triggerHook:0}).setClassToggle(".background-box","animacja-6").offset(300+r).addTo(s),new ScrollMagic.Scene({reverse:!0,triggerHook:0}).setClassToggle(".about","fadeIn").offset(350+r).addTo(s),new ScrollMagic.Scene({reverse:!0,triggerHook:0}).setClassToggle(".about-p","fadeOut-2").offset(350+r+r).addTo(s),new ScrollMagic.Scene({reverse:!0,triggerHook:0}).setClassToggle(".about-h2","fadeOut-2").offset(350+r+r).addTo(s),new ScrollMagic.Scene({reverse:!0,triggerHook:0}).setClassToggle(".portfolio-box","fadeInUp").offset(365+r+r).addTo(s),new ScrollMagic.Scene({reverse:!0,triggerHook:0}).setClassToggle(".portfolio-box","fadeOut-2").offset(850+r+r+r).addTo(s),new ScrollMagic.Scene({reverse:!0,triggerHook:0}).setClassToggle(".technology-box","fadeInUp").offset(850+r+r+r).addTo(s),new ScrollMagic.Scene({reverse:!0,triggerHook:0}).setClassToggle(".technology-box","fadeOut-2").offset(850+r+r+r+r).addTo(s),new ScrollMagic.Scene({reverse:!0,triggerHook:0}).setClassToggle(".background-box","animacja-8").offset(865+r+r+r+r).addTo(s),new ScrollMagic.Scene({reverse:!0,triggerHook:0}).setClassToggle(".scroll-down","off").offset(200).addTo(s)}new ScrollMagic.Scene({triggerElement:".contact",triggerHook:.9999999999999}).setPin("#main").addTo(s)});
