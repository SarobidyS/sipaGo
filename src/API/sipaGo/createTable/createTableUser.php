<?php 

    include "configDBUser.php";

    header("Access-Control-Allow-Origin: *");

    header("Access-Control-Allow-Headers:X-Requested-With, Content-type");

    $data = file_get_contents("php://input");

    echo "$data";

    $query = "CREATE TABLE $data (
        nameFriend VARCHAR(255),
        hisLat FLOAT,
        hisLgn FLOAT,
        isMahita BOOLEAN,
        PRIMARY KEY(nameFriend)
    )";

    mysqli_query($link,$query);

    mysqli_close($link);

    $link = mysqli_connect("localhost","root","123456","sipagoPosition") or die ("tsy tafa: " .mysqli_connect);
       
    $query = "CREATE TABLE $data (
        id INT,
        lat FLOAT,
        lgn FLOAT,
        PRIMARY KEY(id)
    )";

    mysqli_query($link , $query);

    $query = "INSERT into $data(id,lat,lgn) VALUES(1,14,14)";

    mysqli_query($link,$query);

    mysqli_close($link);

    $link = mysqli_connect("localhost","root","123456","sipagoNotif") or die ("tsy nety taf connect " .mysqli_connect);

    $query = "CREATE TABLE $data (
        nameNotif VARCHAR(255),
        typeOf INT,
        PRIMARY KEY(nameNotif)
    )";

    mysqli_query($link , $query);

    mysqli_close($link);