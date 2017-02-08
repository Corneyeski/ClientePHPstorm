var app = angular.module("angularArrayApp", []);
app.controller("controlArrays", ["$scope", "serv"
            , function ($scope, serv) {
                $scope.concesSel;
                $scope.pepe = serv.pepe2;
                $scope.concesionarios = serv.concesionarios;
                serv.crearConcesionario("MarioKart", "Mushroom Street");
                serv.addCocheConcesionario(0, "Stutcar", "3562", "");
                serv.addCocheConcesionario(0, "AngulCar", "73627", "");

                serv.crearConcesionario("StutKart", "Pelayo Street");
                serv.addCocheConcesionario(1, "DAWCAR", "234262", "");
                serv.addCocheConcesionario(1, "Daw2CarPLusTurboOxiaction", "73627", "");
                
                $scope.addCoche= function(){
                    serv.addCocheConcesionario(
                                $scope.concesSel,
                                $scope.inputNomCoche,
                                $scope.inputPrecioCoche
                    );
                };
                
            }]
        );

