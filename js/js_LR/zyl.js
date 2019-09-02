;
(function () {
    var timer
    function zyl() {
        //先获取到这个html
        var html = document.documentElement;
        //获取到html的宽度也就是设备的宽度
        var width = html.clientWidth
        // if (width > 750) {
        //     width = 750
        // }
        //这个设备的宽度/7.5是根据一个公式算出来的.公式是这样的
        //因为那个html的font-size：100px;是固定不变的，公式如下：拿到的设计稿的宽度/设备的宽度=100px/要设置html的font-size的值
        html.style.fontSize = width / 7.5 + 'px'
    }
    zyl()
    window.onresize=function () {      
        timer && clearTimeout(timer)
        timer = setTimeout(function () {
            zyl()
        },100)
    }


})()