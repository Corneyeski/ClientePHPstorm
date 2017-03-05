window.onload = inicio;

function inicio() {

    var addDiv = document.getElementById("addDiv");
    addDiv.addEventListener("click", addNewDiv, false);

    var addSpan = document.getElementById("addSpan");
    addSpan.addEventListener("click", addNewSpan, false);

    var contentPrev = document.getElementById("setContentPrev");
    contentPrev.addEventListener("click", addNewDivEventListener,false);
}
function addNewDiv() {
    var newElement = document.createElement("DIV");
    var texto = window.prompt("textico");

    newElement.innerHTML = texto;

    var nodes = document.getElementById("domNodes");
    nodes.appendChild(newElement);

    newElement.className = "addDiv";
}

function addNewSpan() {
    var newElement = document.createElement("SPAN");
    var texto = window.prompt("textico");

    newElement.innerHTML = texto;

    var nodes = document.getElementById("domNodes");
    nodes.appendChild(newElement);

    newElement.className = "addSpan";
}
function addNewDivEventListener() {
    var newElement = document.createElement("DIV");

    newElement.innerHTML = "setContentPrev";
    newElement.className = "setContentPrev";

    var nodes = document.getElementById("domNodes");
    nodes.appendChild(newElement);

    newElement.addEventListener("click",insideBrother,false);
}
function insideBrother() {
    
}