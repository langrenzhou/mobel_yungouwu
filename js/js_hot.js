var arr=[];
$('.product-list .ovfs-item').each(function(){
    var img_url = $(this).find('img').attr("src");
    var discount1 = $(this).find('.tag')[0];
    if(discount1){
        var discount = $(this).find('.tag')[0].innerText;
    }
    var price=$(this).find(".price").text();
    var comprice=$(this).find(".reference").children("span").text();
    var goods = {};
    goods.img_url = img_url;
    goods.discount = discount;
    goods.price = price;
    goods.comprice = comprice;
    arr.push(goods);
})
console.log(arr);

var sql ='';
for(var i = 0; i < arr.length; i++){
    var pro = arr[i];
    sql += `insert into t_hot (discount,price,img_url,comprice) values ('${pro.discount}','${pro.price}','${pro.img_url}','${pro.comprice}');`;
}
console.log(sql);