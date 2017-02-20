app = angular.module('myApp', []);

app.controller('control', ['$scope', 'myService', function ($scope, myService) {

    $scope.intentos = 0;
    $scope.palabra = "";

    $scope.generar = function () {

        myService.getMessage().then(
            function (response) {

                var resp = response.data;
                $scope.palabra = resp.palabra;

                $scope.arrayPalabra = [];

                for (var i = 0; i < $scope.palabra.length; i++) {
                    $scope.arrayPalabra.push("__");
                }
            },

            function (response) {
                $scope.message = response.status + " " + response.statusText;
            }
        );
    };

    $scope.send = function () {

        myService.getChar($scope.letra).then(
            function (response) {

                var resp = response.data;
                console.log(response.data);

                if (response.data.length > 0) {

                    for (var key in response.data) {
                        $scope.arrayPalabra[response.data[key]] = $scope.letra;
                    }

                    var check = true;
                    for (var i = 0; i < $scope.arrayPalabra.length; i++) {
                        if ($scope.arrayPalabra[i] == "__") {
                            check = false;
                            break;
                        }
                    }
                    if(check){
                        alert("HAS GANADO");
                        $("#borrar").html("");
                    }
                }else{
                    $scope.intentos++;
                    if($scope.intentos == 10) {
                        alert("HAS PERDIDO");
                        $("#borrar").html("");
                    }
                }

            },
            function (response) {
                $scope.message = response.status + " " + response.statusText;
            }
        );

    }

}]);