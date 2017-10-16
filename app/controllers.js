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

app.controller('ViewMDCtrl', function($http, $stateParams)
{
    $http.get('contents/' + $stateParams.urlMD + '.md').then(function (response) {
        var converter = new showdown.Converter();
        var html = converter.makeHtml(response.data);
    
        document.getElementById("viewMD").innerHTML = html;

        var url_atual = window.location.href;
        
            alert(url_atual);
            
            var disqus_config = function () {
                this.page.url = url_atual;
                this.page.identifier = url_atual;
            };
                    
            var d = document, s = d.createElement('script');
            s.src = 'https://https-ronysfreitas-github-io.disqus.com/embed.js';
            s.setAttribute('data-timestamp', + new Date());
            (d.head || d.body).appendChild(s);
            
    });

    

});