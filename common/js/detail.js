$(document).ready(function(){function o(){if(navigator.userAgent.indexOf("iPad")>0||navigator.userAgent.indexOf("Android")>0&&-1==navigator.userAgent.indexOf("Mobile")||navigator.userAgent.indexOf("A1_07")>0||navigator.userAgent.indexOf("SC-01C")>0)var o=1100;else var o=document.body.scrollWidth||document.documentElement.scrollWidth;o>768?e.scrollTop()>i?t():n():a()}function t(){$("#globalHeader").css({background:"rgba(255, 255, 255, 0.9)",height:"50px",position:"fixed"}),$("#logo").stop().animate({top:"20px"},200),$("#logo,#logo a").css({color:"#000"}),$("#gnavi").css({display:"block"}),$("#gnavi ul").stop().animate({top:"20px"},200),$("#gnavi ul").addClass("sc"),$("#gnavi ul li a").css({color:"#000"}),$("#gnavi ul li#nowpage a").css({color:"#ffd700"}),scflg=1}function n(){$("#globalHeader").css({backgroundColor:"rgba(255, 255, 255, 0)",height:"60px",position:"fixed"}),$("#logo").stop().animate({top:"40px"},200),$("#logo,#logo a").css({color:"#fff"}),$("#gnavi").css({display:"block"}),$("#gnavi ul").stop().animate({top:"40px"},200),$("#gnavi ul").removeClass("sc"),$("#gnavi ul li a").css({color:"#fff"}),$("#gnavi ul li#nowpage a").css({color:"#ffd700"}),scflg=0}function a(){$("#globalHeader").css({backgroundColor:"rgba(255, 255, 255, 0.9)",height:"50px"}),$("#globalHeader").css({position:"fixed"}),$("#logo,#logo a").stop().animate({top:"20px"},200).css({"text-align":"center"}),$("#logo a").css({color:"#000"}),$("#gnavi").css({display:"none"}),$("#gnavi ul").stop().animate({top:"40px"},200),$("#gnavi ul").removeClass("sc"),$("#gnavi ul li a").css({color:"#fff"}),scflg=0}{var e=$(window),i=($("#body"),60);window.navigator.userAgent.toLowerCase()}tbView="width=1100px,user-scalable=no",(navigator.userAgent.indexOf("iPad")>0||navigator.userAgent.indexOf("Android")>0&&-1==navigator.userAgent.indexOf("Mobile")||navigator.userAgent.indexOf("A1_07")>0||navigator.userAgent.indexOf("SC-01C")>0)&&$("head").prepend('<meta name="viewport" content="'+tbView+'" id="viewport">'),o(),e.on("scroll",function(){o()}),$(window).resize(function(){o()}),$("#menuButton").click(function(){document.body.scrollWidth||document.documentElement.scrollWidth,document.body.scrollHeight||document.documentElement.scrollHeight;$(this).toggleClass("active"),$(this).hasClass("active")?($("#gnavi").css({display:"block"}),$("#spBg").css({display:"block"})):($("#gnavi").css({display:"none"}),$("#spBg").css({display:"none"}))}),$("#icon_hat").jrumble({x:1,y:1,speed:120}),$("#icon_hat").trigger("startRumble");var s=0;$("#icon_hat").on("click touchstart",function(){0==s&&($("#icon_twitter").stop().animate({top:"-4px",left:"12px",opacity:"1"},200).animate({top:"2px",left:"12px",opacity:"1"},200).animate({top:"-3px",left:"16px",opacity:"1"},200).animate({top:"0px",left:"16px",opacity:"1"},200),$("#icon_hat").trigger("stopRumble"),s=1)});var l=$("#pagetop");$(window).scroll(function(){$(this).scrollTop()>100?l.fadeIn():l.fadeOut()}),l.click(function(){return $("body, html").animate({scrollTop:0},500),!1})});






