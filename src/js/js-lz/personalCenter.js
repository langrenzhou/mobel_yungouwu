
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

// bs
var bs_all = new BScroll('.bs_wrap', {
    probeType: 3,

    pullDownRefresh: true,
    pullDownRefresh: {
        // threshold: 50,  //当下拉长度距离盒子顶部的高度超过50px的时候,就派发一个下拉刷新的事件
        // stop:200,
    },

    pullUpLoad: true,
    pullUpLoad: {
        threshold: 100    //当上拉距离超过盒子高度的100px的时候,就派发一个上拉加载的事件
    },

    useTransition: false  // 防止iphone微信滑动卡顿
})


bs_all.on('pullingDown', function () {
    $(".pull_down_tip").css("display", "block");

    setTimeout(function () {
        // $(".pull_down_tip").text("刷新成功")
        $(".pull_down_tip").css("display", "none");
    }, 500)

    bs_all.finishPullDown();
})

bs_all.on('pullingUp', function () {
    $(".pull_up_tip").css("display", "block");

    setTimeout(function () {
        $(".pull_down_tip").css("display", "none");
    }, 500)
      
    bs_all.finishPullUp();
})

bs_all.refresh();

// // 刷新成功提示方法
// function refreshAlert(text) {
//     text = text || '操作成功';
//     $(".alert").text(text);
//     $(".alert").css("display", "block");
//     setTimeout(function () {
//         $(".alert").css("display", "none");
//     }, 1000);
// }

// // 加载更多方法
// function reloadData() {
//     var template = `<div class="ajax-render-datas">
//                         ajax渲染的数据
//                     </div>`
//     // 向bs_cont中添加内容
//     $(".bs_cont").append(template);
// }


// bs_all.on('touchend', function (position) {
//     if (position.y > 30) {
//         setTimeout(function () {
//             /*
//              * 这里发送ajax刷新数据
//              * 刷新后,后台只返回第1页的数据,无论用户是否已经上拉加载了更多
//             */
//             // 恢复文本值
//             $(".pull_down_tip").text('下拉刷新');
//             // 刷新成功后的提示
//             refreshAlert('刷新成功');
//             // 刷新列表后,重新计算滚动区域高度
//             bs_all.refresh();
//         }, 1000);
//     } else if (position.y < (this.maxScrollY - 30)) {
//         $(".pull_up_tip").text('加载中...');
//         $(".pull_up_tip").css("display", "block");

//         setTimeout(function () {
//             // 恢复文本值 
//             $(".pull_up_tip").text('查看更多');
//             // $(".pull_up_tip").css("display", "block");
//             // 向列表添加数据
//             reloadData();
//             // 加载更多后,重新计算滚动区域高度
//             bs_all.refresh();
//         }, 1000);
//     }
// });

; (function () {
    var _html = "";
    for (var i = 0; i < 20; i++) {
        _html += ` <li>
                            <div class="pic">
                                <img src="../../images/image_lz/rec1.jpg">
                            </div>
                            <div class="text">
                                大金（DAIKIN）1.5匹 3级能效 变频 J系列 FTXJ335RCDW 壁挂式家用冷暖空调
                            </div>
                            <div class="price">
                                <label for="">￥</label>
                                <span>3499.0</span>
                            </div>
                        </li>`;
    }
    $(".rec_list>ul").append(_html);
})()
