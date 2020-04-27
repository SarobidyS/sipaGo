<?php
    include "../config.php";
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers:X-Requested-With , Content-type');

    $the_name = file_get_contents('php://input');

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
    //echo $rawJson;

    $link = mysqli_connect("localhost","root","123456","sipagoUsers") or die ("tsy tafa: " .mysqli_connect);

    $the_database = $the_name;
    
    $query = "SELECT * from $the_database";

    $res = mysqli_query($link, $query);

    $array_of_friend = [];

    $i = 0;

    while($row = mysqli_fetch_assoc($res)){
        $array_of_friend[$i] =$row[nameFriend];
        $i++;
    }

    $array_alefa = array_diff($arrayOfUsername , $array_of_friend);

    $raw_object = json_encode($array_alefa);

    echo "$raw_object";


?>