
// home typing

var index = 0;

function typingWelcome(){
  const content = "welcome tomy portfolio";
  const text1 = document.querySelector("#welcome h1:first-child");
  const text2 = document.querySelector("#welcome h1:last-child");

  if(index < 10){
    text1.textContent += content[index++];
  }else if(index >=10, index <= content.length -1){
    text2.textContent += content[index++];
  }else if(index > content.length -1){
    clearInterval(welcomeTimer);
    $("#next").addClass("on");
    $("#player").addClass("on");
    index = 0;
  }
}

function typingPlayer(){
  const contentP = "park ji su";
  const textP = document.querySelector("#player span");

  textP.textContent += contentP[index++];
  if(index > contentP.length -1){
      clearInterval(playerTimer);
      index = 0;
  }
}

function typingStart(){
  const contentS = "start!";
  const textS = document.querySelector("#start");

  textS.textContent += contentS[index++];
  if(index > contentS.length -1){
      clearInterval(startTimer);
      index = 0;
  }
}

var indexW = 0;

function typingWeb(){
  const contentW = "webworks";
  const textW1 = document.querySelector("#web h1:nth-child(1)");
  const textW2 = document.querySelector("#web h1:nth-child(2)");
  if(indexW < 3){
    textW1.textContent += contentW[indexW++];
  }else if(indexW >=3, indexW <= contentW.length -1){
    textW2.textContent += contentW[indexW++];
  }else if(indexW > contentW.length -1){
    clearInterval(webTimer);
  }
}

var indexG = 0;

function typingGraphic(){
  const contentG = "graphicworks";
  const textG1 = document.querySelector("#graphic h1:nth-child(1)");
  const textG2 = document.querySelector("#graphic h1:nth-child(2)");
  if(indexG < 7){
    textG1.textContent += contentG[indexG++];
  }else if(indexG >=7, indexG <= contentG.length -1){
    textG2.textContent += contentG[indexG++];
  }else if(indexG > contentG.length -1){
    clearInterval(graphicTimer);
  }
}

setTimeout(function(){welcomeTimer = setInterval(typingWelcome,200);},1700);

setTimeout(function(){playerTimer = setInterval(typingPlayer,200);},10000);

setTimeout(function(){startTimer = setInterval(typingStart,200);},13000);

var webTimer = 0;
var graphicTimer = 0;

$(window).scroll(function(){
  if($(this).scrollTop() >= ($("#graphic").offset().top - $(this).outerHeight()* 0.7)){
    if(graphicTimer == 0)
    {graphicTimer = setInterval(typingGraphic,200);}
  }else if($(this).scrollTop() >= ($("#web").offset().top - $(this).outerHeight()* 0.7)){
    if(webTimer == 0){webTimer = setInterval(typingWeb,200);}
  }else return;
});

$(function(){

  // wave

  const wave1 = "M0,128L48,160C96,192,192,256,288,256C384,256,480,192,576,186.7C672,181,768,235,864,229.3C960,224,1056,160,1152,149.3C1248,139,1344,181,1392,202.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
      wave2 = "M0,160L48,170.7C96,181,192,203,288,186.7C384,171,480,117,576,128C672,139,768,213,864,218.7C960,224,1056,160,1152,154.7C1248,149,1344,203,1392,229.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z";

anime({
  targets: '#top_wave > path',
  easing: 'cubicBezier(.5, .05, .1, .3)',
  duration: 7500,
  loop: true,
  d: [
    { value:wave2},
    { value:wave1},
  ],
});

anime({
  targets: '#bottom_wave > path',
  easing: 'cubicBezier(.5, .05, .1, .3)',
  duration: 7500,
  loop: true,
  d: [
    { value:wave2},
    { value:wave1},
  ],
});

  // scroll magic

  var controller = new ScrollMagic.Controller();

  var tweenEng = TweenMax.to('.hello_eng span', 0.5, {
    opacity : 1,
    y : 0,
  });

  var tweenEngHide = TweenMax.to('.hello_eng span', 0.5, {
    opacity : 0,
    y : -50,
  });

  var tweenKor = TweenMax.to('.hello_kor span', 0.5, {
    opacity : 1,
    y : 0,
  });

  var tweenNav = TweenMax.to('#nav', 0.5, {
    x : 0
  });

  var tweenThank = TweenMax.to('#thank span', 0.5, {
    opacity : 1,
    y : 0,
  });
    
  // hello_eng show
  new ScrollMagic.Scene({
    triggerElement: "#hello",
    triggerHook: 0.8,
  })
  .setTween(tweenEng)
  .addTo(controller);
    
  // hello_eng hide
  new ScrollMagic.Scene({
    triggerElement: "#hello",
    triggerHook: 0.35,
  })
  .setTween(tweenEngHide)
  .addTo(controller);
  
  // hello_kor show
  new ScrollMagic.Scene({
    triggerElement: "#hello",
    triggerHook: 0.33,
  })
  .setTween(tweenKor)
  .addTo(controller);

  // about show
  new ScrollMagic.Scene({
    triggerElement: "#about",
    triggerHook: 0.1,
  })
  .setClassToggle("#about", "on")
  .addTo(controller);

  // navigation show
  new ScrollMagic.Scene({
    triggerElement: "#top_wave",
    triggerHook: 0.15,
  })
  .setTween(tweenNav)
  .addTo(controller);

  // thank
  new ScrollMagic.Scene({
    triggerElement: "#contact",
    triggerHook: 0.5,
  })
  .setTween(tweenThank)
  .addTo(controller);

  $("#home_bx").animate({width:"90%"},1500);

  $("#nav li").click(function(){
    var navIndex = $("#nav li").index(this);
    $("html").animate({scrollTop:$("section").eq(navIndex+1).offset().top+"px"});
  });

  $(".graphic_wrapper").slick({
     dots: true,
    infinite: true,
    arrows : false,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  })

  $("#web .img_bx").hover(
    function(){
      if($(this).children("img").is(":animated")) return;
      $(this).children("img").animate({top:($(this).children("img").outerHeight()-$(this).height())*-1},$(this).children("img").outerHeight()*0.8);
    },
    function(){
      if($(this).children("img").is(":animated")){$(this).children("img").stop()}
      $(this).children("img").animate({top:0});
      
    }
  )

  $(".more").click(function(){
    var graphic_index = $(this).parent().data("slick-index");
    $("#graphic_more").animate({scrollTop:0});
    $("#graphic_more").find("img").css({display:"none"});
    $("#graphic_more").find("img").eq(graphic_index).css({display:"block"});
    $("#graphic_more").fadeIn(function(){
      $("#graphic_more").animate({scrollTop:0});
    });
  });

  $("#graphic_more .close").click(function(){
    $("#graphic_more").fadeOut();
  });

  $(".slick-dots").addClass("clear");

  $("input").keyup(function () {
    if ($(this).val()) {
        $(this).addClass("fill_text");
    } else {
        $(this).removeClass("fill_text");
    }
  });

  $("textarea").keyup(function () {
    if ($(this).val()) {
        $(this).addClass("fill_text");
    } else {
        $(this).removeClass("fill_text");
    }
  });

  $("#submit").click(function(){
    if($("#name").val() && $("#email").val() && $("#subject").val() && $("#message").val()){
      $(".thankyou_message").css({display:"block"});
      $("#loading").css({display:"block"});
    }else{alert("양식을 모두 작성해 주세요.")}
  });

  $(".thankyou_message .close").click(function(){
    $("input").removeClass("fill_text").empty();
    $("#message").removeClass("fill_text").empty();
    $(".thankyou_message").css({display:"none"});
    $(".thankyou_text").css({opacity:0});
    $(".thankyou_message .close").css({opacity:0});
    $("label").css({transform:"translateY(0)"});
  });

  $("#top").click(function(){
    $("html").animate({scrollTop:0},"slow");
  });
});

