app = angular.module('myApp', ['ngResource']);

app.controller('control', ['$scope', 'myService', function ($scope, myService) {
        $scope.algo = "cosas";

        $scope.algo = myService.prueba;
        
        $scope.planti = "";
        
        var newPoke = {nombre: $scope.nombre, nick: $scope.nick, tipo: [$scope.tipo], evolucion: $scope.evolucion};
        
        /*myService.consultaAjax().get({id: "Bulbasaur"});

        

        myService.consultaAjax().update({id: 2}, newPoke).$promise.then(
                function (response) {
                    console.log(response);
                    $scope.pokemons = response;
                },
                function (response) {
                    $scope.messError = "Error: " + response.status + " " + response.statusText;
                });*/

        myService.consultaAjax().get({}, newPoke).$promise.then(
                function (response) {
                    console.log(response);
                    $scope.pokemons = response;
                },
                function (response) {
                    $scope.messError = "Error: " + response.status + " " + response.statusText;
                });

        myService.consultaAjax().get().$promise.then(
                function (response) {
                    console.log(response);
                    $scope.pokemons = response;
                },
                function (response) {
                    console.log(response);
                }
        );

        $scope.eliminar = new function () {
            myService.consultaAjax().get().$promise.then(
                    function (response) {
                        console.log(response);
                        $scope.pokemons = response;
                    },
                    function (response) {
                        console.log(response);
                    }
            );
        };
        
        $scope.getPlanti = function(){
            myService.consultaAjax().get({id: "planti"}, newPoke).$promise.then(
                function (response) {
                    console.log(response);
                    $scope.planti = response;
                    $scope.nick = $scope.planti.nick;
                    $scope.nombre = $scope.planti.nombre;
                    $scope.evolucion = $scope.planti.evolucion;
                    $scope.tipo = $scope.planti.tipo;
                },
                function (response) {
                    $scope.messError = "Error: " + response.status + " " + response.statusText;
                });
        };
        
        $scope.panti = function(){
            var pantis = {nombre: "panti", nick: "panti", tipo: "panti", evolucion: "evolasao"};
            myService.consultaAjax().save({}, pantis).$promise.then(
                function (response) {
                    console.log(response);
                    $scope.pokemons = response;
                },
                function (response) {
                    $scope.messError = "Error: " + response.status + " " + response.statusText;
                });
        };
    }]);
