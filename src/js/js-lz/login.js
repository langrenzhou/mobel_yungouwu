$("a").tap(function () {
    $(this).css("textDecoration", "none");
})

// 验证用户输入手机号
let suc = false;
let n = 0;
$("#u_input").keyup(function (e) {
    n++;
    if (n == 11) {
        let val = $(this).val();        
        let reg = /[1][3-9][\d]{9}/;
        if (reg.test(val)) {
            suc = true;
            $(".go_next i").addClass("go_next_color");
            $(".error_tips").addClass("disp_n");
        } else {
            n = 0;
            $(".go_next i").removeClass("go_next_color");
            $(".error_tips").removeClass("disp_n");
        }
    }
    if (!$("#u_input").val()) {
        n = 0;
        $(".error_tips").addClass("disp_n");
        $(".go_next i").removeClass("go_next_color");
    }
})

if(suc){
    
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

