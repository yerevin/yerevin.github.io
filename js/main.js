$(document).ready(function(){function e(){$(".main-bg").css("height",$(window).height()+"px")}function o(){$(".menu-screen").hasClass("menu-on")?($(".menuline-1").removeClass("menurot"),$(".menuline-3").removeClass("menurot2"),$(".menuline-1").addClass("menurot-rev"),$(".menuline-2").css("opacity","1"),$(".menuline-3").addClass("menurot2-rev"),$(".menu-screen").removeClass("menu-on"),$(".menu-screen").addClass("menu-off")):($(".menu-screen").removeClass("menu-off"),$(".menuline-1").removeClass("menurot-rev"),$(".menuline-3").removeClass("menurot2-rev"),$(".menu-screen").addClass("menu-on"),$(".menuline-1").addClass("menurot"),$(".menuline-2").css("opacity","0"),$(".menuline-3").addClass("menurot2"))}$("#loader").removeClass("loading"),$("html, body").css("overflow","visible"),$("html, body").css("overflow-x","hidden"),$("html, body").css("overflow-y","auto"),$(".status").css("display","none");var a=window.innerHeight,l=window.innerWidth;$(".background-box").css("height",5*a+"px"),$(window).on("resize",e),e(),$("nav").on("click",o),$(".home").click(function(){o(),$("html, body").animate({scrollTop:$("#top").offset().top},0)}),$(".about-me").click(function(){o(),$("html, body").animate({scrollTop:$(".about").offset().top-200},0)}),$(".portfolio").click(function(){o(),$("html, body").animate({scrollTop:$(".portfolio-box").offset().top},0)}),$(".kontakt").click(function(){o(),$("html, body").animate({scrollTop:$(".contact").offset().top},2e3)});var n=new ScrollMagic.Controller({globalSceneOptions:{reverse:!0,triggerHook:0}});if(l>767){new ScrollMagic.Scene({triggerElement:"main",duration:"500%"}).setPin("main").addTo(n),(new ScrollMagic.Scene).setClassToggle(".triangle-1","animacja-1").offset(100).addIndicators({name:"1 scene",colorTrigger:"black",colorStart:"#75C695",colorEnd:"pink"}).addTo(n),(new ScrollMagic.Scene).setClassToggle(".triangle-2","animacja-2").offset(100).addTo(n),(new ScrollMagic.Scene).setClassToggle("h1","fadeInUp").offset(125).addTo(n),(new ScrollMagic.Scene).setClassToggle(".triangle-1","animacja-3").offset(100+a).addTo(n),(new ScrollMagic.Scene).setClassToggle(".triangle-2","animacja-4").offset(100+a).addTo(n),(new ScrollMagic.Scene).setClassToggle("h1","fadeOut").offset(100+a).addTo(n),(new ScrollMagic.Scene).setClassToggle(".background-box","animacja-5").offset(200+a).addTo(n),(new ScrollMagic.Scene).setClassToggle(".about","fadeIn").offset(200+a).addTo(n),(new ScrollMagic.Scene).setClassToggle(".about-p","fadeOut-2").offset(200+a+a).addTo(n),(new ScrollMagic.Scene).setClassToggle(".about-h2","fadeOut-2").offset(200+a+a).addTo(n),(new ScrollMagic.Scene).setClassToggle(".background-box","animacja-6").offset(250+a+a).addTo(n),(new ScrollMagic.Scene).setClassToggle(".portfolio-box","fadeInUp").offset(255+a+a).addTo(n),(new ScrollMagic.Scene).setClassToggle(".portfolio-box","fadeOut-2").offset(400+a+a+a).addTo(n),(new ScrollMagic.Scene).setClassToggle(".background-box","animacja-7").offset(405+a+a+a).addTo(n),(new ScrollMagic.Scene).setClassToggle(".technology-box","fadeInUp").offset(410+a+a+a).addTo(n),(new ScrollMagic.Scene).setClassToggle(".technology-box","fadeOut-2").offset(415+a+a+a+a).addTo(n),(new ScrollMagic.Scene).setClassToggle(".background-box","animacja-8").offset(420+a+a+a+a).addTo(n),(new ScrollMagic.Scene).setClassToggle(".scroll-down","off").offset(175).addTo(n)}else{new ScrollMagic.Scene({triggerElement:"main",triggerHook:0,duration:"500%"}).setPin("main").addTo(n),(new ScrollMagic.Scene).setClassToggle("h1","fadeInUp").offset(250).addTo(n),(new ScrollMagic.Scene).setClassToggle("h1","fadeOut").offset(250+a).addTo(n),(new ScrollMagic.Scene).setClassToggle(".background-box","bg-box-on").offset(300+a).addTo(n),(new ScrollMagic.Scene).setClassToggle(".about","fadeIn").offset(350+a).addTo(n),(new ScrollMagic.Scene).setClassToggle(".about-p","fadeOut-2").offset(350+a+a).addTo(n),(new ScrollMagic.Scene).setClassToggle(".about-h2","fadeOut-2").offset(350+a+a).addTo(n),(new ScrollMagic.Scene).setClassToggle(".portfolio-box","fadeInUp").offset(365+a+a).addTo(n),(new ScrollMagic.Scene).setClassToggle(".portfolio-box","fadeOut-2").offset(850+a+a+a).addTo(n),(new ScrollMagic.Scene).setClassToggle(".technology-box","fadeInUp").offset(850+a+a+a).addTo(n),(new ScrollMagic.Scene).setClassToggle(".technology-box","fadeOut-2").offset(850+a+a+a+a).addTo(n),(new ScrollMagic.Scene).setClassToggle(".background-box","bg-box-off").offset(865+a+a+a+a).addTo(n),(new ScrollMagic.Scene).setClassToggle(".scroll-down","off").offset(200).addTo(n)}new ScrollMagic.Scene({triggerElement:".contact"}).setPin("main").addTo(n).triggerHook("0.9999999999999")});
