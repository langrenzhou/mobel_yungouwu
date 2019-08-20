// 生成6位随机验证码
function random_code() {
    let code1 = String(Math.floor(Math.random() * 10));
    let code2 = String(Math.floor(Math.random() * 10));
    let code3 = String(Math.floor(Math.random() * 10));
    let code4 = String(Math.floor(Math.random() * 10));
    let code5 = String(Math.floor(Math.random() * 10));
    let code6 = String(Math.floor(Math.random() * 10));
    let code = code1 + code2 + code3 + code4 + code5 + code6;
    return code;
}
