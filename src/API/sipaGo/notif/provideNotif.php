<?php

    $link = mysqli_connect("localhost","root","123456","sipagoNotif") or die ("tsy nety taf connect " .mysqli_connect);

    header("Access-Control-Allow-Origin: *");

    header("Access-Control-Allow-Headers:X-Requested-With, Content-type");

    $data = file_get_contents("php://input");

    $query = "SELECT * from $data;";

    $res = mysqli_query($link , $query);

    $arrayOfNotif = [];

    $arrayOfOui = [];

    $i = 0;

    while($row = mysqli_fetch_assoc($res)){
        $arrayOfNotif[$i] = $row[nameNotif];
        $arrayOfOui[$i] = $row[typeOf];
        $i++;
    }

    $k = 0;

    foreach($arrayOfOui as $oui){
        if($oui == 0){
            $arrayOfOui[$k] = FALSE;
        }
        else{
            $arrayOfOui[$k] = True;
        }
        $k++;
    }

    $array_of_object = [];

    $k = 0;

    foreach($arrayOfNotif as $notif){
        $array_of_object[$k] = ["name"=>$arrayOfNotif[$k] , "type" => $arrayOfOui[$k]];
        $k++;
    }

    mysqli_close($link);

    $objectNotif = json_encode($array_of_object);

    echo "$objectNotif";