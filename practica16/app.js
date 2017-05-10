var app = angular.module('myApp', ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: '/',
            views: {
                'header@': {templateUrl: 'views/header/header.html'},
                'body@': {templateUrl: 'views/body/body.html'},
                'footer@': {templateUrl: 'views/footer/footer.html'}
            }
        })

        .state('misListas', {
            parent: 'app',
            url: '^/misListas',
            views: {
                'header@': {templateUrl: 'views/header/suscritoHeader.html'},
                'body@': {templateUrl: 'views/body/suscritoBody.html'}
            }
        })

        .state('buscar', {
            parent: 'app',
            url: '^/buscar',
            views: {
                'header@': {templateUrl: 'views/header/buscarHeader.html'},
                'body@': {templateUrl: 'views/body/buscarBody.html'},
                'footer@': {templateUrl: 'views/footer/footer.html'}
            }
        })

        .state('compra', {
            parent: 'app',
            url: '^/misListas/compra',
            views: {
                'header@': {templateUrl: 'views/header/compraHeader.html'},
                'body@': {templateUrl: 'views/body/compraBody.html'},
                'footer@': {templateUrl: 'views/footer/footer.html'}
            }
        })

        .state('datos', {
            parent: 'app',
            url: '^/datos',
            views: {
                'header@': {templateUrl: 'views/header/datosHeader.html'},
                'body@': {templateUrl: 'views/body/datosBody.html'},
                'footer@': {templateUrl: 'views/footer/footer.html'}
            }
        });
    $urlRouterProvider.otherwise('/');
});

