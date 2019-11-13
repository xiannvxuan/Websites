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
             "display": "block",
             "top": "95px"
         })
     });

     $("#fixed2").click(function() {

         $(".loginminn").css({
             "display": "block",
             "top": "176px"
         })
     });
     $("#fixed2").mouseout(function() {
         $(".loginminn").css({
             "display": "none"
         })
     });

     $("#fixed3").click(function() {

         $(".loginminn").css({
             "display": "block",
             "top": "224px"
         })
     });
     $("#fixed3").mouseout(function() {
         $(".loginminn").css({
             "display": "none"
         })
     });

     $("#fixed4").click(function() {

         $(".loginminn").css({
             "display": "block",
             "top": "272px"
         })
     });
     $("#fixed4").mouseout(function() {
         $(".loginminn").css({
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

 function check_login() {
     var name = $("#user_name").val();
     var pass = $("#password").val();
     if (name == "admin" && pass == "admin") {
         alert("登录成功！");
         $("#user_name").val("");
         $("#password").val("");

     } else {
         $("#login_form").removeClass('shake_effect');
         setTimeout(function() {
             $("#login_form").addClass('shake_effect')
         }, 1);
     }
 }

 function check_register() {
     var name = $("#r_user_name").val();
     var pass = $("#r_password").val();
     if (name != "" && pass == "" && email != "") {
         alert("注册成功！");
         $("#user_name").val("");
         $("#password").val("");
     } else {
         $("#login_form").removeClass('shake_effect');
         setTimeout(function() {
             $("#login_form").addClass('shake_effect')
         }, 1);
     }
 }
 $(function() {
     $("#create").click(function() {
         check_register();
         return false;
     })
     $("#login").click(function() {
         check_login();
         return false;
     })
     $('.message a').click(function() {
         $('.haha').animate({
             height: 'toggle',
             opacity: 'toggle'
         }, 'slow');
     });
 })