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
    // 新页面
    if (suc) {
        $(".go_next").tap(function () {
            window.location.href="./verify_code.html";
        })
    }
})

// 生成6位随机验证码
function random_code() {
    let code1 = String(Math.floor(Math.random() * 10));
    let code2 = String(Math.floor(Math.random() * 10));
    let code3 = String(Math.floor(Math.random() * 10));
    let code4 = String(Math.floor(Math.random() * 10));
    let code5 = String(Math.floor(Math.random() * 10));
    let code6 = String(Math.floor(Math.random() * 10));
    let code = code1 + code2 + code3 + code4 + code5 + code6;
    return code;
}






var mark = true;
$(".protocol").tap(function () {
    if (mark) {
        $(this).children("i").removeClass("iconduihao");
        mark = false;
    }
    $(this).children("i").addClass("iconduihao");
    mark = true;
})

