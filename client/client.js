var app = angular.module('serviceApp', []);

app.controller('MainController', ['$scope', 'GithubService', function($scope, GithubService){
    GithubService.makeCall();
    //I have lingering questions about these variable names and why I need to add a .data on index.html
    //But adding an extra .data on the end of line 7 doesn't work.
    $scope.github = GithubService.data;
}]);


app.factory('GithubService', ['$http', function($http){

    var data = {};

    var makeCall = function(){
        $http.jsonp('https://api.github.com/users/gwenpaul/events?callback=JSON_CALLBACK').then(function(response){
            data.data = response.data.data;
        });
    };

    return {
        data: data,
        makeCall: makeCall
    };

}]);