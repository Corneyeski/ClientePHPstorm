window.onload = function () {

    document.getElementById("imagen").style.visibility = "hidden";
    document.getElementById("pista").style.visibility = "hidden";
    document.getElementById("pregunta").style.visibility = "hidden";
    document.getElementById("respuesta").style.visibility = "hidden";

    document.getElementById("start").addEventListener("click", image, false);
    document.getElementById("new").addEventListener("mouseover", color, false);
};
function image() {

    document.getElementById("imagen").style.visibility = "hidden";
    document.getElementById("pista").style.visibility = "hidden";
    document.getElementById("pregunta").style.visibility = "hidden";
    document.getElementById("respuesta").style.visibility = "hidden";

    document.getElementById("pista").innerHTML = "";
    document.getElementById("pregunta").innerHTML = "";

    document.getElementById("si").style.color = "";
    document.getElementById("no").style.color = "";

    var xmlHttp = new XMLHttpRequest();

    xmlHttp.open("GET", "data.php?image=si", true);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4) {
            var resp = JSON.parse(xmlHttp.responseText);

            var img = "<img id='img' src='" + resp.ruta + "'/>";
            var divImagen = document.getElementById("imagen");

            divImagen.addEventListener("mouseover", pista, false);
            divImagen.addEventListener("mouseout", pregunta, false);
            divImagen.innerHTML = img;

            divImagen.style.visibility = "visible";
        }
    };
    xmlHttp.send(null);
}

function pista() {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.open("GET", "data.php?pista=si", true);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4) {
            var resp = JSON.parse(xmlHttp.responseText);

            var divPista = document.getElementById("pista");

            divPista.innerHTML = resp.pista;

            divPista.style.visibility = "visible";
        }
    };
    xmlHttp.send(null);
}

function pregunta() {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.open("GET", "data.php?pregunta=si", true);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4) {
            var resp = JSON.parse(xmlHttp.responseText);

            var divPregunta = document.getElementById("pregunta");

            divPregunta.innerHTML = resp.pregunta;

            divPregunta.style.visibility = "visible";
            document.getElementById("imagen").innerHTML = "";

            document.getElementById("respuesta").style.visibility = "visible";
            document.getElementById("si").addEventListener("click", checkResponse, false);
            document.getElementById("no").addEventListener("click", checkResponse, false);
        }
    };
    xmlHttp.send(null);
}

function checkResponse() {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.open("GET", "data.php?respuesta=" + this.value, true);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    var button = this;

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4) {
            var resp = JSON.parse(xmlHttp.responseText);

            if (resp.respuesta == "acertado") {
                button.style.color = "green";
            } else {
                button.style.color = "red";
            }

            document.getElementById("aciertos").innerHTML = "aciertos: " + resp.aciertos + " " + "fallos: " + resp.fallo;
        }
    };
    xmlHttp.send(null);
}


//TODO Examen

function color() {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.open("GET", "data.php?color=si", true);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4) {
            var resp = JSON.parse(xmlHttp.responseText);

            console.log(resp);

            var newElement = document.createElement("DIV");

            newElement.innerHTML = resp.color;
            newElement.className = "color";

            newElement.addEventListener("click", colorHermanoPosterior);
            newElement.addEventListener("mouseleave", eliminar);

            var nodes = document.getElementById("colores");
            nodes.appendChild(newElement);
        }
    };
    xmlHttp.send(null);
}
function colorHermanoPosterior() {
    if (this.nextSibling) {
        console.log("tiene bro");

        if (this.textContent == "yellow") {
            this.nextSibling.className = "yellow";
        }
        if (this.textContent == "red") {
            this.nextSibling.className = "red";
        }
        if (this.textContent == "blue") {
            this.nextSibling.className = "blue";
        }
    } else {
        console.log("no tiene bro");
    }
}
function eliminar() {
    var nodes = document.getElementById("colores");

    nodes.removeChild(this);
}