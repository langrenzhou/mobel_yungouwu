$("a").tap(function () {
    $(this).css("textDecoration", "none");
})

// 验证用户输入手机号
let suc = false;
let n = 0;
$("#u_input").keyup(function () {
    n++;
    let val;
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
        // 点击跳到验证码页面
        if ($(".small_pic").css("left") == pos_left[random_n]) {
            $(".cover_slide_verify").addClass("disp_n");
            verify_code();
        }

    }
})

function slide_verify() {
    random_slide_pic();
    $(".cover_slide_verify").removeClass("disp_n");
    move_slide();
}

const pos_left = [166, 200, 160];
console.log(pos_left);
let random_n = Math.floor(Math.random() * 3 + 1);
// let random_html;
function random_slide_pic() {
    let random_html = `<img class="bg_pic" src="../../images/image_lz/slide_bg_${random_n}.jpg">
    <img class="small_pic pa" src="../../images/image_lz/slide_small_${random_n}.png">`
    $(".slide_pic").html(random_html);
}

function move_slide() {
    $(".cover_slide_verify").on("mousemove", function (e) {
        let _left = e.clienX - $(".small_pic").width() / 2;
        let _top = e.clienY - $(".small_pic").height() / 2;
        $(".small_pic").css({
            left: _left,
            top: _top
        })
    })
}

function verify_code() {
    $(".go_next").tap(function () {
        window.location.href = "./verify_code.html?pho_num=" + val;
    })
}

// 
var mark = true;
$(".protocol").tap(function () {
    if (mark) {
        $(this).children("i").removeClass("iconduihao");
        mark = false;
    }
    $(this).children("i").addClass("iconduihao");
    mark = true;
})

