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
        .state('suscrito', {
            url: '/',
            views: {
                'header@': {templateUrl: 'views/header/header.html'},
                'body@': {templateUrl: 'views/body/body.html'},
                'footer@': {templateUrl: 'views/footer/footer.html'}
            }
        });

    $urlRouterProvider.otherwise('/');
});

