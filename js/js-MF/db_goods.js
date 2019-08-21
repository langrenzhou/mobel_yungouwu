var arr = [];
$('.product-list li').each(function(){
    var img_url = $(this).find('.square-lazy').attr('src');
    var title = $(this).find('.desc').text();
    var discount1 = $(this).find('.flex-m div:nth-child(2)')[0];
    if(discount1){
        var discount = $(this).find('.flex-m div:nth-child(2)')[0].innerText;
    }
    var price = $(this).find('.flex-m div:first-child')[0].innerHTML;
    var similar = $(this).find('.similar').text();

    var goods = {};
    goods.img_url = img_url;
    goods.title = title;
    goods.price = price.slice(1);
    goods.discount = discount;
    goods.similar = similar;
    arr.push(goods);
})
console.log(arr);
var sql ='';
for(var i = 0; i < arr.length; i++){
    var pro = arr[i];
    sql += `insert into t_mfglike (similar,img_url,title,price,discount) values ('${pro.similar}','${pro.img_url}','${pro.title}','${pro.price}','${pro.discount}');`;
}
console.log(sql);