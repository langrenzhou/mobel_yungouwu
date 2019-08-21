// var arr=[];
$('.searchHot>li').each(function(){
	var hotname = $(this);
	console.log(hotname);
    // arr.push(hotname);
})
// console.log(arr);
var sql ='';
for(var i = 0; i < arr.length; i++){
    var pro = arr[i];
    sql += `insert into t_search name values ('${pro});`;
}
console.log(sql);