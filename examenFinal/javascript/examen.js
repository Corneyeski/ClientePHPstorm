window.onload = inicio;
var inter;
var count = 0;

function inicio() {
    var div = document.getElementById("examen");
    div.innerHTML = window.opener.tamaños();

    var newWindow = document.getElementById("medidas");
    newWindow.addEventListener("click", medidas, false);
}

function medidas() {

    window.opener.alturaAnchura(localStorage.getItem("anchura") + " " + localStorage.getItem("altura"));
}

function cuentaAtras(atras) {

    count = atras;

    inter = setInterval(function () {
        document.getElementById("cuenta").innerHTML = count;
        count -= 1;
        if (count < 1) {
            window.close();
        }
    }, 1000);
}