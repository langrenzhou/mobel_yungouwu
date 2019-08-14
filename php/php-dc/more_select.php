<?php
$num_id = $_GET[num];
header("content-type:text/html;charset=utf-8");
$mysqli = new mysqli("localhost", "root", "root", "db_mbl");
$mysqli->query("set names utf8");
if ($mysqli->connect_errno) {
    die();
};
$sql = "SELECT a.title,b.img_url,b.pro_title,b.pro_id FROM  t_list_dc AS a, t_slid_content AS b WHERE a.type_id=b.type_id and b.type_id={$num_id}";
$res = $mysqli->query($sql);
while ($row = $res->fetch_assoc()) {
    $result[] = $row;
};
echo json_encode($result);
