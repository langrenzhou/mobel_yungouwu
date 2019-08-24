$("a").tap(function () {
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
})

// shopping_car
