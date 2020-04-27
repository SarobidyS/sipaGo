<?php

    $link = mysqli_connect("localhost","root","123456","sipagoNotif") or die ("tsy nety taf connect " .mysqli_connect);

    header("Access-Control-Allow-Origin: *");

    header("Access-Control-Allow-Headers:X-Requested-With, Content-type");

    $data = file_get_contents("php://input");

    $dataArray = json_decode($data);

    $link = mysqli_connect("localhost","root","123456","sipagoNotif") or die ("tsy nety taf connect " .mysqli_connect);

    $query = "INSERT INTO $dataArray[1] (nameNotif , typeOf) VALUES('$dataArray[0]',1)";

    mysqli_query($link , $query);

    $query = "DELETE from $dataArray[0] where nameNotif='$dataArray[1]'";

    mysqli_query($link , $query);

    mysqli_close($link);