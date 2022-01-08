$(function(){
    $("button").click(function(){
        var index = $("button").index(this);
        $("button").removeClass("on");
        $(".detail").find("img").removeClass("on");
        $(this).addClass("on");
        $(".detail").find("img").eq(index).addClass("on");
    });
});