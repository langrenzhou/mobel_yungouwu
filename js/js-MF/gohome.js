$(function () {
    // 浏览器定位
    // var map = new BMap.Map("allmap");
    // var point = new BMap.Point(116.331398,39.897445);
    // map.centerAndZoom(point,12);

    // var geolocation = new BMap.Geolocation();
    // geolocation.getCurrentPosition(function(r){
    //     if(this.getStatus() == BMAP_STATUS_SUCCESS){
    //         var mk = new BMap.Marker(r.point);
    //         map.addOverlay(mk);
    //         map.panTo(r.point);
    //         alert('您的位置：'+r.point.lng+','+r.point.lat);
    //     }
    //     else {
    //         alert('failed'+this.getStatus());
    //     }        
    // });
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

    // 定位对象方案1 : 百度获取经纬度
    // var geoc = new BMap.Geocoder();
    // var geolocation = new BMap.Geolocation();
    // geolocation.getCurrentPosition(function (r) {
    //     if (this.getStatus() == BMAP_STATUS_SUCCESS) {
    //         var mk = new BMap.Marker(r.point);
    //         map.addOverlay(mk);
    //         map.panTo(r.point);
    //         console.log("当前位置经度为:" + r.point.lng + "纬度为:" + r.point.lat);
    //         setLocation(r.point);
    //     } else {
    //         console.log('无法定位到您的当前位置，导航失败，请手动输入您的当前位置！' + this.getStatus());
    //     }
    // }, { enableHighAccuracy: true });

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