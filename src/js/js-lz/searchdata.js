$(function () {
    var w_datas = [];
    $(".selling-basket").each(function () {
        var datas = [];
        $(this).children(".selling-bgimg02").each(function () {
            var _src = $(this).find("img").attr("src");
            var _name = $(this).find(".line-one").text();
            var _intro = $(this).find(".line-two").text();
            var _time = $(this).find(".line-three").text();
            var data = {};
            data.d_src = _src;
            data.d_name = _name;
            data.d_intro = _intro;
            data.d_time = _time;
            datas.push(data);
        })
        w_datas.push(datas);
    })
    console.log(w_datas);
    var sql = "";
    for (var i = 0; i < w_datas.length; i++) {
        for (var j = 0; j < w_datas[i].length; j++) {
            sql += `insert into t_basket (img_src,name,intro,time) values ('${w_datas[i][j].d_src}','${w_datas[i][j].d_name}','${w_datas[i][j].d_intro}','${w_datas[i][j].d_time}');`;
        }
    }
    console.log(sql);

    var datas = [];
    $(".selling-basket:last-child").children(".selling-bgimg02").each(function () {
        var _src = $(this).find("img").attr("src");
        var _name = $(this).find(".line-one").text();
        var _intro = $(this).find(".line-two").text();
        var _time = $(this).find(".line-three").text();
        var data = {};
        data.d_src = _src;
        data.d_name = _name;
        data.d_intro = _intro;
        data.d_time = _time;
        datas.push(data);
    })
    console.log(datas);
    var sql = "";
    for (var i = 0; i < datas.length; i++) {
        sql += `insert into t_basket (img_src,name,intro,time) values ('${datas[i].d_src}','${datas[i].d_name}','${datas[i].d_intro}','${datas[i].d_time}');`;
    }
    console.log(sql);
})