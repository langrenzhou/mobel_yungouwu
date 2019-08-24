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
let num = $(".num").text(), tot_price;
let unit_price = $(".unit_price").text();

function account_total_price() {
    tot_price = (num * unit_price).toFixed(2);
    $(".total_price").text(tot_price);
    $(".account_num").text("(" + num + ")");
}

account_total_price();

$(".plus").on("tap", function () {
    num = $(".num").text();
    num++;
    $(".num").text(num);
    account_total_price();
})
$(".minus").on("tap", function () {
    num = $(".num").text();
    num--;
    num = num >= 1 ? num : 1;
    $(".num").text(num);
    account_total_price();
})

// 选择按钮



