<?php

    include "../configDBUser.php";

    //pour enbaler le CORS
    header("Access-Control-Allow-Origin: *");

    header("Access-Control-Allow-Headers: X-Requested-With, Content-type");

    $data = file_get_contents("php://input");

    $dataArray = json_decode($data);
    echo "$dataArray[0]";

    $dbname = $dataArray[0];
    $friendsName = $dataArray[1];
    $false = False;


    $query = "INSERT INTO $dbname (nameFriend,hisLat,hisLgn,isMahita) VALUES('$friendsName', 0,0,0) ON DUPLICATE KEY UPDATE hisLat=0, hisLgn=0 , isMahita=0";
    

    mysqli_query($link,$query);

    mysqli_close($link);

    // $link = mysqli_connect("localhost","root","123456","sipagoNotif") or die ("tsy nety taf connect " .mysqli_connect);

    // $query = "INSERT INTO $friendsName (nameNotif , typeOf) VALUES('$dbname',0)";

    // mysqli_query($link , $query);

    // mysqli_close($link);