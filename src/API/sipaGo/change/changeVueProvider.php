<?php

$link = mysqli_connect("localhost","root","123456","sipagoUsers") or die ("tsy tafa: " .mysqli_connect);

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:X-Requested-With , Content-type");

$data = file_get_contents("php://input");

$nameArray = json_decode($data);



$query = "SELECT * from $nameArray[0] WHERE nameFriend = '$nameArray[1]'";

$res = mysqli_query($link , $query);

while($row = mysqli_fetch_assoc($res)){
    $myBoolean = $row[isMahita];
}

if($myBoolean == 0){
    $myNewBoolean = 1;
}
else{
    $myNewBoolean = 0;
}

$query = "UPDATE $nameArray[0] SET isMahita = $myNewBoolean WHERE nameFriend = '$nameArray[1]'";

mysqli_query($link , $query);

mysqli_close($link);

echo "$nameArray[0]";