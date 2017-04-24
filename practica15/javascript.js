window.onload = inicio;
var OSName = "Unknown OS";

function inicio() {
    os();
    var datos = new Array();

    datos[0] = Number.MAX_VALUE;
    datos[1] = Number.MIN_VALUE;
    datos[2] = screen.width;
    datos[3] = screen.height;
    datos[4] = document.body.scrollWidth;
    datos[5] = document.body.scrollHeight;
    datos[6] = window.location;
    datos[7] = window.location.toString().substring(document.location.toString().lastIndexOf("/") + 1);
    datos[8] = Math.floor((Math.random() * 200) + 1);
    datos[9] = OSName;

    var div = document.getElementById("listaPropiedades");
    var ul = document.createElement("UL");

    for (var key in datos) {
        var li = document.createElement("LI");

        li.innerHTML = datos[key];
        ul.appendChild(li);
    }
    div.appendChild(ul);
};

function os() {

    if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
    if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
    if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
    if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";
}

function nombreUsuario() {

    var valor = localStorage.getItem("nomValor");

}