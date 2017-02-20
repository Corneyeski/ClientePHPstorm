app.service('myService',['$http', function ($http) {

        this.getMessage = function () {
            return $http.get("ajaxAngular.php?inicio=si");
        };
        this.getChar = function (letra) {
            return $http.get("ajaxAngular.php?letra="+letra);
        }
    }]);

