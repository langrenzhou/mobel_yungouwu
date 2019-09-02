<?php
header("content-type:text/html;charset=utf-8");
$mysqli=new mysqli('localhost','root','root','db_mbl');
if($mysqli->connect_errno){
    die();
}
$type_id=$_GET['type_id'];
$index=$_GET['index'];
$pge=$_GET['page'];
if($pge==0){
    $page=0;
}else{
   $page=($pge-1)*30; 
}
$sql="select * from quqiugou where type_id=${type_id}";
$mysqli->query('set names utf8');
$result=$mysqli->query($sql);
while($row=mysqli_fetch_assoc($result)){
    $data[]=$row;
}
print_r(json_encode($data));
?>