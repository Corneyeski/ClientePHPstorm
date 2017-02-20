
app = angular.module('myApp', []);

app.controller('control', ['$scope', 'myService', function ($scope, myService) {

    $scope.palabra = "";

    $scope.generar = function () {

        myService.getMessage().then(
            function (response) {

                var resp = response.data;
                $scope.palabra = resp.palabra;

                $scope.arrayPalabra = [];

                for(var i = 0;i < $scope.palabra.length; i++){
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

                    for(var key in response.data){
                    }
                },
                function (response) {
                    $scope.message = response.status + " " + response.statusText;
                }
            );

    }

}]);