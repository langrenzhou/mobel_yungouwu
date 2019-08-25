; (function () {
    function resizeEvent() {
        // 1、 获取 根元素对象 
        // $('html')
        var html = document.documentElement;
        // 2、 获取设备宽度
        var w = html.clientWidth;
        // 对设备宽度进行判断
        if (w > 750) {
            w = 750;
        }
        // 如果设计稿是 640px的，则把 7.5 改成 6.4
        //3、 计算字体大小
        html.style.fontSize = w / 7.5 + 'px';
    }
    resizeEvent();
    // 绑定 窗口改变事件
    var timer;
    window.onresize = function () {
        timer && clearTimeout(timer);
        // 间隔指定时间执行代码
        timer = setTimeout(resizeEvent, 300);
    }
})()

