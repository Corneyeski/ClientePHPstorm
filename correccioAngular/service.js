
function Coche(nombre, precio, extras) {
    this.nombre = nombre || "nombre defecto";
    this.precio = precio || "20293";
    this.extras = extras;
}

function Concesionario() {
    this.nombre;
    this.direccion;
    this.comanda = new Array();

    this.addComanda = function (coche) {
        var idComanda = this.comanda.push(coche);
        return idComanda;
    };
}
app.service("serv", function () {
    this.pepe2 = "Hola";
    this.concesionarios = [];
    
/**d.	Una función que cree un nuevo concesionario recibiendo como
 *  parámetro el nombre i la dirección y que lo añada al array de
 *   concesionarios..
 */
    this.crearConcesionario = function(nombre, direccion){
        var c = new Concesionario();
        c.nombre=nombre;
        c.direccion=direccion;
        this.concesionarios.push(c);
    };
    
    /*	Una función que añada un coche a un concesionario.   */
    this.addCocheConcesionario= function(num_conces,nombre, precio, extras){
        var c= new Coche(nombre,precio,extras);                
        var conces =this.concesionarios[num_conces];
        conces.addComanda(c); //add el coche utilizando la funcion de concesiono addComanda
    };

});

