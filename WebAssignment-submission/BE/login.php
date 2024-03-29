<?php

error_reporting(E_ALL);
ini_set('display_errors',1);
header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json;charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-Width");
$data=json_decode(file_get_contents("php://input"));

$username= $data->taiKhoan;
$password= md5($data->matKhau);
$db_conn= mysqli_connect("localhost","root", "", "test");
if($db_conn===false)
{
  die("ERROR: Could Not Connect".mysqli_connect_error());
}
$result= mysqli_query($db_conn,"SELECT * FROM account where username='".$username."' AND password='".$password."'");
$num=mysqli_num_rows($result);
$rs=mysqli_fetch_array($result);
if($num>=1)
{
    http_response_code(200);
    $outp="";
        $outp.= '{"username":"'. $rs["username"] . '",'.'"role":"'. $rs["role"] . '",  ' . '"image":"' . $rs["image"] . '", ';
        $outp.='"Status":"200"}';
    echo $outp;
    
}else{
    http_response_code(202);
}







?>