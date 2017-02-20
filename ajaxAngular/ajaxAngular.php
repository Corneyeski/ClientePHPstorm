<?php
session_start();
$palabras = array("asignatura","cristian","programacion","palabra");
$_SESSION['palabra'];
if(isset($_GET['inicio'])){

    shuffle ($palabras);
    $_SESSION['palabra'] = $palabras[0];

    echo '{"palabra" : "' . $palabras[0] . '"}';
}else{
    if(isset($_GET['letra'])){

        $arrayl = str_split($_SESSION['palabra']);
        $arrayIguales = [];
        $contador = count($arrayl);

        for($i = 0; $i < $contador; $i++){
            if($_GET['letra'] == $arrayl[$i]){
                $arrayIguales[] = $i;
            }
        }
//        echo $arrayl;
//        echo '{"palabra" : "' . $_SESSION['palabra'] . '"}';
        echo json_encode($arrayIguales);
    }
}