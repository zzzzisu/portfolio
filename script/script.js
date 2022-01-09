// ----- typing -----

let index = 0;

function typing(){
    
    const content = "박지수";
    const text = document.querySelector(".text");

    text.textContent += content[index++];
    if(index > content.length -1){
        clearInterval(timerId);
    }
}

setTimeout(function(){
    timerId = setInterval(typing,500);
},1700);



$(function(){
    
    // nav
    let page = 1;

    $(".nav > li").click(function(){
        if($(this).is(".page2_nav")){
            $("html").animate({scrollTop:$(".page2").offset().top});
            $(".page2").children().css({opacity:1, transitionDuration:200+"ms"});
            $(".page3").children().css({opacity:1, transitionDuration:200+"ms"});
            page = 2;
        }else if($(this).is(".page3_nav")){
            $("html").animate({scrollTop:$(".page3").offset().top});
            $(".page2").children().css({opacity:0, transitionDuration:200+"ms"});
            $(".page3").children().css({opacity:1, transitionDuration:200+"ms"});
            page = 3;
        }else if($(this).is(".page4_nav")){
            $("html").animate({scrollTop:$(".page4").offset().top});
            page = 4;
        }
    });
    

    $(window).on("scroll",function(){

        if($("html").scrollTop() > $(".page2").offset().top){
            $(".nav").css({
                position: "fixed",
                top: 40 + "%"
            });
        }else{$(".nav").removeAttr("style")};

        if($("html").scrollTop() >= ($(".page4").offset().top)*0.75 ) {
            $(".nav > li").removeClass("clicked_nav").css({color:"#222222"});
            $(".page4_nav").addClass("clicked_nav");
        }else if($("html").scrollTop() >= ($(".page3").offset().top)*0.75){
            $(".nav > li").removeClass("clicked_nav").css({color:"#222222"});
            $(".page3_nav").addClass("clicked_nav");
        }else{
            $(".nav > li").removeClass("clicked_nav").css({color:"#222222"});
            $(".page2_nav").addClass("clicked_nav");
        };

        if(($(".page2").offset().top)*1.5 < $("html").scrollTop() && $("html").scrollTop() < ($(".page4").offset().top)*0.75){
            $(".nav > li.clicked_nav").css({color: "#30a5f7"});
        }else{$(".nav > li.clicked_nav").removeAttr("style");}


    });


    $(".nav > li").hover(
        function(){
            $(this).addClass("on");
        },
        function(){
            $(this).removeClass("on");
        }
    );


    // graphic web box

    $(".page3 button").click(function(){
        let index = $(".page3 button").index(this);

        if($(".page button").is(".show")){
            $(".page3 button").removeClass("show");
            $(".page3 .tab_bx").removeClass("show");
        }
        $(this).addClass("show");
        $(".page3 .tab_bx").eq(index).addClass("show");
    });


    // page scroll

    window.addEventListener("wheel",function(event){
        event.preventDefault();
    },{passive:false});


    $("html").animate({scrollTop:0});

    
    const lastPage = $(".page").length;

    function pageUp(){

    }

    $(window).on("wheel",function(event){
        if($("html").is(":animated")) return;

        const wheel = event.originalEvent.deltaY;

        if(wheel > 0){
            if(page == lastPage) return;
            $(".container").eq(page-1).animate({opacity:0},300);
            page ++;
            $("html").animate({scrollTop:$(window).height() * (page - 1)},800);
            
        }else{
            if(page == 1) return;
            setTimeout(function(){$(".container").eq(page-1).animate({opacity:1}) },400);
            page--;
            $("html").animate({scrollTop:$(window).height() * (page - 1)},700);
        }



    }).on("keydown",function(event){

        
        if($("html").is(":animated")) return;
        
        const key = event.which;
        
        if(key == 13 || key == 34 || key == 40 || key  == 32){
                event.preventDefault();
                if(page == lastPage) return;
                $(".container").eq(page-1).animate({opacity:0},300);
                page ++;
                $("html").animate({scrollTop:$(window).height() * (page - 1)},800);
                }else if(key == 33 || key == 38){
                event.preventDefault();
                if(page == 1) return;
                setTimeout(function(){$(".container").eq(page-1).animate({opacity:1}) },400);
                page--;
                $("html").animate({scrollTop:$(window).height() * (page - 1)},700);
            }

    
        });


    $(".search_icon").on("click",function(){
        $("html").animate({scrollTop:$(window).height()});
        page = 2;
    });

    $(".search_btn").on("click",function(){
        $("html").animate({scrollTop:$(window).height()});
        page = 2;
    });

    // using program

    $(window).on("scroll",function(){
        const html_bx = $(".program_bx").eq(0).children(".colored");
        const ps_bx = $(".program_bx").eq(1).children(".colored");
        const css_bx = $(".program_bx").eq(2).children(".colored");
        const ai_bx = $(".program_bx").eq(3).children(".colored");
        const js_bx = $(".program_bx").eq(4).children(".colored");
        const pr_bx = $(".program_bx").eq(5).children(".colored");
        let i1 = 0;
        let i2 = 0;

        if($("html").scrollTop() == $(".page2").offset().top){
            setInterval(function(){
                if(i1 > html_bx.length) return;
                html_bx.eq(i1).css({background:"#f16274"});
                css_bx.eq(i1).css({background:"#f16274"});
                ps_bx.eq(i1).css({background:"#f16274"});
                ai_bx.eq(i1).css({background:"#f16274"});
                i1++;

            },200);

            setInterval(function(){
                if(i2 > js_bx.length) return;
                js_bx.eq(i2).css({background:"#f16274"});
                pr_bx.eq(i2).css({background:"#f16274"});
                i2++;

            },200);

        }
    });

    const g_bx_list = $(".graphic_bx > ul");
    const w_bx_list = $(".web_bx > ul");

    $(".next").on("click",function(){
        if($(".graphic_bx").is(".show")){
            g_bx_list.animate({left:-500+"px"},"slow",function(){
                g_bx_list.append(g_bx_list.children(":first"));
                g_bx_list.removeAttr("style");
            });
        }else if($(".web_bx").is(".show")){
            w_bx_list.animate({left:-100+"%"},"slow",function(){
                w_bx_list.append(w_bx_list.children(":first"));
                w_bx_list.removeAttr("style");
            });
        }
    });

    $(".prev").on("click",function(){
        if ($(".graphic_bx").is(".show")) {
            g_bx_list.css({ left: -500 + "px" });
            g_bx_list.prepend(g_bx_list.children(":last"));
            g_bx_list.animate({ left: 0 },"slow");
        }else if ($(".web_bx").is(".show")) {
            w_bx_list.css({ left: -100 + "%" });
            w_bx_list.prepend(w_bx_list.children(":last"));
            w_bx_list.animate({ left: 0 },"slow");
        }
    });
    

});