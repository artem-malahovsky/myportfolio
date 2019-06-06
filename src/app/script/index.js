
$(document).ready(function() {
     $("#tell").mask("99/99/9999");
})

 var h_hght = 85; // высота шапки
 var h_mrg = 0;    // отступ когда шапка уже не видна

$(function(){

    var nav = $('.top_nav');
    var top = $(this).scrollTop();

       if(top > 85){
       nav.css('top', 0);
    }

    $(window).scroll(function(){
        top = $(this).scrollTop();
        if (top+0 < 85) {
            nav.css('top', (85-top));
        } else {
            nav.css('top', 0);
        }
    });

      // var navMain = $('.main-nav');
      // var navToggle = $('.main-nav__toggle');
      //
      // navMain.classList.remove('main-nav--nojs');
      //
      // navToggle.addEventListener('click', function() {
      //   if (navMain.classList.contains('main-nav--closed')) {
      //     navMain.classList.remove('main-nav--closed');
      //     navMain.classList.add('main-nav--opened');
      //   } else {
      //     navMain.classList.add('main-nav--closed');
      //     navMain.classList.remove('main-nav--opened');
      //   }
      // });
      $('.main-nav').removeClass('main-nav--nojs')
    $('.main-nav__toggle').click(function(){
      $('.main-nav').toggleClass('main-nav--closed')
      $('.main-nav').toggleClass('main-nav--opened')
    })

});


// $(document).ready(function() {
//    $("#js").css("color", "red")
// })
//
// $(document).ready(function(){
//
//     var nav = $('.main-nav');
//
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 136) {
//             nav.addClass("f-nav");
//         } else {
//             nav.removeClass("f-nav");
//         }
//     });
//
// });
