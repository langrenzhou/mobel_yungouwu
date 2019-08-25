// 
let phone_num = location.search.split("=")[1];
if (phone_num) {
    $(".no_login_person").addClass("disp_n");
    $(".person .vip_info>.phone_num").text(phone_num);
    $(".person").removeClass("disp_n");
} else {
    $(".no_login_person").removeClass("disp_n");
    $(".person").addClass("disp_n");
}

// 
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

// bs初始化
var bs_all = new BScroll('.bs_wrap', {
    probeType: 3,
    click: true,
    pullDownRefresh: {
        threshold: 80,  //当下拉长度距离盒子顶部的高度超过80px的时候,就派发一个下拉刷新的事件
    },
    pullUpLoad: true,
})

// 下拉刷新
bs_all.on('pullingDown', function () {
    $(".pull_down_tip").removeClass("disp_n");
    setTimeout(function () {
        $(".pull_down_tip").addClass("disp_n");
    }, 500)
    bs_all.finishPullDown();
})

// 上拉加载
var up_count = 0;
bs_all.on('pullingUp', function () {
    up_count++;
    console.log(up_count);
    if (up_count < 4) {
        // ajax 获取为你推荐部分的数据
        request_datas();
    } else {       
        $(".pull_up_tip").addClass("disp_n");
        setTimeout(function () {
            $(".no_datas").removeClass("disp_n");
        }, 500)
        bs_all.closePullUp();
    }
    bs_all.finishPullUp();
})

bs_all.refresh();

function request_datas() {
    $.ajax({
        url: "../../php/php-lz/d_recommend.php",
        dataType: "json",
        type: "post",
        data: {
            up_count: up_count
        },
        beforeSend: function () {
            $(".pull_up_tip").addClass("disp_n");
            $(".loading").removeClass("disp_n");
        },
        success: function (res) {
            console.log(res);
            $(".loading").addClass("disp_n");
            $(".pull_up_tip").removeClass("disp_n");
            var _html = "";
            for (var i = 0; i < res.length; i++) {
                _html += `<li>
                        <div class="pic">
                            <img src="${res[i].img_src}">
                        </div>
                        <div class="text">${res[i].text}</div>
                        <div class="price">
                            <label for="">￥</label>
                            <span>${res[i].price}</span>
                        </div>
                    </li>`;
            }
            $(".rec_list>ul").append(_html);
        }
    })
}







