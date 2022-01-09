$(document).ready(function () {

    // nav-menu

    $(".menu").click(function (event) {
        event.preventDefault();
        $(".nav").toggleClass("on");
        $(".menu").toggleClass("on");
    });

    

    var wd = $(window).width();
    
    function img(st, th) {
        if(wd >= 1024){
            if (st >= th.offset().top * 0.6) {
                th.addClass("move");
            } else { th.removeClass("move") };
        }else{
            if (st >= th.offset().top * 0.4) {
                th.addClass("move");
            } else { th.removeClass("move") };
        }
    }

    function parallax(st, th) {
        if(wd >= 1024){
            if (st >= (th.offset().top - $(window).outerHeight() * 1.1)) {
                th.addClass("move");
            } else { th.removeClass("move") };
        }else{
            if (st >= (th.offset().top - $(window).outerHeight() * 1.5)) {
                th.addClass("move");
            } else { th.removeClass("move") };
        }
    }

    // about

    $(".about").each(function () {
        // nav, menu color

        $(window).scroll(function () {
        
            const scrollTop = $(this).scrollTop();
        
            if (scrollTop >= $(".head").offset().top) {
                $(".logo").eq(0).css({ opacity: 0 });
                $(".logo.black").css({ opacity: 1 });
                $(".menu").addClass("black");
            } else if (scrollTop >= $(".box").offset().top) {
                $(".logo").eq(0).removeAttr("style");
                $(".logo.black").removeAttr("style");
                $(".menu").removeClass("black");
            } else if (scrollTop >= $(this).outerHeight()) {
                $(".logo").eq(0).css({ opacity: 0 });
                $(".logo.black").css({ opacity: 1 });
                $(".menu").addClass("black");
            } else {
                $(".logo").eq(0).removeAttr("style");
                $(".logo.black").removeAttr("style");
                $(".menu").removeClass("black");
            }
        
        });

        anime({
            targets: ".aboutsvg path",
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: "easeInOutSine",
            duration: 1500,
            delay: function (el, i) { return i * 300 },
            direction: "alternate",
            loop: true,
            fill: "rgba(255,255,255,1)"
        });

        function letters(th) {
            var textWrapper = document.querySelector(th);
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letters'>$&</span>");

            anime.timeline({ loop: false })
                .add({
                    targets: th,
                    translateY: ["50px", 0],
                    translateZ: 0,
                    duration: 750,
                    delay: (el, i) => 50 * i
                });
        }
        
        $(".world").mouseenter(function () { letters(".world .text .letters") });
        $(".europe").mouseenter(function () { letters(".europe .text .letters") });
        $(".china").mouseenter(function () { letters(".china .text .letters") });
        

        if(wd >= 1025){
            $(".box > div").hover(
                function(){$(this).toggleClass("hover");}
            );
            $(".head > div").hover(
                function(){$(this).toggleClass("hover");}
            );
        }else{
            $(".box > div").click(function(){
                if($(".box > div").is(".hover")){
                    $(".box > div").removeClass("hover");
                }
                $(this).addClass("hover");
            });

            $(".head > div").click(function(){
                if($(".head > div").is(".hover")){
                    $(".head > div").removeClass("hover");
                }
                $(this).addClass("hover");
            });

            $(".close").click(function(event){

                event.stopPropagation();
                $(this).parent().parent().removeClass("hover");
            });
        }


        $(window).resize(function(){
            var rewd = $(this).width();
            wd = rewd;
            if(rewd >= 1025){
                $(".box > div").removeClass("hover");
                $(".head > div").removeClass("hover");
                $(".box > div").hover(
                    function(){$(this).toggleClass("hover");}
                );
                $(".head > div").hover(
                    function(){$(this).toggleClass("hover");}
                );
            }else{
                $(".box > div").removeClass("hover");
                $(".head > div").removeClass("hover");
                $(".box > div").click(function(){
                    if($(".box > div").is(".hover")){
                        $(".box > div").removeClass("hover");
                    }
                    $(this).addClass("hover");
                });
    
                $(".head > div").click(function(){
                    if($(".head > div").is(".hover")){
                        $(".head > div").removeClass("hover");
                    }
                    $(this).addClass("hover");
                });
            }

        });

        $(window).scroll(function () {
            var st = $(this).scrollTop();
            parallax(st, $(".mission #missionsvg"));
            parallax(st, $(".mission p:nth-of-type(1)"));
            parallax(st, $(".mission p:nth-of-type(2)"));
            parallax(st, $(".mission p:nth-of-type(3)"));
            parallax(st, $(".mission .img_bx .blind"));
            parallax(st, $(".aboutnike #nikesvg"));
            parallax(st, $(".aboutnike p:nth-of-type(1)"));
            parallax(st, $(".aboutnike p:nth-of-type(2)"));
            img(st, $(".box .innovation"));
            img(st, $(".box .team"));
            img(st, $(".box .social"));
            img(st, $(".box .sustainable"));
            parallax(st, $(".head #headsvg"));
            parallax(st, $(".head .world"));
            parallax(st, $(".head .europe"));
            parallax(st, $(".head .china"));

            
            if($(this).width() >= 540){
                if (st >= $(".blind").offset().top) {
                    $(".aboutnike").addClass("before");
                } else {
                    $(".aboutnike").removeClass("before");
                }
                
                if (st >= $(".aboutnike").offset().top * 0.9) {
                    $(".aboutnike").addClass("after");
                } else {
                    $(".aboutnike").removeClass("after");
                }
            }else{
                if (st >= $(this).outerHeight() * 0.5) {
                    $(".aboutnike").addClass("before").addClass("after");
                } else {
                    $(".aboutnike").removeClass("before").removeClass("after");
                }
            }
        });

    });


    // purpose

    $(".purpose").each(function(){
        anime({
            targets: ".purposesvg path",
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: "easeInOutSine",
            duration: 1500,
            delay: function (el, i) { return i * 300 },
            direction: "alternate",
            loop: true,
            fill: "rgba(255,255,255,1)"
        });

        $(window).scroll(function(){
            var bb = $(window).scrollTop() * (-0.5);
            $(".breaking").find("h2").eq(0).css({left: bb+ "px"});
            $(".breaking").find("h2").eq(1).css({right: (1138 + bb) + "px"});
        });

        // nav, menu color

        $(window).scroll(function () {
        
            const scrollTop = $(this).scrollTop();
        
            if (scrollTop >= $(".ceo h4").offset().top) {
                $(".logo").eq(0).css({ opacity: 0 });
                $(".logo.black").css({ opacity: 1 });
                $(".menu").addClass("black");
            } else if (scrollTop >= $(".ceo .img_bx img").offset().top) {
                $(".logo").eq(0).removeAttr("style");
                $(".logo.black").removeAttr("style");
                $(".menu").removeClass("black");
            } else if (scrollTop >= $(this).outerHeight()) {
                $(".logo").eq(0).css({ opacity: 0 });
                $(".logo.black").css({ opacity: 1 });
                $(".menu").addClass("black");
            } else {
                $(".logo").eq(0).removeAttr("style");
                $(".logo.black").removeAttr("style");
                $(".menu").removeClass("black");
            }
        
        });

        $(".click_vd").click(function(){
            $(".ceo .video_bx").fadeIn();
        });

        $(".video_bx button").click(function(){
            $(".ceo .video_bx").fadeOut();
            $(".video_bx").find("video").get(0).pause();
        });

        $(".ppp > div .scroll").click(function(){
            if($(this).parent().is(".show")){$(this).parent().removeClass("show")}
            else{$(".ppp > div").removeClass("show");
            $(this).parent().toggleClass("show");}
        });

        var john = new Vivus("john", {duration: 17, type: "scenario-sync"});

        $(window).scroll(function(){
            var st = $(this).scrollTop();
            parallax(st, $(".breaking svg:nth-of-type(1)"));
            parallax(st, $(".breaking svg:nth-of-type(2)"));
            parallax(st, $(".breaking p:nth-of-type(1)"));
            parallax(st, $(".breaking p:nth-of-type(2)"));
            parallax(st, $(".ceo .blind"));
            parallax(st, $(".ceo .line"));
            parallax(st, $(".ceo p:nth-of-type(1)"));
            parallax(st, $(".ceo p:nth-of-type(2)"));
            parallax(st, $(".ceo a"));
            parallax(st, $(".ppp > div"));
            parallax(st, $(".report > div"));
            parallax(st, $(".report span"));
            

            if(st >= $(this).outerHeight() * 0.8){$(".breaking").addClass("move")}
            else{$(".breaking").removeClass("move")};

            if($(this).outerWidth() >= 768){
                if(st >= $(".ceo .img_bx").offset().top){
                    john.play();
                }else{
                    john.reset();
                }
            }else{
                if(st >= $(".breaking svg:nth-of-type(2)").offset().top * 0.9){
                    john.play();
                }else{
                    john.reset();
                }
            }

        });
    });

});