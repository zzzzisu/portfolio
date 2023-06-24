$(function(){
    // nav
    let nav = $('#nav');
    let navHeight = $('#nav').outerHeight();
    nav.css('height',`${navHeight}px`).addClass('hide');

    nav.hover(
        function(){nav.removeClass('hide')},
        function(){nav.addClass('hide')}
    );

    var winHeight = $(window).outerHeight();
    var scrollTop = '';

    // parallax
    function parallax_img(a){
        if(a.offset().top <= scrollTop + (winHeight * 0.7)){
            a.addClass('move');
        }else{a.removeClass('move')}
    }

    function parallax_txt(a){
        if(a.offset().top <= scrollTop + (winHeight * 0.9)){
            a.addClass('move');
        }else{a.removeClass('move')}
    }

    // scroll
    $(window).scroll(function(){
        scrollTop = $(this).scrollTop();

        // nav fix
        if(scrollTop >= 30){nav.addClass('fixed')}
        else{nav.removeClass('fixed')}
        
        // parallax
        parallax_img($('#exterior > img'));
        parallax_img($('#exterior > div'));
        parallax_txt($('#exterior > .exp'));

        parallax_img($('.interior_bx1 > div'));
        parallax_img($('.interior_bx1 > img'));

        parallax_img($('.interior_bx2 > div'));
        parallax_img($('.interior_bx2 > img'));

        parallax_img($('.light'));
        parallax_img($('.seat'));
        parallax_img($('.sound'));
        parallax_img($('.screen'));
        parallax_img($('.sunroof'));

        parallax_img($('#safety_img'));
    
        parallax_txt($('#specifications > ul > li:nth-child(1)'));
        parallax_txt($('#specifications > ul > li:nth-child(2)'));
        parallax_txt($('#specifications > ul > li:nth-child(3)'));
        parallax_txt($('#specifications > ul > li:nth-child(4)'));
        parallax_txt($('#specifications > ul > li:nth-child(5)'));
        parallax_txt($('#specifications > ul > li:nth-child(6)'));
    });

    const safetybtn = $('#safety_bx .btn_bx li');
    const safetybx = $('#safety_bx .tab_bx');

    function tab_bx(a,b,c){
        a.removeClass('clicked').eq(c).addClass('clicked');
        b.removeClass('clicked').eq(c).addClass('clicked');
    }

    safetybtn.click(function(){
        var safetyIndex = safetybtn.index(this);
        tab_bx(safetybtn,safetybx,safetyIndex);
    });

    const supportbtn = $('.support_btn li');
    const supportbx = $('.bx_support .exp_bx');

    supportbtn.click(function(){
        var supportIndex = supportbtn.index(this);
        tab_bx(supportbtn,supportbx,supportIndex);
    });

    const connectbtn = $('.connect_btn li');
    const connectbx = $('.bx_connect .exp_bx');

    connectbtn.click(function(){
        var connectIndex = connectbtn.index(this);
        tab_bx(connectbtn,connectbx,connectIndex);
    });

});
