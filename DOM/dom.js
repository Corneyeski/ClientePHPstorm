window.onload = inicio;

function inicio() {

    var addDiv = document.getElementById("addDiv");
    addDiv.addEventListener("click", addNewDiv, false);

    var addSpan = document.getElementById("addSpan");
    addSpan.addEventListener("click", addNewSpan, false);

    var contentPrev = document.getElementById("setContentPrev");
    contentPrev.addEventListener("click", addNewDivEventListener,false);

    var delPrevNode = document.getElementById("delPrevNode");
    delPrevNode.addEventListener("click", addNewdelPrevNode, false);

    var delNextNode = document.getElementById("delNextNode");
    delNextNode.addEventListener("click", addNewdelNextNode, false);

    var addAttr = document.getElementById("addAttr");
    addAttr.addEventListener("click", addNewAttrNode, false);

    var delAllType = document.getElementById("delAllType");
    delAllType.addEventListener("click", addNewdelAllNode, false);

    var replaceMeForFirst = document.getElementById("replaceMeForFirst");
    replaceMeForFirst.addEventListener("click",addNewReplaceNode,false)
}
//TODO 1
function addNewDiv() {
    var newElement = document.createElement("DIV");
    var texto = window.prompt("textico");

    newElement.innerHTML = texto;

    var nodes = document.getElementById("domNodes");
    nodes.appendChild(newElement);

    newElement.className = "addDiv";
}
//TODO 2
function addNewSpan() {
    var newElement = document.createElement("SPAN");
    var texto = window.prompt("textico");

    newElement.innerHTML = texto;

    var nodes = document.getElementById("domNodes");
    nodes.appendChild(newElement);

    newElement.className = "addSpan";
}
//TODO 3
function addNewDivEventListener() {
    var newElement = document.createElement("DIV");

    newElement.innerHTML = "setContentPrev";
    newElement.className = "setContentPrev";
    newElement.id = "insideBrother";

    var nodes = document.getElementById("domNodes");
    nodes.appendChild(newElement);

    newElement.addEventListener("click",insideBrother,false);
}
function insideBrother() {
    var brother = document.getElementsByClassName("setContentPrev");
    var texto = window.prompt("textico");

    for(var key = 0;key < brother.length; key++) {
        var before = brother[key].previousElementSibling;
        before.innerHTML = texto;
    }
}
//TODO 4
function addNewdelPrevNode() {
    var newElement = document.createElement("DIV");

    newElement.innerHTML = "Remove preview";
    newElement.className = "delPrevNode";
    newElement.id = "delPrev";

    var nodes = document.getElementById("domNodes");
    nodes.appendChild(newElement);

    newElement.addEventListener("mouseover",delPrev);
}
function delPrev() {
    var brother = document.getElementsByClassName("delPrevNode");
    var nodes = document.getElementById("domNodes");

    for(var key = 0;key < brother.length; key++) {

        var nodeDelete = brother[key].previousElementSibling;
        if (nodeDelete != null) {
            nodes.removeChild(nodeDelete);
        }
    }
}
//TODO 5
function addNewdelNextNode() {
    var newElement = document.createElement("DIV");

    newElement.innerHTML = "Remove next";
    newElement.className = "delNextNode";
    newElement.id = "delNext";

    var nodes = document.getElementById("domNodes");
    nodes.appendChild(newElement);

    newElement.addEventListener("mouseover",delNext);
}
function delNext() {

    var brother = document.getElementsByClassName("delNextNode");
    var nodes = document.getElementById("domNodes");

    for(var key = 0;key < brother.length; key++) {

        var nodeDelete = brother[key].nextElementSibling;
        if (nodeDelete != null) {
            nodes.removeChild(nodeDelete);
        }
    }
}
//TODO 6
function addNewAttrNode() {
    var newElement = document.createElement("DIV");

    newElement.innerHTML = "Ad done Attr";
    newElement.className = "addAttr";
    newElement.id = "delNext";

    var nodes = document.getElementById("domNodes");
    nodes.appendChild(newElement);

    newElement.addEventListener("click",addAttr);
}
function addAttr() {
    var atributo = window.prompt("atributo?");
    var valor = window.prompt("valor?");

    var nodeAttr = document.getElementsByClassName("addAttr");

    for(var key = 0;key < nodeAttr.length; key++) {
        nodeAttr[key].setAttribute(atributo,valor);
    }
}
//TODO 7
function addNewdelAllNode() {
    var newElement = document.createElement("DIV");

    newElement.innerHTML = "Delete All Of";
    newElement.className = "delAllType";
    newElement.id = "delAllType";

    var nodes = document.getElementById("domNodes");
    nodes.appendChild(newElement);

    newElement.addEventListener("click",dellAll);
}
function dellAll() {
    var type = window.prompt("tipo de elemento?");
    var nodes = document.getElementById("domNodes");

    var children = nodes.children;

    for(var key = 0;key < children.length; key++) {
        if (children[key].tagName == type) {
            nodes.removeChild(children[key]);
            key--;
        }
    }
}
//TODO 8
function addNewReplaceNode() {
    var newElement = document.createElement("DIV");
    var texto = window.prompt("textico");

    newElement.innerHTML = texto;
    newElement.className = "replaceMeForFirst";

    var nodes = document.getElementById("domNodes");
    nodes.appendChild(newElement);

    newElement.addEventListener("click", forFirst);
}
function forFirst() {

    var nodes = document.getElementById("domNodes");
    var element = document.getElementsByClassName("replaceMeForFirst");

    for(var key = 0;key < element.length; key++) {
        nodes.insertBefore(element[key], nodes.childNodes[0]);
    }
}