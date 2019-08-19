$("a").tap(function () {
    $(this).css("textDecoration", "none");
})

// 验证用户输入手机号
$("#u_input").focus(function(){
   var val= $(this).val();
   console.log(val);
   var reg=/[1][3-9][\d]{9}/;
   if(reg.test(val)){
       $(".go_next i").addClass("go_next_color")
   }else{
       $(".error_tips").show();
   }
})




var mark = true;
$(".protocol").tap(function () {
    if (mark) {
        $(this).children("i").removeClass("iconduihao");
        mark = false;
    }
    $(this).children("i").addClass("iconduihao");
    mark = true;
})

