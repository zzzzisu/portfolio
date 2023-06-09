$(function(){
    $('html').animate('scrollTop','0');

    // nav
    let nav = $('#nav');
    let navHeight = $('#nav').outerHeight();
    nav.css('height',`${navHeight}px`).addClass('hide');

    nav.hover(
        function(){nav.removeClass('hide')},
        function(){nav.addClass('hide')}
    );

    // scroll
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();

        // nav fix
        if(scrollTop >= 30){nav.addClass('fixed')}
        else{nav.removeClass('fixed')}
    });


    // banner
    $('#banner video').on('play',function(){setTimeout(function(){$('#banner').addClass('animate')},2000)});

    //overview
    let modelButton = $('.btn_bx > li');
    let imgBx = $('.img_bx');
    var list = '';
    var length = '';

    // title button
    modelButton.click(function(){
        var modelIndex = modelButton.index(this);
        
        imgBx.removeClass('img_bx_click').eq(modelIndex).addClass('img_bx_click');
        modelButton.removeClass('btn_click').eq(modelIndex).addClass('btn_click');
        
        list = $('.img_bx_click ul');
        length = $('.img_bx_click ul').children().length;
        
        if(modelIndex != 0 && modelIndex != 3){
            $('.model_bx button').css('display','block');
        }else{$('.model_bx button').removeAttr('style')}

        if(length > 2){
            $('.model_bx button').css('display','block');
        }else if(length == 2){
            if(list.children(':eq(0)').hasClass('center')){
                $('.next').css('display','block');
                $('.prev').removeAttr('style')}
            else{
                $('.next').removeAttr('style');
                $('.prev').css('display','block');}
        }else{
            $('.model_bx button').removeAttr('style')
        }
    });

    // next button
    $('.next').click(function(){
        
        if(length > 2){
            if(list.is(':animated')) return;
            list.animate({'left':'-30%'},300,function(){
                list.removeAttr('style').append(list.children(':first'))
            })
            list.children().removeClass('center').eq(2).addClass('center');
        }else{
            list.animate({'left':'0'},300);
            $('.next').removeAttr('style');
            $('.prev').css('display','block');
            list.children().removeClass('center').eq(1).addClass('center');
        }

    });

    // prev button
    $('.prev').click(function(){

        if(length > 2){
            if(list.is(':animated')) return;
            list.css({'left':'-30%'}).prepend(list.children(':last'));
            list.animate({'left':'0'},300);
            list.removeAttr('style').children().removeClass('center').eq(1).addClass('center');
        }else{
            list.animate({'left':'30%'},300);
            $('.pre').removeAttr('style');
            $('.next').css('display','block');
            list.children().removeClass('center').eq(0).addClass('center');
        }
    });

});
