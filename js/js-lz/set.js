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

$(".secede").on("tap", function () {
    $(".verify_secede_wrap").removeClass("disp_n");
    $(".cancel_verify>span:last-child").tap(function () {
        location.href = "../index.html";
    })
    $(".cancel_verify>span:first-child").tap(function () {
        $(".verify_secede_wrap").addClass("disp_n");
    })
})