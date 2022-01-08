$(function(){
    $(".nav").hover(
        function(){
            if($(".sub").is(":animated")) return;
            $(".sub").slideDown();},
            function(){
            if($(".sub").is(":animated")) return;
            $(".sub").slideUp();}
    );


    $(window).scroll(function(){
        if($(this).scrollTop() >= 30){
            $(".nav").css({position:"fixed", top:0})
        }else{
            $(".nav").removeAttr("style");
        }
    });

    $(".safety_btn > li").on("click",function(){
        $(".safety_btn > li").removeClass("clicked");
        $(".tab_bx").removeClass("clicked");
        let safetyIndex = $(".safety_btn > li").index(this);
        
        $(this).addClass("clicked");
        $(".tab_bx").eq(safetyIndex).addClass("clicked");
    });

    $(".bx_support > ul > li").on("click",function(){
        let supportIndex = $(".bx_support > ul > li").index(this);
        $(".bx_support > ul > li").removeClass("clicked");
        $(".bx_support > .exp_bx").removeClass("clicked");
        $(this).addClass("clicked");
        $(".bx_support > .exp_bx").eq(supportIndex).addClass("clicked");
    });

    $(".bx_connect > ul > li").on("click",function(){
        let connectIndex = $(".bx_connect > ul > li").index(this);
        $(".bx_connect > ul > li").removeClass("clicked");
        $(".bx_connect > .exp_bx").removeClass("clicked");
        $(this).addClass("clicked");
        $(".bx_connect > .exp_bx").eq(connectIndex).addClass("clicked");
    });

    function parallax(st, th) {
        
        if (st >= (th.offset().top - $(window).outerHeight() * 0.8)) {
            th.addClass("move");
        } else { th.removeClass("move") };
    }

    function img(st, th) {
        if (st >= th.offset().top - $(window).outerHeight() * 1.1) {
                th.addClass("move");
            } else { th.removeClass("move") };
    }

    $(window).scroll(function(){
        var st = $(this).scrollTop();
        parallax(st,$(".exterior > img"));
        parallax(st,$(".exterior > div"));
        parallax(st,$(".exterior > .exp"));
        parallax(st,$(".interior_bx1> div"));
        parallax(st,$(".interior_bx1> div > h3"));
        parallax(st,$(".interior_bx1> div > h4"));
        parallax(st,$(".interior_bx1> img"));
        parallax(st,$(".interior_bx2> div"));
        parallax(st,$(".interior_bx2> div > h3"));
        parallax(st,$(".interior_bx2> div > h4"));
        parallax(st,$(".interior_bx2> img"));
        parallax(st,$(".light > div"));
        parallax(st,$(".seat > div"));
        parallax(st,$(".sound > div"));
        parallax(st,$(".screen > div"));
        parallax(st,$(".sunroof > div"));
        parallax(st,$(".driving"));
        img(st,$(".specifications > ul > li:nth-child(1)"));
        img(st,$(".specifications > ul > li:nth-child(2)"));
        img(st,$(".specifications > ul > li:nth-child(3)"));
        img(st,$(".specifications > ul > li:nth-child(4)"));
        img(st,$(".specifications > ul > li:nth-child(5)"));
        img(st,$(".specifications > ul > li:nth-child(6)"));

        if(st >= $(".safety").offset().top){
            let i = 0;
            timerId = setInterval(function(){
                $(".mark").eq(i).animate({opacity:1});
                $(".circle").eq(i).animate({opacity:1});
                i++;
                if(i>$(".circle").length){clearInterval(timerId);};
            },300);
        }
    });
});