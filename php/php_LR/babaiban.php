<?php
header("content-type:text/html;charset=utf-8");
$mysqli=new mysqli('localhost','root','root','db_mbl');
if($mysqli->connect_errno){
    die();
}
$sql="select * from two";
$mysqli->query('set names utf8');
$result=$mysqli->query($sql);
while($row=mysqli_fetch_assoc($result)){
    $data[]=$row;
}
print_r(json_encode($data));
?>