app = angular.module('myApp', ['ngResource']);

app.controller('control', ['$scope', 'myService', function ($scope, myService) {
    $scope.prueba = "Practica angular";

    $scope.imagen = "";
    $scope.users = "";

    reiniciar();

    $scope.registrar = function () {

        var user = {nick: $scope.nick, age: $scope.age, puntuacion: 0};
        myService.consultaAjax().update({nick: $scope.nick}, user).$promise.then(
            function (response) {
                console.log(response);

                $scope.imagen = response.url;

                reiniciar();

                $("#login").fadeOut();
                $("#game").fadeIn();
            },
            function (response) {
                console.log(response);
            }
        );
    };

    $scope.start = function () {

        $scope.pregunta = "";
        $scope.pista = "";

        $scope.img = $scope.imagen;
        $("#imagen").fadeIn();
    };

    $scope.enter = function () {
        myService.consultaAjax().get({nick: "pregunta"}).$promise.then(
            function (response) {
                console.log(response.pregunta);
                $scope.pregunta = response.pregunta;
            },
            function (response) {
                console.log(response);
            }
        );
    };
    $scope.exit = function () {
        myService.consultaAjax().get({nick: "pista"}).$promise.then(
            function (response) {
                console.log(response.pista);
                $scope.pista = response.pista;
                $("#imagen").fadeOut();
                $("#respuestas").fadeIn();
            },
            function (response) {
                console.log(response);
            }
        );
    };

    $scope.respuesta = function (respuesta) {
        myService.consultaAjax().get({nick: respuesta}).$promise.then(
            function (response) {
                console.log(response.respuesta);
            },
            function (response) {
                console.log(response.respuesta);
            }
        );
    };

    $scope.ranking = function () {
        myService.consultaAjax().get({nick: "ranking"}).$promise.then(
            function (response) {
                console.log(response);
                $("#ranking").fadeIn();
                $scope.users = response;
            },
            function (response) {
                console.log(response);
            }
        );
    };
}]);

function reiniciar() {
    $("#game").fadeOut();
    $("#imagen").fadeOut();
    $("#respuestas").fadeOut();
    $("#ranking").fadeOut();
}