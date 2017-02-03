var indexCtrl = angular.module('appMain', ['ngRoute']);

indexCtrl.config(function($routeProvider) {

    $routeProvider
        .when('/addNewBook', {
            templateUrl: 'pages/addNewBook.html',
            controller: 'controlCenter'
        })
        .when('/verify', {
            templateUrl: 'pages/welcome.html'
        })
        .otherwise({
            redirectTo: '/'
        })

});

indexCtrl.controller('indexCtrl', function($scope, $http, $location) {

    $scope.refresh = function() {
        $http.get('/bookList').then(function(response) {
            $scope.Books = response.data;
        });
    }

    $scope.changeLk = function(){
      $location.path('/addNewBook');
    };

    $scope.newBook = function() {
        $scope.newBookToAdd = ({
            name: $scope.newbook.name,
            year: $scope.newbook.year
        });
        $http.post('/bookList', $scope.newBookToAdd);
    };

    $scope.removeThisOne = function() {

        $http.delete('/bookList/' + bookId).then(function(response) {
            $scope.refresh();
        });
    };

    $scope.refresh();
});

indexCtrl.directive('addNewBook', function() {
    return {
        templateUrl: 'pages/addNewBook.html'
    }
})
