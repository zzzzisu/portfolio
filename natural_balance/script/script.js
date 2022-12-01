$(function(){

    $("html").animate({scrollTop:0});

    if($(window).outerWidth() >= 1024) {
        $(".pc").css({display:"block"});
        $(".mobile").css({display:"none"});
    }else{
        $(".mobile").css({display:"block"});
        $(".pc").css({display:"none"});
    }

    // swiper

    var dogSwiper = new Swiper(".dog_swiper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        slideToClickedSlide: true,

        pagination: {
            el: ".dog_swiper .swiper-pagination",
            type: "progressbar",
            clickable: true,
          },

        breakpoints: {
            1024 : {
                slidesPerView: 3,
            }
        }
      });

    var catSwiper = new Swiper(".cat_swiper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        slideToClickedSlide: true,

        pagination: {
            el: ".cat_swiper .swiper-pagination",
            type: "progressbar",
            clickable: true,
          },

        breakpoints: {
          1024 : {
              slidesPerView: 3,
          }
        }
      });

     var dogSwiperContent = $("#newdog .swiper-text");
     var dogSwiperIndex = 0;
 
     var catSwiperContent = $("#newcat .swiper-text");
     var catSwiperIndex = 0;
     
     dogSwiper.on('transitionEnd', function() {
         dogSwiperIndex = dogSwiper.realIndex;
         dogSwiperContent.removeClass("on").eq(dogSwiperIndex).addClass("on");
     });
 
     catSwiper.on('transitionEnd', function() {
         catSwiperIndex = catSwiper.realIndex;
         catSwiperContent.removeClass("on").eq(catSwiperIndex).addClass("on");
     });
 
    // -------------------

    var greenHeight = $("#why").outerHeight();
    var moreBtn = $(".more_btn");
    var detailTxt = $(".detail_txt");
    var detailBx = $("#detail_bx");
    var stateBtn = $("#states_btn");
    var stateList = $("#states_list");
    var petList = $("#pet_type ul");
    var menuBtn = $("#menu_btn");
    var close = $("#close");
    var menu = $("#menu");
    var menuTitle = $(".menu_title");

    menuBtn.click(function(){
        menu.addClass("show");
    });

    close.click(function(){
        menu.removeClass("show");
        menuTitle.removeClass("on");
        menuTitle.siblings("ul").slideUp();
    });

    $("#why .green").each(function(){
        $(this).css({height:greenHeight});
    });


    $("#detail_btn").click(function(){
        $(this).toggleClass("on");
        detailBx.slideToggle();
    });

    menu.click(function(){
        menuTitle.removeClass("on");
        menuTitle.siblings("ul").slideUp();
    });

    menuTitle.click(function(event){
        event.preventDefault();
        event.stopPropagation();
        menuTitle.removeClass("on");
        if($(this).siblings("ul").is(":visible")){$(this).siblings("ul").slideUp();}
        else{
            menuTitle.siblings("ul").slideUp();
            $(this).addClass("on");
            $(this).siblings("ul").slideDown();
        }
    });

    $(".menu_block ul").click(function(event){
        event.preventDefault();
        event.stopPropagation();
    });

    moreBtn.click(function(){
        if($(this).is(".on")){
            $(this).removeClass("on").parent().siblings(".detail_txt").slideUp();}
        else{
            moreBtn.removeClass("on");
            detailTxt.slideUp();
            $(this).addClass("on").parent().siblings(".detail_txt").slideDown();
        }
    });

    stateBtn.click(function(){
        $(this).toggleClass("on");
        stateList.slideToggle();
    });

    var stateBx = document.querySelector("#states strong");
    var petType = document.querySelector("#pet_type span");

    $("#states_list li").click(function(){
        stateBx.textContent = $(this).text();
        stateBtn.removeClass("on");
        stateList.slideUp();
    });

    $("#pet_more").click(function(){
        petList.slideToggle();
    });

    $("#pet_type ul li").click(function(){
        petType.textContent = $(this).text();
        petList.slideUp();
    });

    // main slide

    var mainImg = $("#main_container li");
    var mainIndex = $("#main_index li");
    var mainSlide = 0;
    var i = 1;
    
    function mainSlideInterval (){
        if(i == 4){i = 0};

        mainImg.removeClass("on");
        mainImg.eq(i).addClass("on");
        mainIndex.removeClass("on");
        mainIndex.eq(i).addClass("on");
        
        i++;
        
    }
    
    $("#main").each(function(){
        mainSlide = setInterval(mainSlideInterval,2500);
    });
    
    mainIndex.click(function(){
        var index = mainIndex.index(this);
        clearInterval(mainSlide);
        
        mainImg.removeClass("on");
        mainImg.eq(index).addClass("on");
        mainIndex.removeClass("on");
        mainIndex.eq(index).addClass("on");
        
        i = index;
        
        mainSlide = setInterval(mainSlideInterval,2500);
        
    });

    var whyContainer= $("#why_slide");
    var whySlideInterval = 0;

    function whySlide (){
        whyContainer.animate({left:-100+"%"},1000,function(){
            whyContainer.append(whyContainer.children(":first")).removeAttr("style");
            whyContainer.children().removeClass("on");
            whyContainer.children(":first").addClass("on");
        })
    }

    function parallax (st, th){
        if(st >= (th.offset().top - $(window).outerHeight() * 0.8)){
            th.addClass("on")
        }else{th.removeClass("on")}
    }

    
    var feedTitle_pc = $("#feed .pc h1");
    var testTitle_pc = $("#test .pc h1");
    var feedTitle_mobile = $("#feed .mobile");
    var testTitle_mobile = $("#test .mobile");
    var why_svg = new Vivus("why_svg", {duration: 200, type: "delayed", delay: 150},function(){$("#why_svg").addClass("fill");});

    // scroll
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        var feedScroll = $(window).outerWidth()*(0.6) - scrollTop*(0.5);
        var testScroll = scrollTop*(0.5) - $(window).outerWidth()*(1.1);

        if(scrollTop >= ($(this).outerHeight()*0.3)){
            why_svg.play();
            whyContainer.children(":first").addClass("on");
            $("#why .green").addClass("on");
            if(whySlideInterval == 0){
                whySlideInterval = setInterval(whySlide,4000);
            }
        }else{
            why_svg.reset();
            $("#why .green").removeClass("on");
            clearInterval(whySlideInterval);
            whySlideInterval = 0;
        };

        // feet, test title

        if($(this).outerWidth() >= 1024){
            feedTitle_pc.css({left:feedScroll+"px"});
            testTitle_pc.css({left:testScroll+"px"});
        }else{
            parallax(scrollTop,feedTitle_mobile);
            parallax(scrollTop,testTitle_mobile);
        }

        // feed

        parallax(scrollTop,$(".feed_bx").eq(0));
        parallax(scrollTop,$(".feed_bx").eq(1));
        parallax(scrollTop,$(".feed_bx").eq(2));

        // new

        parallax(scrollTop,$("#newdog"));
        parallax(scrollTop,$("#newcat"));

        parallax(scrollTop,$("#test_img_bx"));
        parallax(scrollTop,$("#nearby"));
        parallax(scrollTop,$("#nearby_img_bx"));
        parallax(scrollTop,$("#map"));
        
        parallax(scrollTop,$("#find .green"));
        parallax(scrollTop,$("#map_txt h4"));
        parallax(scrollTop,$("#promise"));
        parallax(scrollTop,$("#news strong"));

    });

    // resize

    $(window).resize(function(){
        var reWid = $(window).outerWidth();
        winWid = reWid;

        if(winWid >= 1024) {
            $(".pc").css({display:"block"});
            $(".mobile").css({display:"none"});
        }else{
            $(".mobile").css({display:"block"});
            $(".pc").css({display:"none"});
        }

        $("#why .green").css({height: 100+"%"});
    });

    $("#why_play").click(function(){
        if(whyContainer.is(":animated")) return;
        if(whySlideInterval == 0){whySlideInterval = setInterval(whySlide,4000);}
    });
    
    $("#why_stop").click(function(){
        clearInterval(whySlideInterval);
        whySlideInterval = 0;
    });

   
});