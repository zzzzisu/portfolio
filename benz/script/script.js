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

    $("html").animate({scrollTop:0});

    $(".banner_video").on("ended",function(){
        $(".banner").addClass("animate");
    });

    $(".btn_bx > li").on("click",function(){
        let modelIndex = $(".btn_bx > li").index(this);

        $(".img_bx").removeClass("clicked");
        $(".btn_bx > li").removeClass("clicked");
        $(this).addClass("clicked");
        $(".img_bx").eq(modelIndex).addClass("clicked");

        if(modelIndex == 1 || modelIndex == 2 || modelIndex == 5){
            $(".model_bx > button").css({display:"block"})
        }else if(modelIndex == 4){
            if($(".cabriolet_bx").find("li").eq(0).is(".center")){
                $(".prev").css({display:"none"});
                $(".next").css({display:"block"});
            }else if($(".cabriolet_bx").find("li").eq(1).is(".center")){
                $(".prev").css({display:"block"});
                $(".next").css({display:"none"});
            }
        }
        else{$(".model_bx > button").removeAttr("style")}
    });

    $(".next").on("click",function(){
        if($(".hatchback_bx").is(":visible")) return;
        if($(".roadster_bx").is(":visible")) return;
        
        if($(".sedan_bx").is(":visible")){
            if($(".sedan_bx > ul").is(":animated")) return;

            $(".sedan_bx > ul > li").removeClass("center");
            $(".sedan_bx > ul > li").eq(2).addClass("center");

            $(".sedan_bx > ul").animate({left:-288+"px"},function(){
                $(".sedan_bx > ul").append($(".sedan_bx > ul").children(":first"));
                $(".sedan_bx > ul").removeAttr("style");
            });
        }
        
        if($(".coupe_bx").is(":visible")){
            if($(".coupe_bx > ul").is(":animated")) return;
    
            $(".coupe_bx > ul > li").removeClass("center");
            $(".coupe_bx > ul > li").eq(2).addClass("center");
    
            $(".coupe_bx > ul").animate({left:-288+"px"},function(){
                $(".coupe_bx > ul").append($(".coupe_bx > ul").children(":first"));
                $(".coupe_bx > ul").removeAttr("style");
            });
        }
        
        if($(".suv_bx").is(":visible")){
            if($(".suv_bx > ul").is(":animated")) return;
    
            $(".suv_bx > ul > li").removeClass("center");
            $(".suv_bx > ul > li").eq(2).addClass("center");
    
            $(".suv_bx > ul").animate({left:-288+"px"},function(){
                $(".suv_bx > ul").append($(".suv_bx > ul").children(":first"));
                $(".suv_bx > ul").removeAttr("style");
            });
        }

        if($(".cabriolet_bx").is(":visible")){
            if($(".cabriolet_bx > ul").is(":animated")) return;
    
            $(".cabriolet_bx > ul > li").removeClass("center");
            $(".cabriolet_bx > ul > li").eq(1).addClass("center");
            $(".prev").css({display:"block"});
            $(".next").css({display:"none"});
            $(".cabriolet_bx > ul").animate({left:0});

        }
    });

    $(".prev").on("click",function(){
        if($(".hatchback_bx").is(":visible")) return;
        if($(".roadster_bx").is(":visible")) return;
        
        if($(".sedan_bx").is(":visible")){
            if($(".sedan_bx > ul").is(":animated")) return;

            $(".sedan_bx > ul > li").removeClass("center");
            $(".sedan_bx > ul > li").eq(0).addClass("center");

            $(".sedan_bx > ul").css({left:-288+"px"});
            $(".sedan_bx > ul").prepend($(".sedan_bx > ul").children(":last"));
            $(".sedan_bx > ul").animate({left:0});

        };

        if($(".coupe_bx").is(":visible")){
            if($(".coupe_bx > ul").is(":animated")) return;

            $(".coupe_bx > ul > li").removeClass("center");
            $(".coupe_bx > ul > li").eq(0).addClass("center");

            $(".coupe_bx > ul").css({left:-288+"px"});
            $(".coupe_bx > ul").prepend($(".coupe_bx > ul").children(":last"));
            $(".coupe_bx > ul").animate({left:0});

        };

        if($(".suv_bx").is(":visible")){
            if($(".suv_bx > ul").is(":animated")) return;

            $(".suv_bx > ul > li").removeClass("center");
            $(".suv_bx > ul > li").eq(0).addClass("center");

            $(".suv_bx > ul").css({left:-288+"px"});
            $(".suv_bx > ul").prepend($(".suv_bx > ul").children(":last"));
            $(".suv_bx > ul").animate({left:0});

        };

        if($(".cabriolet_bx").is(":visible")){
            if($(".cabriolet_bx > ul").is(":animated")) return;

            $(".cabriolet_bx > ul > li").removeClass("center");
            $(".cabriolet_bx > ul > li").eq(0).addClass("center");

            $(".prev").css({display:"none"});
            $(".next").css({display:"block"});
            $(".cabriolet_bx > ul").animate({left:288+"px"});

        };
    });
});