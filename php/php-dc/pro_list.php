<?php
$WHERE = ' WHERE ';
$page = $_GET[page];
if ($page == '') {
    $page = 0;
}
$sum = " limit {$page} , 9 ";

// 下面是综合属性筛选
$text = 'SELECT img_url,title,price,reply,praise,category,discount from t_pro_list';
// 下面是通过品牌来选择的
if ($_GET[num]) {
    $sqltext = 'type_id=';
    $text = $text . $WHERE . $sqltext . $num;
};
// 下面是通过销量来筛选的
if ($_GET[reply] == 1) {
    $sqlreply = ' ORDER BY reply DESC ';
    $text = $text . $sqlreply;
};
// 下面是通过价格来筛选
if ($_GET[price] == 1) {
    $sqlprice = ' ORDER BY price ASC ';
    $text = $text . $sqlprice;
} elseif ($_GET[price] == 2) {
    $sqlprice = ' ORDER BY price DESC ';
    $text = $text . $sqlprice;
};

header("content-type:text/html;charset=utf-8");
$mysqli = new mysqli("localhost", "root", "root", "db_mbl");
$mysqli->query("set names utf8");
if ($mysqli->connect_errno) {
    die();
};

$sql = $text . $sum;
$res = $mysqli->query($sql);
while ($row = $res->fetch_assoc()) {
    $result[] = $row;
};
echo json_encode($result);
