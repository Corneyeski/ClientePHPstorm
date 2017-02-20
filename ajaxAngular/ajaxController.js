//
// $(document).ready(start());
//
// function start() {
//     $("#start").click(empezar);
// }
//
// function empezar() {
//
//     var xmlHttp = new XMLHttpRequest();
//
//     xmlHttp.open("GET", "ajaxAngular.php?inicio=si", true);
//     xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//
//     xmlHttp.onreadystatechange = function(){
//
//         if(xmlHttp.readyState === 4){
//             console.log(xmlHttp);
//             word(xmlHttp);
//         }
//     }
//     xmlHttp.send(null);
// }
//
// function word(xmlHttp) {
//     console.log(xmlHttp);
// }
app = angular.module('myApp', []);

app.controller('control', ['$scope', 'myService', function ($scope, myService) {

    $scope.palabra = "";

    $scope.generar = function () {

        myService.getMessage().then(
            function (response) {
                var resp = response.data;
                $scope.palabra = resp.palabra;
                for (var i = 0; i < $scope.palabra.length; i++) {
                    $("#rayas").append(' <div style="display: inline-block" ng-value="'+i+'">__</div> ');
                }
                //$("body").append();
            },
            function (response) {
                $scope.message = response.status + " " + response.statusText;
            }
        );
    }

    $scope.send = function () {

            myService.getChar($scope.letra).then(
                function (response) {
                    var resp = response.data;
                    $scope.palabra = resp.palabra;
                },
                function (response) {
                    $scope.message = response.status + " " + response.statusText;
                }
            );

    }

}]);