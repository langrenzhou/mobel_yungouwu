<?php
    header("content-type:text/html;charset=utf8");
    $conn=new Mysqli("localhost","root","root","db_mbl");
    Mysqli_set_charset($conn,'utf8');
    if($conn->connect_errno){
        die("数据库连接失败！");
    }
    $start=$_GET["start"];
    $listNum=$_GET["listnum"];
    $sql="select * from t_mfglike limit {$start},{$listNum}";
    $res=$conn->query($sql);
    while($row=Mysqli_fetch_assoc($res)){
        $arr[]=$row;
    }
    $result=json_encode($arr);
    echo $result;
?>
