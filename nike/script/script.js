$(document).ready(function(){

    // scroll effect

    let i = -2;
    setTimeout(function () {
        $(".scroll").fadeIn();
        setInterval(function () {
            $(".scroll > img").eq(i + 2).animate({ opacity: 1 });
            if (i >= -1) {
                $(".scroll > img").eq(i + 1).animate({ opacity: 0.6 });
            }
            if (i >= 0) {
                $(".scroll > img").eq(i).animate({ opacity: 0.2 });
            }
            i++;

            if (i > 2) i = -2;
        }, 400);
    }, 2000);

    // nav-menu

    $(".menu").click(function (event) {
        event.preventDefault();
        $(".nav").toggleClass("on");
        $(".menu").toggleClass("on");
    });

    // nav, menu color

    $(window).scroll(function () {
        
        const scrollTop = $(this).scrollTop();

        if(scrollTop >= $(".find").offset().top * 0.98){
            $(".logo").eq(0).css({opacity:0});
            $(".logo.black").css({opacity:1});
            $(".menu").addClass("black");
        }else if(scrollTop >= $(".force_bx").offset().top){
            $(".logo").eq(0).removeAttr("style");
            $(".logo.black").removeAttr("style");
            $(".menu").removeClass("black");
        }else if(scrollTop >= $(".athlete_bx").offset().top){
            $(".logo").eq(0).css({opacity:0});
            $(".logo.black").css({opacity:1});
            $(".menu").addClass("black");
        }else if(scrollTop < $(".athlete_bx").offset().top){
            $(".logo").eq(0).removeAttr("style");
            $(".logo.black").removeAttr("style");
            $(".menu").removeClass("black");
        }

    });
    
    // force slide
    
    let slideForce = 0;
    const slide = $(".container > ul");
    var wd = $(window).width();
    
    function sliding(){
        if(wd >= 768){
            slide.animate({left:-33+"%"},"slow",function(){
                slide.removeAttr("style").children(":first").appendTo(slide);
            });
        }else if(wd > 540 && wd < 768){
            slide.animate({left:-50+"%"},"slow",function(){
                slide.removeAttr("style").children(":first").appendTo(slide);
            }); 
        }else{
            slide.animate({left:-110+"%"},"slow",function(){
                slide.removeAttr("style").children(":first").appendTo(slide);
            }); 
        }
    }
    
    $(".find a").click(function(event){
        event.preventDefault();
    });

    $(window).scroll(function(){
        if($(this).scrollTop() >= ($(".find").offset().top - $(window).outerHeight() * 0.8)){   
            if(slide.is(":animated")) return;       
                if(slideForce == 0) slideForce = setInterval(sliding,2500);
        };
    });

    $(".container > ul ").hover(
        function(){
            clearInterval(slideForce);
            slideForce = 0;
        },
        function(){
            if(slideForce == 0)
            slideForce = setInterval(sliding,2500);
        }
    );

    $(window).resize(function(){
        var rewd = $(window).width();
        wd = rewd;
        clearInterval(slideForce);
        if(rewd >= 768){
            slideForce = setInterval(function(){
                slide.animate({left:-33+"%"},"slow",function(){
                    slide.removeAttr("style").children(":first").appendTo(slide);
                });
            },2500);
        }else if(rewd < 768 && rewd > 540){
            slideForce = setInterval(function(){
                slide.animate({left:-50+"%"},"slow",function(){
                    slide.removeAttr("style").children(":first").appendTo(slide);
                });
            },2500);
        }else{
            slideForce = setInterval(function(){
                slide.animate({left:-110+"%"},"slow",function(){
                    slide.removeAttr("style").children(":first").appendTo(slide);
                });
            },2500);
        }
    });

    // force slide button

   $(".prev").click(function(){
       if(slide.is(":animated")) return;
       clearInterval(slideForce);
       slide.children(":last").prependTo(slide);
       
       if(wd <= 540){
           slide.css({left:-110+"%"});
        }else if(wd > 540 && wd < 768){
            slide.css({left:-50+"%"});
       }else{
           slide.css({left:-33+"%"});
       }

       slide.animate({left:0});
       slideForce = setInterval(sliding,2500);
    }); 
    
    $(".next").click(function(){
        if(slide.is(":animated")) return;
        clearInterval(slideForce);

        if(wd <= 540){
            slide.animate({left:-110+"%"},function(){
                slide.removeAttr("style").children(":first").appendTo(slide);
            });
        }else if(wd > 540 && wd < 768){
            slide.animate({left:-50+"%"},function(){
                slide.removeAttr("style").children(":first").appendTo(slide);
            });
        }else{
            slide.animate({left:-33+"%"},function(){
                slide.removeAttr("style").children(":first").appendTo(slide);
            });
        }
        slideForce = setInterval(sliding,2500);
    });

    function text(st, th){
        if(st >= th.offset().top * 0.5){
            th.addClass("move");
        }else{th.removeClass("move")};
    }

    function parallax(st, th){
        if(st >= (th.offset().top - $(window).outerHeight() * 0.8)){
            th.addClass("move");
        }else{th.removeClass("move")};
    }

    $(window).scroll(function(){
        var st = $(this).scrollTop();
        text(st,$(".athlete_bx div h2:nth-of-type(1)"));
        text(st,$(".athlete_bx div h2:nth-of-type(2)"));
        parallax(st,$("#force_svg"));
        parallax(st,$(".force_bx .img_bx"));
        parallax(st,$(".force_bx .text_bx p:nth-of-type(1)"));
        parallax(st,$(".svg_bx"));
        parallax(st,$(".force_bx .text_bx p:nth-of-type(2)"));
        parallax(st,$(".force_bx .text_bx a"));
        parallax(st,$(".kids-adult .kids"));
        parallax(st,$(".kids-adult .adult"));
        
    });

});
