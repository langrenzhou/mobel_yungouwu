$(function () {
    //顶部导航显示和隐藏
    $(".shenglu").on("tap", function () {
        $(this).addClass("icon-hidden").siblings().removeClass("icon-hidden");
        $(".top-nav").css("display", "block");
        console.log("...")
    })
    $(".close").on("tap", function () {
        $(this).addClass("icon-hidden").siblings().removeClass("icon-hidden")
        console.log("x");
        $(".top-nav").css("display", "none");
    })
    //垂直滚动
    let groups_wrap = new BScroll(".group-wrap", {
        scrollY: true,
        click: true
    })
    //水平滑动
    let header_right = new BScroll(".header-right", {
        scrollX: true,
        click: true,
    })
    //获取导航数据
    let htmllist = "";
    $.ajax({
        url: "../../php/php-MF/brands-groups-title.php",
        type: "get",
        dataType: "json",
        error: function () {
            console.log("数据请求失败！");
        },
        success: function (res) {
            console.log(res);
            var html = "";
            html += `
            <li>
            <span class="nav-active">${res[0].title}</span>
             <input type="hidden" value="${res[0].type_id}" class="hidden">
            </li>
            `;
            for (var i = 1; i < res.length; i++) {
                html += `
                <li>
                <span>${res[i].title}</span>
                 <input type="hidden" value="${res[i].type_id}" class="hidden">
                </li>
                `;
            }
            $(".header-container").html(html);
            for(var j=0;j<res.length;j++){
                let titleli=res[j].title;
                groupList(j+1,titleli)
            }
        }
    })
    $(".header-container").on("tap", "li", function () {
        $(this).children("span").addClass("nav-active").parent().siblings().children().removeClass("nav-active");
        console.log("1po");
        var clickid = $(this).children(".hidden").val();
        console.log(clickid);
    });
    // groupList(1)
    //获取列表数据
    function groupList(listId,titleli) {
        $.ajax({
            url: "../../php/php-MF/brands-groups.php",
            type: "get",
            dataType: "json",
            data: {
                type_id: listId,
            },
            error: function () {
                console.log("数据请求失败！");
            },
            success: function (res) {
                console.log(res);
                htmllist+= `
                <div class="group-brands">
                <div class="brands-title">
                    <div class="name"><span>${titleli}</span></div>
                    <div class="line"></div>
                </div>
                </div>
                `;
                htmllist += `
                <ul class="group-licontainer clearfix">
                `;
                for (var i = 0; i < res.length; i++) {
                    htmllist += `
            <li>
            <div class="brands-image">
                <img src="${res[i].bigimg_url}" alt="">
            </div>
            <div class="shadow">
                <div class="smallImg">
                    <img src="${res[i].smallimg_url}" alt="">
                </div>
                <span>${res[i].title}</span>
            </div>
            </li>
            `;
                }
                htmllist += `
                </ul>
                `;
                $(".listcont").html(htmllist);
            }
        })
    }
})