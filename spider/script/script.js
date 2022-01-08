$(function(){
    // bullets
    var videoBx = $("#video_bx");
    var bullets = $("#bullets");
    for(i=0; i<videoBx.find("iframe").length; i++){
        $("<li></li>").append($("<a></a>").attr("href","#")).appendTo(bullets);
    }
    bullets.children(":first").addClass("on");

    var bulletList = $("#bullets li");

    bulletList.click(function(){
        var bulletIndex = bulletList.index(this);
        alert("Please Pause The Video!");
        bulletList.removeClass("on");
        $(this).addClass("on");
        $("#video_bx ul").animate({left:(-960*bulletIndex)+"px"},"slow");
    });


    $("#actor").find("ul").find("a").click(function(event){
        event.preventDefault();
    });

    // home logo

    anime({
        targets: '#home #logo',
        translateY: 100,
        duration: 3000,
        delay: 300,
        opacity: 1
      });

    // nav

    var nav = $("#nav li")

    nav.click(function(){
        nav.removeClass("on");
        $(this).addClass("on");
        var navIndex = nav.index(this);
        
        $("section").removeClass("on");
        $("section").eq(navIndex).addClass("on");
        $(".actor_bx").removeClass("on");
        $(".title").removeClass("play");
        $(".main").attr("src","images/poster/tom-poster6.jpg");
        $(".detail").removeClass("on");
        $(".detail8").addClass("on");
        bulletList.removeClass("on");
        bulletList.eq(0).addClass("on");
        $("#video_bx ul").css({left:0});
        $("html").css({scrollTop:0});
    });

    // actor

    var tobeysvg = new Vivus("tobeysvg",{duration:20, type:"scenario-sync"},function(){
        $("#tobey .title").addClass("play")
    });
    var andrewsvg = new Vivus("andrewsvg",{duration:20, type:"scenario-sync"},function (){
        $("#andrew .title").addClass("play")
    });
    var tomsvg = new Vivus("tomsvg",{duration:20, type:"scenario-sync"},function(){
        $("#tom .title").addClass("play")
    });

    $(".nav_actor").click(function(){
        $("#actor_home").animate({opacity:1},1000);
    });

    $("#actor_home .thumb").click(function(){
        var actorIndex = $("#actor_home .thumb").index(this);
        $("#actor_home").animate({opacity:0},1000);
        $("#actor").children().eq(actorIndex+1).addClass("on");
        if(actorIndex == 0){
            tobeysvg.play(); andrewsvg.reset(); tomsvg.reset();}
        else if(actorIndex == 1){
            andrewsvg.play(); tobeysvg.reset(); tomsvg.reset();}
        else if(actorIndex == 2){
            tomsvg.play(); tobeysvg.reset(); andrewsvg.reset();};
    });
    
    $(".back").click(function(){
        $(this).parent().removeClass("on");
        $("#actor_home").animate({opacity:1},1000);
        $(".title").removeClass("play");
    });

    // film

    var main = $("#film .main")
    var posters = $("#film .posters a");
    var imgs = $("#film .posters img");
    var details = $("#film .detail");


    posters.click(function(){
        var posterIndex = posters.index(this);
        main.fadeOut(function(){
            main.attr("src",imgs.eq(posterIndex).attr("src"));
        });
        main.fadeIn();
        details.removeClass("on");
        details.eq(posterIndex).addClass("on");
    });


});