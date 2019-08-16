<?php
header('content-type:text/html;charset=utf-8');
$mysqli = new Mysqli("localhost","root","root","db_mbl");
$mysqli->query('set names utf8');
if($mysqli->connect_errno){
    die();
}
$start=$_POST["_start"];
$end=$_POST["_end"];
$sql = "select * from t_basket where id>={$start}&&id<={$end}";
$result = $mysqli->query($sql);
while($row = Mysqli_fetch_assoc($result)){
    $data[] = $row;
}
print_r(json_encode($data));
?>