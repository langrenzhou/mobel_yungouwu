$("a").tap(function () {
    $(this).css("textDecoration", "none");
})

// 验证用户输入手机号
let suc = false;
let n = 0;
let val;
$("#u_input").keyup(function () {
    n++;
    if (n == 11) {
        val = $(this).val();
        let reg = /[1][3-9][\d]{9}/;
        if (reg.test(val)) {
            suc = true;
            $(".go_next i").addClass("go_next_color");
            $(".error_tips").addClass("disp_n");
        } else {
            suc = false;
            n = 0;
            $(".go_next i").removeClass("go_next_color");
            $(".error_tips").removeClass("disp_n");
        }
    }
    if (!$("#u_input").val()) {
        suc = false;
        n = 0;
        $(".error_tips").addClass("disp_n");
        $(".go_next i").removeClass("go_next_color");
    }
    // 验证通过
    if (suc) {
        // 滑块验证
        slide_verify();
    }
})

function slide_verify() {
    const pos_left = [140, 175, 135];
    let random_n = Math.floor(Math.random() * 3 + 1);
    function random_slide_pic() {
        let random_html = `<img class="bg_pic" src="../../images/image_lz/slide_bg_${random_n}.jpg">
        <img class="small_pic pa" src="../../images/image_lz/slide_small_${random_n}.png">`
        $(".slide_pic").html(random_html);
    }

    function move_slide() {
        $(".slide_pic").on("touchmove", function (e) {
            e.preventDefault();
            let _left = e.touches[0].clientX - $(".bg_pic").offset().left - $(".small_pic").width() / 2;
            let _top = e.touches[0].clientY - $(".bg_pic").offset().top - $(".small_pic").height() / 2;
            $(".small_pic").css({
                left: _left,
                top: _top
            })
            $(".text").text("");
            $(".slide_small").css({
                left: _left
            }).addClass("move_style");
            $(".slide_bg").css({
                width: _left
            }).addClass("bg_blue");
        })
        $(".slide_pic").on("touchend", function (e) {
            if (parseInt($(".small_pic").css("left")) >= pos_left[random_n - 1] - 20 || parseInt($(".small_pic").css("left")) <= pos_left[random_n - 1] + 20) {
                $(".cover_slide_verify").addClass("disp_n");
                // 跳到验证码页面
                // window.location.href = "./verify_code.html?pho_num=" + val;
            }
        })
    }
    random_slide_pic();
    $(".cover_slide_verify").removeClass("disp_n").children().animate({
        height: "3rem"
    }, move_slide());
}

// 


