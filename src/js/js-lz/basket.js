// $("header a").tap(function () {
//     $(this).css("textDecoration", "none");
// })

// $(".share").tap(function () {
//     $(".share_cover").show();
//     $(".text_area").tap(function () {
//         $(this).children().css("textDecoration", "none").parent().parent().hide();
//     })
// })


// var mybs = new BScroll('.container', {
//     probeType: 3,
// })

// mybs.on('pullingUp', function () {
//     bs.finishPullUp();
//     bs.refresh();
// })

// mybs.on('scroll', function () {
//     $('.hot_basket').each(function (i) {
//         var oftop = $(this).offset().top;
//         if (oftop <= 300) {
//             $('.header_nav li').eq(i).addClass("active").children().show().parent().siblings().removeClass("active").children().hide();
//         }
//     })
// })

// $('.header_nav>ul>li').each(function () {
//     $(this).append("<div class='bar'></div>");
// })

// $('.header_nav li').tap(function () {
//     $(this).addClass("active").children().show().parent().siblings().removeClass("active").children().hide();
//     var el = $('.hot_basket').eq($(this).index()).get(0);
//     mybs.scrollToElement(el);
// })
// // var flag = true;

// // $(".page_title>i").addClass("ellipsis");
// // $(".ellipsis").tap(function () {
// //     $(this).removeClass("iconshenglve ellipsis").addClass("iconclose close");
// //     $("nav").show();
// //     $(".close").tap(function () {
// //         $(this).removeClass("iconclose close").addClass("iconshenglve ellipsis");
// //         $("nav").hide();
// //     })
// // })

// $(".page_title>i").tap(function () {
// // if (flag) {
// //     $(this).removeClass("iconshenglve").addClass("iconclose close");
// //     $("nav").show("normal", function () {
// //         flag = false;
// //     });
// // } else {
// //     $("close").tap(function () {
// //         $(this).removeClass("iconclose close").addClass("iconshenglve");
// //         $("nav").hide("normal", function () {
// //             flag = true;
// //         });
// //     })
// // }
//     $(this).removeClass("iconshenglve").addClass("iconclose close");
//     $("nav").show();
//     $(".close").tap(function () {
//         $(this).removeClass("iconclose close").addClass("iconshenglve");
//         $("nav").hide();
//     })
// })

// var swiper_header = new Swiper('.swiper_header', {
//     autoplay: true,
//     loop: true,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         bulletClass: 'my-bullet',
//         bulletActiveClass: 'my-bullet-active',
//     },
// })

// var swiper_newpro = new Swiper('.swiper_newpro', {
//     autoplay: true,
//     loop: true,
//     slidesPerView: "auto",
//     loopedSlides: 5,
// })

// function reg_data(st, ed, el) {
//     $.ajax({
//         url: "../../php/php-lz/select_basket_img.php",
//         dataType: "json",
//         type: "post",
//         data: {
//             " _start": st,
//             "_end": ed
//         },
//         success: function (res) {
//             var _html = "";
//             for (var i = 0; i < res.length; i++) {
//                 _html += ` <li class="pr">
//                         <a>
//                             <img data-src="${res[i].img_src}"
//                                 src="${res[i].img_src}"
//                                 lazy="loaded">
//                             <div class="cover-box pa">
//                                 <div class="title">${res[i].name}</div>
//                                 <div class="intro">${res[i].intro}</div>
//                                 <div class="sport_time pa">${res[i].time}</div>
//                             </div>
//                         </a>
//                     </li>`;
//             }
//             $(el).html(_html);
//         }
//     })

// }
// reg_data(1, 5, ".pro_area");
// reg_data(6, 11, ".reduce_area");
// reg_data(12, 24, ".full_minus_area");
// reg_data(25, 28, ".discount_area");
// reg_data(29, 31, ".brand_choice_area");

