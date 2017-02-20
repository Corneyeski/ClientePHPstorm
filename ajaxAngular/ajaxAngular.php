<?php

$palabras = array("palabra","cristian","programacion","asignatura");

if(isset($_GET['inicio'])){

    $desorden= shuffle ($palabras);
    $_SESSION['palabra'] = $desorden[0];
    echo '{"palabra" : "' . $palabras[0] . '"}';
}else{
    if(isset($_GET['letra'])){
        if(strpos($_GET['letra'],$_SESSION['inicio'])){
            echo strpos($_GET['letra'],$_SESSION['inicio']);
        }
    }
}