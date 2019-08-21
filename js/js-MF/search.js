$(function () {
    $(".deleteSearch").tap(function () {
        $(".recentlyConter").html("");
        $(".searchNone").css("display", "block");
    })
    //热门搜索数据请求
    var random = Math.floor(Math.random() * 10);
    console.log(random)
    $.ajax({
        url: "../../php/php-MF/search.php",
        type: "get",
        dataType: "json",
        data: {
            start: random
        },
        error: function () {
            console.log("数据请求失败！");
        },
        success: function (res) {
            console.log(res);
            var hotConter = "";
            for (var i = 0; i < res.length; i++) {
                hotConter += `
                <li><a href="javascript:">${res[i].name}</a></li>
                `
            }
            $(".hotConter").html(hotConter);
        }
    })
    $(".hotConter").on("tap","li",function(){
        $(".searchNone").css("display", "none");
        var text =$(this).text();
        // console.log(text);
        $(".recentlyConter").append("<li>" + text + "</li>");
    })
})