$("a").tap(function () {
    $(this).css("textDecoration", "none");
})
var mark = true;
$(".protocol").tap(function () {
    if (mark) {
        $(this).children("i").removeClass("iconduihao");
        mark = false;
    }
    $(this).children("i").addClass("iconduihao");
    mark = true;
})