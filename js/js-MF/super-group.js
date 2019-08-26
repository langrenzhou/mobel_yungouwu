$(function () {
    // $(".super-nav").on("tap", "li", function () {
    //     $(this).children("span").addClass("nav-active").parent().siblings().children().removeClass("nav-active");
    // });
    let superGrouds = new BScroll(".super-wrap", {
        scrollY: true,
        probeType: 2,
        click: true
    })
    superGrouds.on("scroll", function () {
        let top = $(".temai-wrap").offset().top;
        if (top < 100) {
            $(".temai-header-wrap").css("display", "block");
        } else {
            $(".temai-header-wrap").css("display", "none");
        }
        $(".super-wrap-container>.sup-group").each(function (i) {
            var oftTop = $(this).offset().top;
            // console.log(oftTop)
            if (oftTop<186) {
                $(".super-nav li").eq(i).children("span").addClass("nav-active").parent().siblings().children("span").removeClass("nav-active")
            }
        })
    })
    $(".super-nav").on("tap","li",function(){
        var index=$(this).index();
        console.log(index)
        var elemt=$(".super-wrap-container>.sup-group").eq(index).get(0);
        superGrouds.scrollToElement(elemt,1000);
        $(this).children("span").addClass("nav-active").parent().siblings().children().removeClass("nav-active");
    })
    let brandsList = new BScroll(".brands-list-wraps", {
        scrollX: true,
        click: true
    })
    //品牌团
    var random = Math.floor(Math.random() * 150);
    console.log(random);
    $.ajax({
        url: "../../php/php-MF/super_group_brands.php",
        type: "get",
        dataType: "json",
        data: {
            start: random,
        },
        error: function () {
            console.log("数据请求失败！");
        },
        success: function (res) {
            console.log(res);
            var html = "";
            for (var i = 0; i < res.length; i++) {
                html += `
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
            $(".brands-licontainer").html(html);
        }
    })

    //今日爆款
    $.ajax({
        url: "../../php/php-MF/today_hot.php",
        type: "get",
        dataType: "json",
        error: function () {
            console.log("数据请求失败！");
        },
        success: function (res) {
            console.log(res);
            var html = "";
            for (var i = 0; i < res.length; i++) {
                html += `
                <li>
                <div class="leftImg">
                    <img src="${res[i].img_url}" alt="">
                </div>
                <div class="rightcontent">
                    <div class="title">
                        <span>${res[i].title}</span>
                    </div>
                    `
                if (res[i].expiration) {
                    html += `
                    <div class="address-time">
                        <span>${res[i].expiration}</span>
                    </div>
                         `;
                }
                html += `
                    <div class="comprice">
                        <span>${res[i].comparePrice}</span>
                    </div>
                    <div class="condition">
                        <div class="nowPrice">
                            <span>￥</span>
                            <span class="price">${res[i].price}</span>
                        </div>
                        <div class="line"></div>
                        <div class="limit-buy">
                            <span>限购</span>
                            <span class="limit-num">${res[i].buy_num}</span>
                            <span>件</span>
                        </div>
                        <div class="buy"><span>马上抢</span></div>
                    </div>
                </div>
            </li>
                `;
            }
            $(".hot-brands-container").html(html);
        }
    })

    //特卖会
    let temai = new BScroll(".temai-wrap", {
        scrollX: true,
        click: true
    })
    let temai_Header = new BScroll(".temai-header-wrap", {
        scrollX: true,
        click: true
    })
    $.ajax({
        url: "../../php/php-MF/temai_title.php",
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
            $(".temai-container").html(html);
        }
    })
    discount(1);
    $(".temai-wrap,.temai-header-wrap").on("tap", "li", function () {
        $(this).children("span").addClass("nav-active").parent().siblings().children().removeClass("nav-active");
        console.log("1po");
        var clickid = $(this).children(".hidden").val();
        discount(clickid)
    });

    function discount(clickid) {
        $.ajax({
            url: "../../php/php-MF/discount.php",
            type: "get",
            dataType: "json",
            data: {
                type_id: clickid
            },
            error: function () {
                console.log("数据请求失败！");
            },
            success: function (res) {
                console.log(res);
                var temailist = "";
                console.log(res.length)
                for (var i = 0; i < res.length; i++) {
                    temailist += `
                    <li>
                    <div class="temai-img">
                        <img src="${res[i].img_url}" alt="">
                    </div>
                    <div class="temai-title">
                        <span>${res[i].title}</span>
                    </div>`
                    if (res[i].discount != "undefined") {
                        temailist += `
                        <div class="temai-discount">
                           <span>${res[i].discount}</span>
                        </div>
                        `;
                    }
                    temailist += `
                    <div class="temai-comPrice">
                        <span>${res[i].comPrice}</span>
                    </div>
                    <div class="temai-buy">
                        <div class="temai-price">
                        <span>￥</span>
                        <span>${res[i].price}</span>
                        </div>
                        <div class="temai-line"></div>
                        <div class="limit-buy">
                            <span>限购</span>
                            <span class="limit-num">${res[i].buy_num}</span>
                            <span>件</span>
                        </div>
                    </div>
                    <div class="temai-cart">
                        <i class="iconfont icongouwuche2 iconcart"></i>
                    </div>
                </li>
                    `;
                }

                $(".temai-list-container").html(temailist);
            }
        })
    }
});
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