<?php

    include "../configDBUser.php";

    header("Access-Control-Allow-Origin: *");

    header("Access-Control-Allow-Headers: X-Requested-With, Content-type");


    $data = file_get_contents("php://input");

    $dataArray = json_decode($data);

    $query = "SELECT * from $dataArray[0]";

    $res = mysqli_query($link,$query);

    $arrayOfName = [];

    $i = 0;
    while($row = mysqli_fetch_assoc($res)){
        $arrayOfName[$i] = $row[nameFriend];
        $i++;
    }

    echo $arrayOfName[0];

    for( $i = 0 ; $i <  sizeof($arrayOfName) ; $i++){
        $query = "UPDATE $arrayOfName[$i] SET hisLat=$dataArray[1],hisLgn=$dataArray[2] WHERE nameFriend='$dataArray[0]'";
        mysqli_query($link,$query);
    }