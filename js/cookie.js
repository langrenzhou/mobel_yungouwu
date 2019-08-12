// 设置cookie方法封装
function setCookie(name, val, expday) {
    if (expday) {
        var date = new Date();
        date.setTime(date.getTime() + expday * 24 * 3600 * 1000);
        document.cookie = name + "=" + val + '; expires=' + date.toUTCString();
    } else {
        document.cookie = name + "=" + val;
    }
}

// 获取cookie方法的封装
function getCookie(name) {
    var cookie = document.cookie;
    var cookieArr = cookie.split('; ');
    var cname = name + '=';
    for (var i = 0; i < cookieArr.length; i++) {
        if (cookieArr[i].indexOf(cname) !== -1) {
            var result = cookieArr[i].slice(cname.length);
            return result;
        }
    }
}

// 删除cookie方法的封装
function delCookie(name, val, expday) {
    var date = new Date();
    date.setTime(date.getTime() - expday * 24 * 3600 * 1000);
    document.cookie = name + "=" + val + '; expires=' + date.toUTCString();
}

