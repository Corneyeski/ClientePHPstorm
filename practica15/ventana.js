window.onload = inicio;

var count = 0;
var turno = 0;
var inter;
function inicio() {
    var name = window.opener.loadReady();

    var d = new Date();
    d.getHours();

    var div = document.getElementById("datos");

    if (d.getHours() > 6 && d.getHours() < 14) {
        div.innerHTML = "Buenos dias " + name
    } else if (d.getHours() > 14 && d.getHours() < 20) {
        div.innerHTML = "Buenas tardes " + name
    } else {
        div.innerHTML = "Buenas noches " + name
    }

    var segundos = document.getElementById("tiempo");
    segundos.addEventListener("click", tiempo, false);
}

function tiempo() {
    if (turno % 2 == 0) {
        count = 0;
        inter = setInterval(function () {
            document.getElementById("segundos").innerHTML = count;
            count += 1;
        }, 1000);
        turno++;
    } else {
        clearInterval(inter);
        turno++;
    }
}