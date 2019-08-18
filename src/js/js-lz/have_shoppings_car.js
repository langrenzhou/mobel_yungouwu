$("a").tap(function(){
    $(this).css("textDecoration", "none");
})

$(".sign .iconshenglve").tap(function () {
    $(this).hide().next().show();
    $(".header_nav").show();
})
$(".sign .iconclose").tap(function () {
    $(this).hide().prev().show();
    $(".header_nav").hide();
})
var bs_all = new BScroll('.bs_wrap', {
    // probeType: 3,

    // pullDownRefresh: true,
    // pullDownRefresh: {
    //     // threshold: 50,  //当下拉长度距离盒子顶部的高度超过50px的时候,就派发一个下拉刷新的事件
    //     // stop:200,
    // },

    // pullUpLoad: true,
    // pullUpLoad: {
    //     threshold: 100    //当上拉距离超过盒子高度的100px的时候,就派发一个上拉加载的事件
    // },

    // useTransition: false  // 防止iphone微信滑动卡顿
})
