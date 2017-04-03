<?php

session_start();

$_SESSION["posicion"] = 0;
$imgRetos = array("retoMental" => array("url" => "retoMental.png", "respuesta" => "si"),
    "retoMental2" => array("url" => "retoMental2.jpg", "respuesta" => "no"));

$respRetos = array("si", "no");

$posicionImg = array("retoMental", "retoMental2");

if (!isset($_SESSION["usuarios"])) {
    $_SESSION["usuarios"] = array("alan" => array("nick" => "alan", "edad" => "20", "puntuacion" => 10, "intentos" => 0));
} else {
    $_SESSION["usuarios"];
}
$respuesta = "nada";

switch ($_SERVER['REQUEST_METHOD']) {

    case "PUT":

        $value = explode("/", $_SERVER['REQUEST_URI'][1]);
        $usuario = json_decode(file_get_contents("php://input"), false);

        $_SESSION["usuarios"][$usuario->nick] = $usuario;
        //$_SESSION["usuarios"][$usuario->nick]["intentos"] = $_SESSION["usuarios"][$usuario->nick]["intentos"]+1;

        $posicion = rand(0, sizeof($imgRetos) - 1);
        $_SESSION["posicion"] = $posicion;
        $respuesta = $imgRetos[$posicionImg[$posicion]]["url"];

        echo json_encode(["url" => $respuesta]);
        break;

    CASE "GET":

        $value = explode("/", $_SERVER['REQUEST_URI']);

        if (end($value) == "ranking") {
            echo json_encode($_SESSION["usuarios"]);
        }

        if (end($value) == "pregunta") {
            echo json_encode(["pregunta" => "¿Hay alguna imagen pareja a otra?"]);
        } else if (end($value) == "pista") {
            echo json_encode(["pista" => "Fíjate bien si son iguales..."]);
        } else if (end($value) == "si") {
            if ($imgRetos[$posicionImg[$_SESSION["posicion"]]]["respuesta"] == "si") {
                echo json_encode(["respuesta" => "has acertado!"]);
            } else {
                echo json_encode(["respuesta" => "te has equivocado!"]);
            }
        } else if (end($value) == "no") {
            if ($imgRetos[$posicionImg[$_SESSION["posicion"]]]["respuesta"] == "no") {
                echo json_encode(["respuesta" => "has acertado!"]);
            } else {
                echo json_encode(["respuesta" => "te has equivocado!"]);
            }
        }

        /*if (isset($_GET["image"])) {
            $posicion = rand(0, sizeof($imgRetos) - 1);
            $_SESSION["posicion"] = $posicion;
            $respuesta .= '"ruta":"' . $imgRetos[$posicion] . '"';
        } else if (isset($_GET["pregunta"])) {
            $respuesta .= '"pregunta": "¿Hay alguna imagen pareja a otra?"';
        } else if (isset($_GET["pista"])) {
            $respuesta .= '"pista" : "Fíjate bien si son iguales..."';
        } else if (isset($_GET["respuesta"])) {
            if ($respRetos[$_SESSION["posicion"]] == $_GET["respuesta"]) {
                $respuesta .= '"respuesta" : "acertado"';
            } else {
                $respuesta .= '"respuesta" : "incorrecto"';
            }
        }*/

        break;
}
