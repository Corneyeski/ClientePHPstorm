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

    var nombreUser = document.getElementById("nombreUser");
    nombreUser.addEventListener("click", nombreUsuario, false);

    var titulo = document.getElementById("titulo");
    titulo.addEventListener("click", tituloPagina, false);

    var newWindow = document.getElementById("ventana");
    newWindow.addEventListener("click", ventana, false);

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

    var valor = localStorage.getItem("nombre_usuario");
    if (valor == null || valor == "") {
        var nameUser = prompt("Nombre de usuario");
        localStorage.setItem("nombre_usuario", nameUser);
    }
}

function tituloPagina() {
    do {
        var pageTitel = prompt("Titulo pagina");

    } while (pageTitel == null || pageTitel == "");

    pageTitel.toUpperCase();
    document.title = pageTitel;
    localStorage.setItem("Titulo_pagina", pageTitel);
}

function ventana() {
    do {
        var check = false;
        var valor = prompt("introduce dos numeros separados por comas entre 200 y 800");
        var nums = valor.split(",");

        if (nums.length == 2) {
            if (nums[0] < 800 && nums[0] > 200 && nums[1] > 200 && nums[1] < 800) {
                check = true;
            }
        }
    } while (check == false);

    window.open("ventana.html", "nueva ventanika", "width=" + Math.floor((Math.random() * nums[0]) + nums[1])
        + ",height=" + Math.floor((Math.random() * nums[0]) + nums[1]) + "");
}

function loadReady() {
    var cargado = document.getElementById("cargado");
    cargado.innerHTML = "<h1>Cargado con exito</h1>";

    return localStorage.getItem("nombre_usuario");
}