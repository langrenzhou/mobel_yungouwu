<?php
header("content-type:text/html;charset=utf-8");
$mysqli = new mysqli("localhost","root","root","db_mbl");
$mysqli->query("set names utf8");
if ($mysqli->connect_errno) {
    die();
};
$sql = "SELECT title from t_list_dc";
$res = $mysqli->query($sql);
while ($row = $res->fetch_assoc()) {
    $result[] = $row;
};
echo json_encode($result);