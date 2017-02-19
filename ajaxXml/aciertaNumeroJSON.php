<?php
session_start();

$respuesta = '{';
if (isset($_GET['inicio'])) {
    $numeroAleatorio = rand(0, 10);

    $_SESSION['numeroOculto'] = $numeroAleatorio;
    $respuesta .= '"inicio":' . $_SESSION['numeroOculto'];

} else {
    $numeroUsuario = $_GET['numero'];
    $numeroOculto = $_SESSION['numeroOculto'];

    if ($numeroUsuario > $numeroOculto) {
        $respuesta .= '"encontrado":"no",';
        $respuesta .= '"mensaje": "Has introducido un valor demasiado alto"';

    } else {
        if ($numeroUsuario < $numeroOculto) {
            $respuesta .= '"encontrado":"no",';
            $respuesta .= '"mensaje": "Has introducido un valor demasiado bajo"';

        } else {
            $respuesta .= '"encontrado":"si",';
            $respuesta .= '"mensaje": "Exacto!"';
        }
    }
}
$respuesta .= '}';
echo($respuesta);
?>