$(document).ready(function(){
    $("#inicioXML").click(numeroAleatorio);
    $("#checkAjaxXML").click(checkNumero);
    $("#inicioJSON").click(numeroAleatorioJSON);
    $("#checkAjaxJSON").click(checkNumeroJSON);
});
var intentos = 10;

function numeroAleatorio(){
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.open("GET", "aciertaNumeroXML.php?inicio=si", true);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xmlHttp.onreadystatechange = function(){

        if(xmlHttp.readyState === 4){
            console.log(xmlHttp);
            recibirNumero(xmlHttp);
        }
    }
    xmlHttp.send(null);
}
function recibirNumero(xmlHttp){
    if(xmlHttp.status === 200){
        var respuesta = xmlHttp.responseXML;

        var numAleatorio = respuesta.getElementsByTagName("inicio")[0].textContent;
        console.log(numAleatorio);
        document.getElementById("mensaje").innerHTML = "Se ha generado un nuevo número";
    }
}
function checkNumero(){

    var numUsuario = document.getElementById("numero").value;

    var xmlHttp = new XMLHttpRequest();

    xmlHttp.open("GET", "aciertaNumeroXML.php?numero=" + numUsuario, true);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState === 4) verificarNumero(xmlHttp);
    }

    xmlHttp.send(null);
}

function verificarNumero(xmlHttp){

    if(xmlHttp.status === 200){

        var respuesta = xmlHttp.responseXML;
        var encontrado = respuesta.getElementsByTagName("encontrado")[0].textContent;
        var mensaje = respuesta.getElementsByTagName("mensaje")[0].textContent;
        document.getElementById("mensaje").innerHTML = mensaje;

        if(encontrado === "si"){
            document.getElementById("encontrado").innerHTML = encontrado;
            intentos = 10;
        }else{
            document.getElementById("encontrado").innerHTML = encontrado;

            intentos = intentos-1;
            document.getElementById("intentos").innerHTML = intentos;

            restantes();
        }
    }
}

function restantes(){
    if(intentos < 0){

        document.getElementById("mensaje").innerHTML = "Has perdido";

        $("#inicioXML").attr("disabled", "disabled").off('click');
        $("#checkAjaxXML").attr("disabled", "disabled").off('click');
        $("#inicioJSON").attr("disabled", "disabled").off('click');
        $("#checkAjaxJSON").attr("disabled", "disabled").off('click');

        document.getElementById("intentos").innerHTML = "0";
    }
}

function numeroAleatorioJSON() {

    var xmlHttp = new XMLHttpRequest();

    xmlHttp.open("GET", "aciertaNumeroJSON.php?inicio=si", true);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xmlHttp.onreadystatechange = function(){
        // state 4 = completado
        if(xmlHttp.readyState === 4){
            console.log(xmlHttp);
            checkNumeroJSON(xmlHttp);
        }
    }
    xmlHttp.send(null);
}

function checkNumeroJSON(){
    var numUsuario = document.getElementById("numero").value;

    var xmlHttp = new XMLHttpRequest();
    var ruta = "aciertaNumeroJSON.php?numero="+numUsuario;

    xmlHttp.open("GET", ruta, true);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState === 4) ajaxJSON(xmlHttp);
    }
    xmlHttp.send(null);
}

function ajaxJSON(xmlHttp) {

    console.log("entro");
    if(xmlHttp.status === 200){
        var respuesta = xmlHttp.responseText;
        var respuestaJSON = JSON.parse(respuesta);

        var encontrado = respuestaJSON.encontrado;
        var mensaje = respuestaJSON.mensaje;

        document.getElementById("mensaje").innerHTML = mensaje;
        if(encontrado === "si"){
            document.getElementById("encontrado").innerHTML = encontrado;
            intentos = 10;
        }else{
            intentos = intentos -1;
            document.getElementById("intentos").innerHTML = intentos;
            restantes();
        }
    }
}