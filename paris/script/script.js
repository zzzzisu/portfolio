$(function(){

    var nav = $("#nav");
    var mobMenu = $(".mobile_menu");
    var navMenu = $(".nav_menu")
    var main = $("#main");
    var promotion = $("#promotion");
    var top = $("#top");
    var quick = $("#quick");
    var quicklist = $(".quick_list li");
    var brand_site = $("#footer .sites .title");
    var sitelist = $("#footer .sites .sitelist");

    // scroll top reset

    // $("html").animate({scrollTop:0});
    
    // top button
    top.click(function(){
        $("html").animate({scrollTop:0});
    });

    // title
    $("#footer .sites .title").click(function(){
        $("#more").toggleClass("click");
    });


    // brand site

    brand_site.click(function(){
        sitelist.toggleClass("on");
    });

    // svg drawing

    var since = new Vivus("since", {duration: 200, type: "delayed", delay: 150},function(){$("#since").addClass("fill");});
    var brandsvg = new Vivus("brand_svg", {duration: 150, type: "delayed", delay: 50},function(){$("#brand_svg").addClass("fill_w");});
    var productsvg = new Vivus("product_svg", {duration: 150, type: "delayed", delay: 50},function(){$("#product_svg").addClass("fill_w");});
    var promotionsvg = new Vivus("promotion_svg", {duration: 100, type: "sync"},function(){$("#promotion_svg").addClass("fill");});

    // parallax function

    function parallax(st, th){
        if(st >= (th.offset().top - $(window).outerHeight() * 0.8)){
            th.addClass("move");
        }else{th.removeClass("move")};
    }

    // drawing function
    function drawing(st, th, svg){
        if(st >= (th.offset().top - $(window).outerHeight() * 0.8)){
            svg.play();
        }else{
            svg.reset()
            th.removeClass();
        };
    }

    // scroll
    
    $(window).scroll(function(){
        var $this = $(this);
        var scrollTop = $this.scrollTop();

        // nav fix
        var navTop = nav.outerHeight();
        if(scrollTop > 0){
            nav.css({
                position:"fixed",
                top:0
            });
            main.css({
                paddingTop:navTop+"px"
            });
        }else{
            nav.removeAttr("style");
            main.removeAttr("style");
        }

        // parallax

        parallax(scrollTop,$("#main .text_bx"));
        parallax(scrollTop,$("#menu .brand"));
        parallax(scrollTop,$("#menu .product"));
        parallax(scrollTop,$("#menu .brand .img"));
        parallax(scrollTop,$("#menu .brand .text p"));
        parallax(scrollTop,$("#menu .brand .text button"));
        parallax(scrollTop,$("#menu .product .img"));
        parallax(scrollTop,$("#menu .product .text p"));
        parallax(scrollTop,$("#menu .product .text button"));
        parallax(scrollTop,$("iframe"));
        parallax(scrollTop,$("#promotion"));
        parallax(scrollTop,$("#delivery"));
        parallax(scrollTop,$("#delivery .dl_txt_bx"));

        drawing(scrollTop,$("#since"),since);
        drawing(scrollTop,$("#brand_svg"),brandsvg);
        drawing(scrollTop,$("#product_svg"),productsvg);
        drawing(scrollTop,$("#promotion_svg"),promotionsvg);
     
    });
    

    // mobile, tablet nav

    mobMenu.click(function(event){
        event.preventDefault();
        mobMenu.toggleClass("on");
        navMenu.toggleClass("on");
        
        if(mobMenu.is(".on")){
            top.css({opacity:0});
            quick.css({opacity:0});
            quicklist.css({opacity:0});
        }else{
            top.removeAttr("style");
            quick.removeAttr("style");
            quicklist.removeAttr("style");
        };
    });

    // quick click

    quick.click(function(){
        $(this).toggleClass("on");
    });

    // resize

    var winWid = $(window).width();
    
    $(window).resize(function(){
        var navMenu
        var rewid = $(this).width();
        winWid = rewid;

        if(winWid < 1024){
            promotion.find("li").eq(2).removeClass("on");
        }else{
            promotion.find("li").eq(2).addClass("on");
        }

    });
    
    if(winWid < 1024){
        promotion.find("li").eq(1).addClass("on");
        $("#main .text_bx").addClass("move");
    }else{
        promotion.find("li").eq(1).addClass("on");
        promotion.find("li").eq(2).addClass("on");
    }
 
    // promotion

    var cont = promotion.find("#pro_list");

    // bullets (mob, tab)

    var bullets = $("#bullets");
    
    for(i=0; i<cont.find("li").length; i++){
        $("<li></li>").append($("<a></a>").attr("href","#")).appendTo(bullets);
    }
    bullets.children().eq(1).addClass("on");

    var bulletList = $("#bullets li");
    
    // slide
    
    var slideIndex = 2;
    var photoIndex = 1;

    function mobSlide (){
        bulletList.removeClass("on").eq(slideIndex).addClass("on");
                cont.children().removeClass("on").eq(2).addClass("on");
                cont.animate({left:(-75+"%")},500,function(){
                    cont.children(":first").appendTo(cont);
                    cont.removeAttr("style")
                    cont.children().removeClass("on").eq(1).addClass("on");
                });
                photoIndex = slideIndex;
                slideIndex++;
                if(slideIndex == bulletList.length){slideIndex = 0;};
    }

    function pcSlide(){
        slideIndex++;
        photoIndex = slideIndex - 1;
        if(slideIndex == bulletList.length){slideIndex = 0;};
        cont.children().removeClass("on").eq(2).addClass("on").end().eq(3).addClass("on");
        cont.animate({left:-55+"%"},500,function(){
            cont.removeAttr("style").append(cont.children(":first"));
        });
    }

    var slide_mobile = 0;
    var slide_pc = 0;

    promotion.each(function(){

        $(window).scroll(function(){
            if(promotion.is(".move")){
                if(winWid < 1024){
                    if(slide_mobile > 0) return;
                    slide_mobile = setInterval(mobSlide,2000);
                }
                else{
                    if(slide_pc > 0) return;
                    slide_pc = setInterval(pcSlide,2000);
                };
            }else{
                if(winWid < 1024){
                    clearInterval(slide_mobile);
                    slide_mobile = 0;
                }
                else{
                    clearInterval(slide_pc);
                    slide_pc = 0;
                };
            }

        });


        bulletList.click(function(){
            clearInterval(slide_mobile);

            var bulletIndex = bulletList.index(this);
            var diff = bulletIndex - photoIndex;

            bulletList.removeClass("on");
            $(this).addClass("on");
            cont.children().removeClass("on");
        
            if(diff==0) return;
            if(diff > 0){
                if(diff == 7){
                    cont.children().eq(0).addClass("on");
                }else{
                    cont.children().eq(1+diff).addClass("on");
                }
                cont.animate({left:(-25+(-50*diff))+"%"},500,function(){
                    cont.removeAttr("style").append(cont.children().eq(diff).prevAll().get().reverse()) 
                });

            }else{
                cont.children().eq(diff+1).addClass("on");
                cont.css({left:(-25+(-50*(-1*diff)))+"%"}).prepend(cont.children().eq(diff-1).nextAll());
                cont.animate({left:-25+"%"},500);
            }
            
            photoIndex = bulletIndex;
            slideIndex = (photoIndex+1)%(bulletList.length);
            slide_mobile = setInterval(mobSlide,2000);
        });
        
    });

    $(".next").click(function(){
        clearInterval(slide_pc);
        if(cont.is(":animated")) return;
        slideIndex++;
        photoIndex = slideIndex - 1;
        if(slideIndex == bulletList.length){slideIndex = 0;};
        cont.children().eq(1).removeClass("on");
        cont.children().eq(3).addClass("on");
        cont.animate({left:-55+"%"},function(){
            cont.children(":first").appendTo(cont);
            cont.css({left:-20+"%"});
        });
        slide_pc = setInterval(pcSlide,2000);
    });

    $(".prev").click(function(){
        clearInterval(slide_pc);
        slideIndex--;
        photoIndex = slideIndex - 1;
        if(slideIndex < 0){slideIndex = 7;};
        if(cont.is(":animated")) return;
        cont.children(":last").prependTo(cont);
        cont.css({left:-55+"%"});
        cont.animate({left:-20+"%"});
        cont.children().eq(3).removeClass("on");
        cont.children().eq(1).addClass("on");
        slide_pc = setInterval(pcSlide,2000);
    });
    
    $(window).resize(function(){
        clearInterval(slide_mobile);
        clearInterval(slide_pc);
        if(winWid < 1024){
            bulletList.removeClass("on").eq(slideIndex-1).addClass("on");
            slide_mobile = setInterval(mobSlide,2000);
        }else{
            slide_pc = setInterval(pcSlide,2000);
        }
    });

});