<?php
header('content-type:text/html;charset=utf-8');
$mysqli = new Mysqli("localhost","root","root","db_mbl");
$mysqli->query('set names utf8');
if($mysqli->connect_errno){
    die();
}
$n=$_POST["up_count"];
$m=$n+9;
$sql = "select * from t_recommend where id>={$n}&&id<={$m}";
$result = $mysqli->query($sql);
while($row = Mysqli_fetch_assoc($result)){
    $data[] = $row;
}
print_r(json_encode($data));

?>