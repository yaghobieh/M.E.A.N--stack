var appMain = angular.module('appModule', []);
appMain.controller('ctrlListOfContacts', function($scope, $http) {

    var refresh = function() {
        $http.get('/public').success(function(response) {
            $scope.contactList = response;
            $scope.contact = '';
        });
    };

    refresh();

    $scope.remove = function(id) {
        $http.delete('/public/' + id).success(function(response) {
            console.log(response);
            refresh();
        });
    };

    $scope.addNewUser = function() {
        $http.post('/public', $scope.contact);
        refresh();
    };

    $scope.edit = function(id) {
        $http.get('/public/' + id).success(function(response) {
            $scope.contact = response;
        });
    };

    $scope.update = function() {
        $http.put('/public/' + $scope.contact._id, $scope.contact).success(function(response) {
            refresh();
        });
    };

    $scope.deSelect = function() {
        $scope.contact = '';
    }
    
});
