<?php

$pokemons = array(
    "Bulbasaur" => array("nombre" => "Bulbasur", "nick" => "bulb", "evolucion" => "ivysaur", "tipo" => ["planta", "veneno"]),
    "Ivysaur" => array("nombre" => "Ivysaur", "nick" => "ivy", "evolucion" => "venusaur", "tipo" => ["planta", "veneno"]),
    "Venusaur" => array("nombre" => "Venusaur", "nick" => "venu", "evolucion" => "evol máxima", "tipo" => ["planta", "veneno"]),
    "Charmander" => array("nombre" => "Charmander", "nick" => "charm", "evolucion" => "charmeleon", "tipo" => ["fuego"]),
    "Charmeleon" => array("nombre" => "Charmeleon", "nick" => "charmi", "evolucion" => "charizard", "tipo" => ["fuego"]),
    "Charizard" => array("nombre" => "Charizard", "nick" => "chari", "evolucion" => "evol máxima", "tipo" => ["fuego"]),
    "Squirtle" => array("nombre" => "Squirtle", "nick" => "squirtle", "evolucion" => "squirtle", "tipo" => ["agua"]),
    "Wartortle" => array("nombre" => "Wartortle", "nick" => "warto", "evolucion" => "wartortle", "tipo" => ["agua"]),
    "Blastoise" => array("nombre" => "Blastoise", "nick" => "blasto", "evolucion" => "evol máxima", "tipo" => ["agua"]),
    "planti" => array("nombre" => "planti", "nick" => "planti", "evolucion" => "evol máxima", "tipo" => ["planta"])
);

switch ($_SERVER['REQUEST_METHOD']) {

    case "DELETE":

        //$id = json_decode(file_get_contents("php://input"), false);

        $id = explode("pokem/", $_SERVER['REQUEST_URI'])[1];
        $jsonPokemon = json_encode(file_get_contents("php://input"), false);

        unset($pokemons[$id]);

        echo json_encode($pokemons);
        
        break;

    case "GET":
        // si está vacío los queremos devolver todos
        if (empty(explode("pokem/", $_SERVER['REQUEST_URI'])[1])) {
            echo json_encode($pokemons);
        } else {
            // get the ID
            $id = explode("pokem/", $_SERVER['REQUEST_URI'])[1];
            // devolvemos la info de ese pokemon en formato json
            echo json_encode($pokemons[$id]);

            foreach ($pokemons as $pokemon) {
                
            }
        }
        break;

    case "PUT":
        // capturamos la info de un pokemon (lo que queremos modificar)
        //$jsonPoke = json_decode(file_get_contents("php://input"), false);
        // de esa info, cogemos lo que nos interesa (el nombre)
        // en el pokemon con ese nombre le ponemos la nueva info enviada
        //$pokemons[$jsonPoke->nombre] = $jsonPoke;
        // devolvemos la info de todos los pokemons

        /* $id = explode("pokem/", $_SERVER['REQUEST_URI'])[1];
          $poke = explode("pokem/", $_SERVER['REQUEST_URI'])[2]; */

        $jsonPoke = json_decode(file_get_contents("php://input"), false);
        $pokemons[$jsonPoke->nick] = $jsonPoke;

        // devolvemos la info de ese pokemon en formato json
        // $pokemons[$id] = $poke;

        echo json_encode($pokemons);
        break;

    case "POST":
        $jsonPoke = json_decode(file_get_contents("php://input"), false);
        $pokemons[$jsonPoke->nombre] = $jsonPoke;

        echo json_encode($pokemons);

        break;
}
