app.controller('HomeCtrl', function($http, $scope)
{
   $http.get('json/posts/postsHome.json').then(function (response) {
        $scope.posts = response.data;
    });
});

app.controller('SobreCtrl', function()
{
    
});

app.controller('ProjetosCtrl', function($http, $scope)
{
    $http.get('json/posts/postsProjetos.json').then(function (response) {
        $scope.projetos = response.data;
    });
});


app.controller('ContatoCtrl', function()
{
    
});

app.controller('AppCtrl', function($http, $scope)
{
    $http.get('json/nav.json').then(function (response) {
        $scope.navs = response.data;
    });

    $http.get('json/myData.json').then(function (response) {
        $scope.myData = response.data;
    });
});