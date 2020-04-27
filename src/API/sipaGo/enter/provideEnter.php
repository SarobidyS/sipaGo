<?php
	header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Requested-With , Content-type");

    include "../config.php";
  

    $res = mysqli_query($link, 'SELECT * from userData');

    $arrayOfUsername = [];
    $arrayOfMdp = [];

    $i = 0;

    while ( $row = mysqli_fetch_assoc($res)){
        $arrayOfUsername[$i] = $row[id];
        $arrayOfMdp[$i] = $row[mdp];
        $i++; 
    }
     
    $rawArray = array_combine($arrayOfUsername,$arrayOfMdp);

    $rawObj = [
        ["username" => $arrayOfUsername],
        ["mdp" => $arrayOfMdp]
    ];

    $rawJson = json_encode($rawObj);
    echo $rawJson;


?>
