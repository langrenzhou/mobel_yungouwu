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

// 获取phone_num
console.log(location.search.split("=")[1]);
let phone_num = location.search.split("=")[1];
$(".send_tip span").text(phone_num);

// 生成验证码
let code = random_code();
alert(code);

// 验证
let suc = false;
let n = 0;
$("#u_input").keyup(function () {
    console.log(0);
    n++;
    let code_val;
    if (n == 6) {
        code_val = $(this).val();
        if (code_val == code) {
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
    // // 新页面
    if (suc) {
        $(".go_next").tap(function () {
            window.location.href = "./personalCenter.html?phone_num=" + phone_num;
        })
    }
})

// 重新发送
$(".resend").on("tap", function () {
    code = random_code();
    alert(code);
})