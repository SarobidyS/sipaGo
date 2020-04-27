<?php

include "config.php";

header("Access-Control-Allow-Origin: *");
// header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With , Content-type");
//manddray input
$dataPosition = file_get_contents('php://input');



// $theLat = 1;
// $justData = json_encode($dataPosition);
$dataDecodeToObject = json_decode($dataPosition);
//echo $dataPosition;

// $arrayOfPositionComma = preg_split("/\,/",$dataPosition);


// $numericValue = "";
// //get the longitude
// for ($i=0 ; $i < strlen($arrayOfPositionComma[1]) ; $i++){
//     if($arrayOfPositionComma[1][$i] == " " || $arrayOfPositionComma[1][$i] == "]" || $arrayOfPositionComma[1][$i] == "[" ){
        
//     }
//     else{
//         $numericValue .= $arrayOfPositionComma[1][$i];
//     }
// }
// //get the latitude
// for ($i=0 ; $i < strlen($arrayOfPositionComma[0]) ; $i++){
//     if($arrayOfPositionComma[0][$i] == " " || $arrayOfPositionComma[0][$i] == "]" || $arrayOfPositionComma[0][$i] == "[" ){
        
//     }
//     else{
//         $numericValueLat .= $arrayOfPositionComma[0][$i];
//     }
// }
// $theLongitude = $numericValue;
// $theLatitude = $numericValueLat;
//test pour le response
echo $dataDecodeToObject[0] .",". $dataDecodeToObject[1];

$theLatitude = $dataDecodeToObject[0];
$theLongitude = $dataDecodeToObject[1];
$theNameUsers = $dataDecodeToObject[2];

$link = mysqli_connect("localhost","root","123456","sipagoPosition") or die ("tsy tafa: " .mysqli_connect);

$query = "UPDATE $theNameUsers SET lat=$theLatitude ,lgn=$theLongitude WHERE id=1" ;

mysqli_query($link , $query);


?>
