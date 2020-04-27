<?php

include 'config.php';

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers:X-Requested-With , Content-type');

$dataInput = file_get_contents('php://input');

$nameArray = json_decode($dataInput);

$link = mysqli_connect("localhost", "root", "123456", "sipagoPosition") or die("tsy tafa: " . mysqli_connect);

$query = "SELECT * from $nameArray[0]";

$res = mysqli_query($link, $query);

$lat = [];

$lgn = [];

while ($row = mysqli_fetch_assoc($res)) {
    $lat[0] = $row[lat];
    $lgn[0] = $row[lgn];
}

$query = "SELECT * from $nameArray[1]";

$res = mysqli_query($link, $query);

while ($row = mysqli_fetch_assoc($res)) {
    $lat[1] = $row[lat];
    $lgn[1] = $row[lgn];
}

mysqli_close($link);

$arrayOfPerson[0] =  ['position' => ["lat" => $lat[0], "lgn" => $lgn[0]], "title" => "$nameArray[0]"];

$arrayOfPerson[1] =  ['position' => ["lat" => $lat[1], "lgn" => $lgn[1]], "title" => "$nameArray[1]"];

$rawJson = json_encode($arrayOfPerson);

echo "$rawJson";
