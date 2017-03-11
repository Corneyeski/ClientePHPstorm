app = angular.module('myApp', ['ngResource']);

app.controller('control', ['$scope', 'myService', function ($scope, myService) {
    $scope.algo = "cosas";

    $scope.algo = myService.prueba;

    myService.consultaAjax().get({id: "Bulbasaur"});

    var newPoke = {nombre: 'Pikachu', tipo: ["electrico"], evolucion: 'Raichu'};

    myService.consultaAjax().update({id: 2}, newPoke).$promise.then(
        function (response) {
            console.log(response);
            $scope.pokemons = response;
        },
        function (response) {
            $scope.messError = "Error: " + response.status + " " + response.statusText;
        });

}]);
