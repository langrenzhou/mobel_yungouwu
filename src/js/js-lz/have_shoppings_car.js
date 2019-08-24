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
            $(".account_num").text("("+sum_pro_num+")");
        })
        $minus.on("tap", function () {
            if (pro_num == 1) {
                last_sum = last_sum;

                sum_pro_num=sum_pro_num;

                pro_num = pro_num;
            } else if (pro_num > 1) {
                pro_num--;

                last_sum -= Number(Number(unit_price).toFixed(2));

                sum_pro_num--;
            }
            $num.text(pro_num);
            $(".total_price").text(last_sum.toFixed(2));
            $(".account_num").text("("+sum_pro_num+")");
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
$(".account_num").text("("+sum_pro_num+")");

// 选择按钮间的关系

