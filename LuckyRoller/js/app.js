$(window).ready(function() {

    $('.show').click(function(){
        $('.show input').show();
    });

    $('body').css('font-size', 18 * $(window).width() / 320 + 'px');
//    $('.carousel_box').height($(window).width()*0.296);
//	
//    var aEles=$('.carousel .carousel_box li');
//    var aBtn=$('.p_btn a');
//
//    var i=0;
//
//    function show()	{
//        if(i<0) {
//            i=aEles.length-1;
//        } else if(i>aEles.length-1) {
//            i=0;
//        }
//        aEles.eq(i).fadeIn().siblings().fadeOut();
//        aBtn.eq(i).addClass('cur').siblings().removeClass('cur');
//    }
//    show();
//
//    function next() {
//        i++;
//        show();
//    }
//
//    var timer=setInterval(next, 3300);
//
//    aBtn.hover(function(){
//        clearInterval(timer);
//        i=$(this).index();
//        show();
//    }, function(){		
//        timer=setInterval(next, 3300);
//    });


    $(function(){
        var aBtn=$('.main_box .tabBtn li');
        var aDiv=$(' .tabSec .main_box_bottom ');

        aBtn.click(function(){
            $(this).addClass('active').siblings().removeClass('active');
            aDiv.eq($(this).index()).show().siblings().hide();
        });
    });

    $('.p_btn a').height($(window).width()*0.025)

    /*----------------*/
  
    
    
    mover()

    setInterval(mover, 3700+5700)

    function mover(){
        $('.border4 .div1').animate({'left':'-2%'},500)
        $('.border4 .div1').animate({'left':'0%'},200)
        setTimeout(function(){
            $('.border4 .div1').animate({'left':'-100%'},200);
            $('.border4 .div1').animate({'left':'50%'},0);
        },3000)                                         
                                       
        setTimeout(function(){
            $('.border4 .div2').animate({'left':'-2%'},500)
            $('.border4 .div2').animate({'left':'0%'},200)
            setTimeout(function(){
                $('.border4 .div2').animate({'left':'-100%'},200);
                $('.border4 .div2').animate({'left':'50%'},0);
            },5000)
        },3700)
    }

	/*----------------*/
	
	
//	$(function(){
//		$('.tabBtn li').hover
//		});
//	
})
