<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
// $rawData = {{"position":[{"lat":-18.915658,"lgn":47.551516},"title":"chicken"}],{"position":[{"lat":-18.915658,"lgn":47.551516},"title":"toasty"}]};
// echo $rawData

$rawObj = [ 'position' => [ "lat" => -18.915658, "lng" =>47.551516 ] , "title" => "Me" ];

$rawJson = json_encode($rawObj);

echo "$rawJson";

?>
