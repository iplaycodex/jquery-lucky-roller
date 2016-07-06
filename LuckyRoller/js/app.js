$(window).ready(function() {
    $(".show").click(function() {
        $(".show input").show();
    });
    $("body").css("font-size", 18 * $(window).width() / 320 + "px");
    $(function() {
        var aBtn = $(".main_box .tabBtn li");
        var aDiv = $(" .tabSec .main_box_bottom ");
        aBtn.click(function() {
            $(this).addClass("active").siblings().removeClass("active");
            aDiv.eq($(this).index()).show().siblings().hide();
        });
    });
    $(".p_btn a").height($(window).width() * .025);
    mover();
    setInterval(mover, 3700 + 5700);
    function mover() {
        $(".border4 .div1").animate({
            left:"-2%"
        }, 500);
        $(".border4 .div1").animate({
            left:"0%"
        }, 200);
        setTimeout(function() {
            $(".border4 .div1").animate({
                left:"-100%"
            }, 200);
            $(".border4 .div1").animate({
                left:"50%"
            }, 0);
        }, 3e3);
        setTimeout(function() {
            $(".border4 .div2").animate({
                left:"-2%"
            }, 500);
            $(".border4 .div2").animate({
                left:"0%"
            }, 200);
            setTimeout(function() {
                $(".border4 .div2").animate({
                    left:"-100%"
                }, 200);
                $(".border4 .div2").animate({
                    left:"50%"
                }, 0);
            }, 5e3);
        }, 3700);
    }
});