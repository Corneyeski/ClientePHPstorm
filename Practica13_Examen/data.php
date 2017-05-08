<?php
session_start();
$_SESSION["posicion"] = 0;
$imgRetos = array("retoMental.png", "retoMental2.jpg");
$respRetos = array("si", "no");

/*
$_SESSION["acierto"];
$_SESSION["fallo"];
*/
if (!isset($_SESSION["acierto"])) {
    $_SESSION["acierto"] = 0;
} else {
    $_SESSION["acierto"];
}
if (!isset($_SESSION["fallo"])) {
    $_SESSION["fallo"] = 0;
} else {
    $_SESSION["fallo"];
}
$respuesta = '{';

if (isset($_GET["color"])) {
    $colores = array("red", "blue", "yellow");

    $posicion = rand(0, sizeof($colores) - 1);
    $respuesta .= '"color":"' . $colores[$posicion] . '"';
}

if (isset($_GET["image"])) {
    $posicion = rand(0, sizeof($imgRetos) - 1);
    $_SESSION["posicion"] = $posicion;
    $respuesta .= '"ruta":"' . $imgRetos[$posicion] . '"';
} else if (isset($_GET["pregunta"])) {
    $respuesta .= '"pregunta": "¿Hay alguna imagen pareja a otra?"';
} else if (isset($_GET["pista"])) {
    $respuesta .= '"pista" : "Fíjate bien si son iguales..."';
} else if (isset($_GET["respuesta"])) {
    if ($respRetos[$_SESSION["posicion"]] == $_GET["respuesta"]) {

        $_SESSION["acierto"] += 1;

        //$respuesta .= '"respuesta" : "acertado"';


        echo json_encode(["aciertos" => $_SESSION["acierto"], "fallo" => $_SESSION["fallo"], "respuesta" => "incorrecto"]);
        exit();
    } else {

        $_SESSION["fallo"] += 1;


        //$respuesta .= '"respuesta" : "incorrecto"';


        echo json_encode(["aciertos" => $_SESSION["acierto"], "fallo" => $_SESSION["fallo"], "respuesta" => "incorrecto"]);
        exit();
    }
}

$respuesta .= '}';

echo $respuesta;