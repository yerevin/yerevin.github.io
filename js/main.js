$(document).ready(function(){function e(){$(".menu-screen").hasClass("menu-on")?($(".menuline-1").removeClass("menurot"),$(".menuline-3").removeClass("menurot2"),$(".menuline-1").addClass("menurot-rev"),$(".menuline-2").css("opacity","1"),$(".menuline-3").addClass("menurot2-rev"),$(".menu-screen").removeClass("menu-on"),$(".menu-screen").addClass("menu-off")):($(".menu-screen").removeClass("menu-off"),$(".menuline-1").removeClass("menurot-rev"),$(".menuline-3").removeClass("menurot2-rev"),$(".menu-screen").addClass("menu-on"),$(".menuline-1").addClass("menurot"),$(".menuline-2").css("opacity","0"),$(".menuline-3").addClass("menurot2"))}$("#loader").removeClass("loading"),$("html, body").css("overflow","visible"),$("html, body").css("overflow-x","hidden"),$("html, body").css("overflow-y","auto"),$(".status").css("display","none");var o=window.innerHeight,l=window.innerWidth;$(".background-box").css("height",5*o+"px"),$("nav").on("click",e),$(".home").click(function(){e(),$("html, body").animate({scrollTop:$("#top").offset().top},0)}),$(".kontakt").click(function(){e(),$("html, body").animate({scrollTop:$(".contact").offset().top},0)}),$(".about-contact").click(function(){$("html, body").animate({scrollTop:$(".contact").offset().top},0)});var a=new ScrollMagic.Controller({globalSceneOptions:{reverse:!0,triggerHook:0}});if(l>767){$(".about-me").click(function(){e(),$("html, body").animate({scrollTop:$("#top").scrollTop()+o},0)}),$(".portfolio").click(function(){e(),$("html, body").animate({scrollTop:$("#top").scrollTop()+o+o},0)}),$(".about-projects").click(function(){$("html, body").animate({scrollTop:$("#top").scrollTop()+o+o},0)});new ScrollMagic.Scene({triggerElement:"main",duration:"550%"}).setPin("main").addTo(a),(new ScrollMagic.Scene).setClassToggle(".triangle-1","animacja-1").offset(0).addTo(a),(new ScrollMagic.Scene).setClassToggle(".triangle-2","animacja-2").offset(0).addTo(a),(new ScrollMagic.Scene).setClassToggle("h1","fadeInUp").offset(0).addTo(a),(new ScrollMagic.Scene).setClassToggle(".triangle-1","animacja-3").offset(o).addTo(a),(new ScrollMagic.Scene).setClassToggle(".triangle-2","animacja-4").offset(o).addTo(a),(new ScrollMagic.Scene).setClassToggle("h1","fadeOut").offset(o).addTo(a),(new ScrollMagic.Scene).setClassToggle(".background-box","animacja-5").offset(o).addTo(a),(new ScrollMagic.Scene).setClassToggle(".about","fadeIn").offset(o).addTo(a),(new ScrollMagic.Scene).setClassToggle(".about>h2","fadeOut-2").offset(o+o).addTo(a),(new ScrollMagic.Scene).setClassToggle(".about>p","fadeOut-2").offset(o+o).addTo(a),(new ScrollMagic.Scene).setClassToggle(".background-box","animacja-6").offset(o+o).addTo(a),(new ScrollMagic.Scene).setClassToggle(".portfolio-box","fadeInUp").offset(o+o).addTo(a),(new ScrollMagic.Scene).setClassToggle(".portfolio-box","fadeOut-2").offset(o+o+o).addTo(a),(new ScrollMagic.Scene).setClassToggle(".background-box","animacja-7").offset(o+o+o).addTo(a),(new ScrollMagic.Scene).setClassToggle(".technology-box","fadeInUp").offset(o+o+o).addTo(a),(new ScrollMagic.Scene).setClassToggle(".technology-box","fadeOut-2").offset(o+o+o+o).addTo(a),(new ScrollMagic.Scene).setClassToggle(".background-box","animacja-8").offset(o+o+o+o).addTo(a),(new ScrollMagic.Scene).setClassToggle(".scroll-down","off").offset(175).addTo(a)}else{$(".about-me").click(function(){e(),$("html, body").animate({scrollTop:$("#top").scrollTop()+o},0)}),$(".portfolio").click(function(){e(),$("html, body").animate({scrollTop:$("#top").scrollTop()+o+o+o},0)}),$(".about-projects").click(function(){$("html, body").animate({scrollTop:$("#top").scrollTop()+o+o+o},0)});new ScrollMagic.Scene({triggerElement:"main",triggerHook:0,duration:"600%"}).setPin("main").addTo(a),(new ScrollMagic.Scene).setClassToggle("h1","fadeInUp").offset(0).addTo(a),(new ScrollMagic.Scene).setClassToggle("h1","fadeOut").offset(o).addTo(a),(new ScrollMagic.Scene).setClassToggle(".background-box","fadeIn").offset(o).addTo(a),(new ScrollMagic.Scene).setClassToggle(".about","fadeIn").offset(o).addTo(a),(new ScrollMagic.Scene).setClassToggle(".about>p","fadeOut-2").offset(o+o+o).addTo(a),(new ScrollMagic.Scene).setClassToggle(".about>h2","fadeOut-2").offset(o+o+o).addTo(a),(new ScrollMagic.Scene).setClassToggle(".portfolio-box","fadeInUp").offset(o+o+o).addTo(a),(new ScrollMagic.Scene).setClassToggle(".portfolio-box","fadeOut-2").offset(o+o+o+o).addTo(a),(new ScrollMagic.Scene).setClassToggle(".technology-box","fadeInUp").offset(o+o+o+o).addTo(a),(new ScrollMagic.Scene).setClassToggle(".technology-box","fadeOut-2").offset(o+o+o+o+o).addTo(a),(new ScrollMagic.Scene).setClassToggle(".background-box","bg-box-off").offset(o+o+o+o+o).addTo(a),(new ScrollMagic.Scene).setClassToggle(".scroll-down","off").offset(200).addTo(a)}new ScrollMagic.Scene({triggerElement:".contact"}).setPin("main").addTo(a).triggerHook("0.9999999999999")});
