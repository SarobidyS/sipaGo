<?php
include "config.php";

header("Access-Control-Allow-Origin: *");

header("Access-Control-Allow-Headers:X-Requested-With , Content-type");

$dataName = file_get_contents("php://input");

$nameArray = json_decode($dataName); 

// $rawData = {{"position":[{"lat":-18.915658,"lgn":47.551516},"title":"chicken"}],{"position":[{"lat":-18.915658,"lgn":47.551516},"title":"toasty"}]};
// echo $rawData
$res = mysqli_query($link, 'SELECT * from positionData');

$arrayOfFectherLat = [];
$arrayOfFectherLgn = [];

$i = 0;
while($row = mysqli_fetch_assoc($res)){
    $arrayOfFectherLat[$i] = $row[lat];
    $arrayOfFectherLgn[$i] = $row[lgn];
    $i++;
}

$link1 = mysqli_connect("localhost","root","123456","sipagoUsers") or die ("tsy tafiditra tanatinle bdd ispagoUser" . mysqli_connect);

$res2 = mysqli_query($link1, "SELECT * from $nameArray[0]");

$arrayOfPersonLat = [];
$arrayOfPersonLgn = [];
$arrayOfPersonName = [];

$j = 0;

while($row = mysqli_fetch_assoc($res2)){
    $arrayOfPersonName[$j]= $row[nameFriend];
    $arrayOfPersonLat[$j] = $row[hisLat];
    $arrayOfPersonLgn[$j] = $row[hisLgn];
    $j++;
}

$firstElement =  ['position' => [ "lat" => $arrayOfFectherLat[sizeof($arrayOfFectherLat)-1], "lgn" =>$arrayOfFectherLgn[sizeof($arrayOfFectherLat)-1] ] , "title" => "Me"];
$arrayOfPerson = [];
for($j = 0 ; $j < sizeof($arrayOfPersonName) ; $j++){
    $arrayOfPerson[$j] =  ['position' => [ "lat" => $arrayOfPersonLat[$j], "lgn" =>$arrayOfPersonLgn[$j] ] , "title" => "$arrayOfPersonName[$j]"];
}

$arrayGiven = array_push($arrayOfPerson,$firstElement);


$rawObj = [
    ['position' => [ "lat" => $arrayOfFectherLat[0], "lgn" =>$arrayOfFectherLgn[0] ] , "title" => "Me"],
    ['position' => [ "lat" => -18.915658, "lgn" =>47.551516 ] , "title" => "You"]
];

$rawJson = json_encode($arrayOfPerson);


//$rawJson = json_encode($arrayGiven);

echo "$rawJson";

?>
