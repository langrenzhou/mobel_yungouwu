$(function () {
    // IP定位
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(116.331398, 39.897445);
    var geoc = new BMap.Geocoder();
    map.centerAndZoom(point, 12);

    function myFun(result) {
        console.log(result)
        setLocation(result.center);
    }
    var myCity = new BMap.LocalCity();
    myCity.get(myFun);

    //获取地理位置的函数
    function setLocation(point) {
        // geoc.AddressComponent(point,function(rs){
        geoc.getLocation(point, function (rs) {

            var addComp = rs.addressComponents;
            var result = addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber;
            console.log(result);
            $(".localAddress>span").html(result)
        });
    }
})