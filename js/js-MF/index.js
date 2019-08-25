$(document).ready(function () {
    var banner = new Swiper(".bannerImgs", {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletClass: 'my-bullet',
            bulletActiveClass: "my-bullet-active",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            waitForTransition: false,
        },
    })
    //监测滚动条事件
    var scrollTop = new BScroll(".scrollWrap", {
        probeType: 3,
        bounce: false,
    })

    scrollTop.on("scroll", function (e) {
        // console.log(this.y)
        if (this.y < -100) {
            $(".scroll-top-stick").css("display", "block");
        } else {
            $(".scroll-top-stick").css("display", "none");
        }
    })

    //betterScroll初始化
    //今日爆款
    var hotContainer = new BScroll(".hot-wrap", {
        scrollX: true,
        click: true
    })
    //数据请求
    $.ajax({
        url: "./php/php-MF/index_hot.php",
        type: "GET",
        dataType: "json",
        error: function () {
            console.log("数据请求失败！");
        },
        success: function (res) {
            console.log(res)

            var html = "";
            for (var i = 0; i < res.length; i++) {
                html += `
                <li>
                <div class="hot-listimg">
                    <img src="${res[i].img_url}" alt="">
                </div>
                <p class="hot-price"><span>￥</span><span>${res[i].price}</span></p>
                <p class="comparice">
                    <span>参考价：￥</span><span>${res[i].comprice}</span>
                </p>
                `
                if (res[i].discount != "undefined") {
                    html += `
                    <div class="hot-discount">
                        <span>${res[i].discount}</span>
                    </div>
                   `
                }
                html += `</li>`
            }
            html += `
            <li class="hot-more">
            <p>查看</p>
            <p>更多</p>
            </li>
            `
            $(".hot-list").html(html);
        }
    })
    //拼团
    var pintuanContainer = new BScroll(".pintuan-wrap", {
        scrollX: true,
        click: true
    })
    //边看边买
    var lookBuy = new Swiper(".lookBuyBanner", {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletClass: 'my-bullet',
            bulletActiveClass: "my-bullet-active",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            waitForTransition: false,
        },
    })
    //好货排行版
    var goodsRank = new BScroll(".rankList-wrap", {
        scrollX: true,
        click: true
    })
    //精选活动
    var selectAct = new BScroll(".select-wrap", {
        scrollX: true,
        click: true
    })
    // 猜你喜欢
    //上拉加载
    // var guessLikeScoll = new BScroll(".guess-container", {
    //     // pullUpLoad: {
    //     //     threshold: 20
    //     // },
    //     // probeType: 2,
    //     scrollY: true
    // })

    var guessLikeScoll = new BScroll(".scrollWrap", {
        pullUpLoad: {
            threshold: 50
        },
        probeType: 2,
        scrollY: true,
        click: true
    })
    var htmlscoll = "";
    var start = 0;
    var htmlArr = [];
    guessAjax(start);
    // guessLikeScoll.on("pullingUp", function () {
    //     console.log(1)
    //     if (start < 70) {
    //         start += 10;
    //         guessAjax(start);
    //         $(".guess-list").append(htmlscoll);
    //         guessLikeScoll.finishPullUp();
    //     } else {
    //         $(".bottom-tip").append('<span>见底了</span>');
    //     }

    // })
    // guessLikeScoll.refresh();

    // guessLikeScoll.on("scrollEnd", function () {
    //     $(".loading-tip").css("display", "none");
    // })

    function guessAjax(start) {
        $.ajax({
            url: "./php/php-MF/index_like.php",
            type: "get",
            dataType: "json",
            data: {
                start: start,
                listnum: 100,
            },
            // beforesend:function(){
            //     $(".loading-tip").css("display","block");
            // },
            // complete:function(){
            //     $(".loading-tip").css("display","none");
            // },
            // <img src="${res[i].img_url}" alt="">
            error: function () {
                console.log("数据请求失败！");
            },
            success: function (res) {
                console.log(res)
                //懒加载初始化
                echo.init({
                    offset: 0,
                    throttle: 0 //设置图片延迟加载的时间
                })
                for (var i = 0; i < res.length; i++) {
                    htmlscoll += `
                    <li>
                    <div class="guess-img">
                        <img src="./images/image-MF/loading2.gif" alt="pic" data-echo="${res[i].img_url}">
                    </div>
                    <div class="guess-text">
                        <p>${res[i].title}</p>
                    </div>
                    <div class="guess-favorable">
                        <p class="guess-price">
                            <span>￥</span>
                            <span>${res[i].price}</span>
                        </p>
                        `
                    if (res[i].discount != "undefined") {
                        htmlscoll += `
                                <p class="guess-discount"><span>${res[i].discount}</span></p>
                                `
                    }
                    htmlscoll +=
                        ` 
                    </div>
                    <div class="similar">
                        <span>看相似</span>
                    </div>
                    </li>
                    `
                }
                htmlArr.push(htmlscoll);
                $(".guess-list").html(htmlscoll)
            }
        })
    }

    //点击跳转搜索页面
    $(".search-container").tap(function () {
        window.location.href = "./html/html-MF/search.html";
    })

})