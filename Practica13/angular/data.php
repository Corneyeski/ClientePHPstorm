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

        if ($_SESSION["usuarios"][$usuario->nick]) {
            $_SESSION["usuarios"][$usuario->nick]->nick = $usuario->nick;
            $_SESSION["usuarios"][$usuario->nick]->edad = $usuario->age;
            $_SESSION["usuarios"][$usuario->nick]->intentos += 1;
        } else {
            $_SESSION["usuarios"][$usuario->nick] = $usuario;
            $_SESSION["usuarios"][$usuario->nick]->intentos += 1;
        }

        $posicion = rand(0, sizeof($imgRetos) - 1);
        $_SESSION["posicion"] = $posicion;
        $respuesta = $imgRetos[$posicionImg[$posicion]]["url"];

        echo json_encode(["url" => $respuesta, "user" => $_SESSION["usuarios"][$usuario->nick]]);
        break;

    CASE "GET":

        $value = explode("/", $_SERVER['REQUEST_URI']);

        if (end($value) == "ranking") {
            if (empty($_SESSION["usuarios"])) {
                echo json_encode(["respuesta" => $_SESSION["usuarios"]]);
            } else {
                echo json_encode(["respuesta" => $_SESSION["usuarios"]]);
            }
        }

        if (end($value) == "pregunta") {
            echo json_encode(["pregunta" => "¿Hay alguna imagen pareja a otra?"]);
        } else if (end($value) == "pista") {
            echo json_encode(["pista" => "Fíjate bien si son iguales..."]);
        } else if (end($value) == "si") {
            if ($imgRetos[$posicionImg[$_SESSION["posicion"]]]["respuesta"] == "si") {
                $_SESSION["usuarios"][$usuario->nick]->puntuacion += 1;
                echo json_encode(["respuesta" => "has acertado!"]);
            } else {
                echo json_encode(["respuesta" => "te has equivocado!"]);
            }
        } else if (end($value) == "no") {
            if ($imgRetos[$posicionImg[$_SESSION["posicion"]]]["respuesta"] == "no") {
                $_SESSION["usuarios"][$usuario->nick]->puntuacion += 1;
                echo json_encode(["respuesta" => "has acertado!"]);
            } else {
                echo json_encode(["respuesta" => "te has equivocado!"]);
            }
        }

        break;

    case "DELETE":

        $value = explode("/", $_SERVER['REQUEST_URI']);

        unset($_SESSION["usuarios"][end($value)]);

        if (empty($_SESSION["usuarios"])) {
            echo json_encode(["respuesta" => $_SESSION["usuarios"]]);
        } else {
            echo json_encode($_SESSION["usuarios"]);
        }
        break;
}
