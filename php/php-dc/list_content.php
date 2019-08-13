<?php
if (num) {
    $type_id = $_GET[num];
};
if (key) {
    $pro_id = $_GET[key];
};
header("content-type:text/html;charset=utf-8");
$mysqli = new mysqli("localhost", "root", "root", "db_mbl");
$mysqli->query("set names utf8");
if ($mysqli->connect_errno) {
    die();
};
$sql = "SELECT img_url,pro_title from t_slid_content where type_id = $type_id and pro_id=$pro_id";
$res = $mysqli->query($sql);
while ($row = $res->fetch_assoc()) {
    $result[] = $row;
};
echo json_encode($result);
