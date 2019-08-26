var arr = [];
$('.page-content').children('.super-group').children("div").eq(4).children(".item-list").children("ul").children("li").each(function(){
    var big_img_url = $(this).find("img").attr('src');
    var title = $(this).find(".list-name").text();

    var expiration1=$(this).find(".ticket").text();
    if(expiration1){
        var expiration=$(this).find(".ticket").text();
    }
    var comPrice=$(this).find(".list-money").text();
    var price=$(this).find(".xiangou").text();
    var buy_num=$(this).find(".xiangou").children("span").children("i").text();
    var goods = {};
    goods.big_img_url = big_img_url;
    goods.title = title;
    goods.expiration =expiration;
    goods.comPrice =comPrice;
    goods.price =price.slice(1,6);
    goods.buy_num =buy_num;
    arr.push(goods);
})
console.log(arr);
var sql ='';
for(var i = 0; i < arr.length; i++){
    var pro = arr[i];
    sql += `insert into t_discount (img_url,title,discount,comPrice,price,buy_num,type_id) values ('${pro.big_img_url}','${pro.title}','${pro.expiration}','${pro.comPrice}','${pro.price}','${pro.buy_num}','10');`;
}
console.log(sql);