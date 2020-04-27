<?php 

    include 'config.php';

    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Headers:X-Requested-With , Content-type');

    $the_name = file_get_contents('php://input');

    //$the_name = strtolower($the_name);

    $link = mysqli_connect("localhost","root","123456","sipagoUsers") or die ("tsy tafa: " .mysqli_connect);

    $the_database = $the_name;
    
    $query = "SELECT * from $the_database";

    $res = mysqli_query($link, $query);

    $array_of_friend = [];
    $array_of_mahita = [];
    $array_of_is_Hita = [];
    
    $i = 0;
    $j = 0;

    while($row = mysqli_fetch_assoc($res)){
        $array_of_friend[$i] =$row[nameFriend];
        $array_of_is_Hita[$i] = $row[isMahita];
        $i++;
    }

    foreach($array_of_friend as $friend){
        $query = "SELECT * from $friend WHERE(nameFriend = '$the_database')";
        $res = mysqli_query($link , $query);
        while($row = mysqli_fetch_assoc($res)){
            $array_of_mahita[$j] = $row[isMahita];
        }
        $j++;
    }
    mysqli_close($link);

    $array_of_object = [];
    $k = 0;

    foreach($array_of_mahita as $mahita){
        if($mahita == 0){
            $array_of_mahita[$k] = FALSE;
        }
        else{
            $array_of_mahita[$k] = True;
        }
        $k++;
    }
    $k = 0;
    

    $k = 0;

    foreach($array_of_is_Hita as $mahita){
        if($mahita == 0){
            $array_of_is_Hita[$k] = FALSE;
        }
        else{
            $array_of_is_Hita[$k] = True;
        }
        $k++;
    }

    mysqli_close($link);

    $k = 0;

    foreach($array_of_friend as $friend){
        $array_of_object[$k] = ["name"=>$array_of_friend[$k] , "isMahita" => $array_of_mahita[$k] , "isHitako" => $array_of_is_Hita[$k]];
        $k++;
    }

    $objectFriend = json_encode($array_of_object);

    echo "$objectFriend";