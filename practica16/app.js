var app = angular.module('myApp', ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: '/',
            views: {
                'header': {templateUrl: 'views/header/header.html'},
                'body': {templateUrl: 'views/body/body.html'},
                'footer': {templateUrl: 'views/footer/footer.html'}
            }
        })

        .state('app.misListas', {
            url: '/misListas',
            views: {
                'header': {templateUrl: 'views/header/suscritoHeader.html'},
                'body': {templateUrl: 'views/body/suscritoBody.html'},
                'footer': {templateUrl: 'views/footer/footer.html'}
            }
        })

        .state('app.misListas', {
            url: '/misListas',
            views: {
                'header': {templateUrl: 'views/header/buscarHeader.html'},
                'body': {templateUrl: 'views/body/buscarBody.html'},
                'footer': {templateUrl: 'views/footer/footer.html'}
            }
        })
    /*.state('app.doscap', { url: 'doscap',
     views: { 'cos@': { templateUrl: 'views/cap.html',
     controller: 'capController' }
     }
     })*/;
    $urlRouterProvider.otherwise('/');
});

