<?php
include "../config.php";

header("Access-Control-Allow-Origin: *");
// header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With , Content-type");
//manddray input
$dataPosition = file_get_contents('php://input');



// $theLat = 1;
$justData = json_encode($dataPosition);

//echo $dataPosition;

$arrayOfPositionComma = preg_split("/\,/",$dataPosition);


$mdpValue = "";
//get the longitude
for ($i=0 ; $i < strlen($arrayOfPositionComma[1]) ; $i++){
    if($arrayOfPositionComma[1][$i] == " " || $arrayOfPositionComma[1][$i] == "]" || $arrayOfPositionComma[1][$i] == "[" ){
        
    }
    else{
        $mdpValue .= $arrayOfPositionComma[1][$i];
    }
}
//get the latitude
for ($i=0 ; $i < strlen($arrayOfPositionComma[0]) ; $i++){
    if($arrayOfPositionComma[0][$i] == " " || $arrayOfPositionComma[0][$i] == "]" || $arrayOfPositionComma[0][$i] == "[" ){
        
    }
    else{
        $usernameValue .= $arrayOfPositionComma[0][$i];
    }
}
$theUsername = $usernameValue;
$theMdp = $mdpValue;
//test pour le response
echo $theMdp;

$query = "INSERT INTO userData (id,mdp,providePosition,personWhoCanSee) VALUES($theUsername,$theMdp,true,'sdfcxd')" ;

mysqli_query($link , $query);

