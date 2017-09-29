var app = angular.module('app', [
    'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider)
{

    $urlRouterProvider.otherwise("/");

   $stateProvider
   .state('index', {
        abstract: true,
        url: "/",
        templateUrl : 'app/views/content.html'
    })

    .state('/', {
        url: "/",
        templateUrl : 'app/views/home.html',
        controller  : 'HomeCtrl'
    })

   .state('index.sobre', {
        url: "sobre",
        templateUrl : 'app/views/em_construcao.html',
        controller  : 'SobreCtrl'
   })

   .state('index.dev', {
        url: "dev",
        templateUrl : 'app/views/em_construcao.html',
        controller  : 'DevCtrl'
    })

    .state('index.contato', {
        url: "contato",
        templateUrl : 'app/views/em_construcao.html',
        controller  : 'ContatoCtrl'
    });

});