<?php

$pokemons = array(
    "bulb" => array("nombre" => "Bulbasur", "nick" => "bulb", "evolucion" => "ivysaur", "tipo" => ["planta", "veneno"]),
    "ivy" => array("nombre" => "Ivysaur", "nick" => "ivy", "evolucion" => "venusaur", "tipo" => ["planta", "veneno"]),
    "venu" => array("nombre" => "Venusaur", "nick" => "venu", "evolucion" => "evol máxima", "tipo" => ["planta", "veneno"]),
    "charm" => array("nombre" => "Charmander", "nick" => "charm", "evolucion" => "charmeleon", "tipo" => ["fuego"]),
    "charmi" => array("nombre" => "Charmeleon", "nick" => "charmi", "evolucion" => "charizard", "tipo" => ["fuego"]),
    "chari" => array("nombre" => "Charizard", "nick" => "chari", "evolucion" => "evol máxima", "tipo" => ["fuego"]),
    "squirtle" => array("nombre" => "Squirtle", "nick" => "squirtle", "evolucion" => "squirtle", "tipo" => ["agua"]),
    "warto" => array("nombre" => "Wartortle", "nick" => "warto", "evolucion" => "wartortle", "tipo" => ["agua"]),
    "blasto" => array("nombre" => "Blastoise", "nick" => "blasto", "evolucion" => "evol máxima", "tipo" => ["agua"]),
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

        $jsonPoke = json_decode(file_get_contents("php://input"), false);
        $pokemons[$jsonPoke->nick] = $jsonPoke;

        echo json_encode($pokemons);
        break;

    case "POST":
        $jsonPoke = json_decode(file_get_contents("php://input"), false);
        $pokemons[$jsonPoke->nombre] = $jsonPoke;

        echo json_encode($pokemons);

        break;
}
