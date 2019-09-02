FastClick.attach(document.body);
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
var bs_all = new BScroll('.bs_wrap', {
})

// shopping_car 合计计算
let all_pros_total_arr = [];
let all_pros_num_arr = [];
$(".bs_cont li").each(function () {
    let pros_total_arr = [];
    let pros_num_arr = [];
    $(this).find(".products").each(function () {
        let $unit_price = $(this).find(".unit_price");
        let unit_price = $unit_price.text();
        let $minus = $(this).find(".minus");
        let $num = $(this).find(".num");
        let $plus = $(this).find(".plus");
        let pro_num = $num.text();

        let pro_total = (unit_price * pro_num).toFixed(2);
        pros_total_arr.push(pro_total);
        pros_num_arr.push(pro_num);

        $plus.on("tap", function () {
            pro_num++
            $num.text(pro_num);

            last_sum += Number(Number(unit_price).toFixed(2));
            $(".total_price").text(last_sum.toFixed(2));

            sum_pro_num++;
            $(".account_num").text("(" + sum_pro_num + ")");
        })
        $minus.on("tap", function () {
            if (pro_num == 1) {
                last_sum = last_sum;

                sum_pro_num = sum_pro_num;

                pro_num = pro_num;
            } else if (pro_num > 1) {
                pro_num--;

                last_sum -= Number(Number(unit_price).toFixed(2));

                sum_pro_num--;
            }
            $num.text(pro_num);
            $(".total_price").text(last_sum.toFixed(2));
            $(".account_num").text("(" + sum_pro_num + ")");
        })
    })
    // console.log(pros_total_arr);
    // console.log(pros_num_arr);
    all_pros_total_arr.push(pros_total_arr);
    all_pros_num_arr.push(pros_num_arr);
})
// console.log(all_pros_total_arr)
// console.log( all_pros_num_arr)
let sum = 0;
all_pros_total_arr.join().split(",").forEach((num) => {
    sum += Number(num);
})
let last_sum = Number(sum.toFixed(2));
$(".total_price").text(last_sum.toFixed(2));

let sum_pro_num = 0;
all_pros_num_arr.join().split(",").forEach((num) => {
    sum_pro_num += Number(num);
})
// console.log(typeof sum_pro_num);
$(".account_num").text("(" + sum_pro_num + ")");

// 选择按钮间的关系
$(".bs_cont li").each(function () {
    let $this_li = $(this);
    let $classify_select = $this_li.find(".classify_select");
    let $product_select = $this_li.find(".product_select");
    let pro_sel_num = $product_select.length;
    // 
    $classify_select.on("tap", function () {
        let classify_check_state = $(this).prop("checked");
        $product_select.prop("checked", classify_check_state);
    })
    // 
    $product_select.on("tap", function () {
        let checked_num = $this_li.find(".product_select:checked").length;
        console.log(checked_num);
        if (pro_sel_num == checked_num) {
            $classify_select.prop("checked", true);
        }
        else {
            $classify_select.prop("checked", false);
        }
    })
})
// 全选
let classify_num = $(".classify_select").length;
$(".classify_select").on("tap", function () {    
let classify_check_num = $(".classify_select:checked").length;
    if (classify_num == classify_check_num) {
        $(".all_select").prop("checked", true);
    }
    else {
        $(".all_select").prop("checked", false);
    }
})

$(".product_select").on("tap", function () {
    let $product_box=$(this).parent().parent();
    let $ul=$(this).parent().parent().parent().parent();
    let cla_sel_num= $ul.find(".classify_select").length;
    let cla_sel_ch_num= $ul.find(".classify_select:checked").length;
    let pro_sel_num= $product_box.find(".product_select").length;
    let pro_sel_check_num= $product_box.find(".product_select:checked").length;
    let $classify_select=$product_box.prev().find(".classify_select");    
    if (pro_sel_num == pro_sel_check_num) {
       $classify_select.prop("checked", true);
    }
    else {
       $classify_select.prop("checked", false);
    }
    if (cla_sel_num ==cla_sel_ch_num) {
        $(".all_select").prop("checked", true);
     }
     else {
        $(".all_select").prop("checked", false);
     }    
})

$(".all_select").on("tap", function () {
    let check_state = $(this).prop("checked");
    $(".bs_cont li").each(function () {
        let $classify_select = $(this).find(".classify_select");
        let $product_select = $(this).find(".product_select");
        $classify_select.prop("checked", check_state);
        $product_select.prop("checked", check_state);
    })

})
