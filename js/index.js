 // 页面加载完的效果
 $(document).ready(function() {
     $(".out").stop().animate({
         "left": "0px"
     }, 500)
 })


 // 左侧导航栏效果
 $(function() {
     $('.out').click(function() {
         $('.out').stop().animate({
             "left": "-57px"
         }, 500);
         $(".outt").stop().animate({
             "left": "0px"
         }, 500);

     });
     $('#guanbi').click(function() {
         $('.out').stop().animate({
             "left": "0px"
         }, 500);
         $(".outt").stop().animate({
             "left": "-52px"
         }, 500);
     });
     $("#fixed1").mouseover(function() {
         $(".fixed1").css({
             "display": "block"
         })
     });
     $("#fixed1").mouseout(function() {
         $(".fixed1").css({
             "display": "none"
         })
         $(".loginminn").css({
             "display": "none"
         })
     });
     $("#fixed1").click(function() {
         $(".fixed1").css({
             "display": "none"
         })
         $(".loginminn").css({
             "display": "block"
         })
     });

     $("#fixed2").click(function() {

         $(".loginmin1").css({
             "display": "block"
         })
     });
     $("#fixed2").mouseout(function() {
         $(".loginmin1").css({
             "display": "none"
         })
     });

     $("#fixed3").click(function() {

         $(".loginmin2").css({
             "display": "block"
         })
     });
     $("#fixed3").mouseout(function() {
         $(".loginmin2").css({
             "display": "none"
         })
     });

     $("#fixed4").click(function() {

         $(".loginmin3").css({
             "display": "block"
         })
     });
     $("#fixed4").mouseout(function() {
         $(".loginmin3").css({
             "display": "none"
         })
     });

     $("#ewm").click(function() {

         $(".fixed2").css({
             "display": "block"
         })
     });
     $("#ewm").mouseout(function() {
         $(".fixed2").css({
             "display": "none"
         })
     });
     $(".loginminn").mouseover(function() {
         $(".loginminn").css({
             "display": "block"
         })
     });
     $(".loginminn").mouseout(function() {
         $(".loginminn").css({
             "display": "none"
         })
     });
     $(".loginmin1").mouseover(function() {
         $(".loginmin1").css({
             "display": "block"
         })
     });
     $(".loginmin1").mouseout(function() {
         $(".loginmin1").css({
             "display": "none"
         })
     });
     $(".loginmin2").mouseover(function() {
         $(".loginmin2").css({
             "display": "block"
         })
     });
     $(".loginmin2").mouseout(function() {
         $(".loginmin2").css({
             "display": "none"
         })
     });
     $(".loginmin3").mouseover(function() {
         $(".loginmin3").css({
             "display": "block"
         })
     });
     $(".loginmin3").mouseout(function() {
         $(".loginmin3").css({
             "display": "none"
         })
     });

     // 回到顶部
     $(window).scroll(function() {
         var st = $(this).scrollTop();
         if (st > 300) {
             $(".back").fadeIn();
         } else {
             $(".back").fadeOut();
         }
     });
     $(".back").click(function() {
         $("body,html").stop().animate({
             "scrollTop": 0
         }, 800);
         $(".back").hide()
     })

 })