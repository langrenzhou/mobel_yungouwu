var bs_all = new BScroll('.bs_wrap', {
    // probeType: 3,
})

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

$(".sign .iconshenglve").tap(function(){
    $(this).hide().next().show();
    $(".header_nav").show();
})
$(".sign .iconclose").tap(function(){
    $(this).hide().prev().show();
    $(".header_nav").hide();
})