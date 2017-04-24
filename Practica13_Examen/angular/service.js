app.service('myService', ['$resource', function ($resource) {
    this.consultaAjax = function () {
        return $resource("data.php?/:nick", null, {
            'update': {method: 'PUT'}
        });
    };
    this.prueba = "prueba";
}]);