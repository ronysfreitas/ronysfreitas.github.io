var app = angular.module('app', [
    'ui.router'
]);

app.factory('Page', function() {
    var title = 'Rony Freitas';
    return {
      title: function() { return title; },
      setTitle: function(newTitle) { title = newTitle }
    };
});

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

    .state('index.projetos', {
        url: "projetos",
        templateUrl : 'app/views/projetos.html',
        controller  : 'ProjetosCtrl'
    })

    .state('index.contato', {
        url: "contato",
        templateUrl : 'app/views/em_construcao.html',
        controller  : 'ContatoCtrl'
    })

    .state('index.view', {
        url: "{urlMD}",
        templateUrl : 'app/views/viewMD.html',
        controller  : 'ViewMDCtrl'
    });

});