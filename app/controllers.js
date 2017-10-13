app.controller('HomeCtrl', function($http, $scope, Page)
{
    Page.setTitle("Rony Freitas");

    $http.get('json/posts/postsHome.json').then(function (response) {
        $scope.posts = response.data;
    });
});

app.controller('SobreCtrl', function(Page)
{
    Page.setTitle("Rony Freitas - Sobre Mim");   
});

app.controller('ProjetosCtrl', function($http, $scope, Page)
{
    Page.setTitle("Rony Freitas - Meus Projetos");

    $http.get('json/posts/postsProjetos.json').then(function (response) {
        $scope.projetos = response.data;
    });
});


app.controller('ContatoCtrl', function(Page)
{
    Page.setTitle("Rony Freitas - Entre em Contato");
});

app.controller('AppCtrl', function($http, $scope, Page)
{
    $scope.Page = Page;

    $http.get('json/nav.json').then(function (response) {
        $scope.navs = response.data;
    });

    $http.get('json/myData.json').then(function (response) {
        $scope.myData = response.data;
    });
});

app.controller('ViewMDCtrl', function($http, $stateParams, Page)
{
    Page.setTitle("Rony Freitas - Artigo");

    $http.get('contents/' + $stateParams.urlMD + '.md').then(function (response) {
        var converter = new showdown.Converter();
        var html = converter.makeHtml(response.data);
    
        document.getElementById("viewMD").innerHTML = html;
    });
});