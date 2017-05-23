window.onload = inicio;
var hijo = "";

function inicio() {

    var newWindow = document.getElementById("ventana");
    newWindow.addEventListener("click", ventana, false);

    var tamaño = document.getElementById("tamaños");
    tamaño.addEventListener("click", tamaños, false);

    var cuenta = document.getElementById("cuenta");
    cuenta.addEventListener("click", cuentaAtras, false);
};

function ventana() {
    hijo = window.open("examen.html", "examen");
}

function tamaños() {
    localStorage.setItem("anchura", screen.width);
    localStorage.setItem("altura", screen.height);
    var medidas = localStorage.getItem("anchura") + " " + localStorage.getItem("altura");

    console.log(localStorage.getItem("anchura") + " " + localStorage.getItem("altura"));

    return medidas;
}

function alturaAnchura(medidas) {
    if (medidas != null) {
        document.getElementById("tamañosExternos").innerHTML = medidas;
    }
}

function cuentaAtras() {

    do {
        var check = false;
        var atras = prompt("introduce un numero");

        if (!isNaN(atras) && atras > 0) {
            check = true;
        }
    } while (check == false);

    hijo.cuentaAtras(atras);

}