/**
 * Created by lukedowell on 8/14/15.
 */
var app = angular.module('myApp', ['ngMaterial']);

app.controller('MyController', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
    $scope.user = {
        firstName: "Maria",
        company: "Prime"
    };

    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };

    $scope.sendAlert = function() {
        alert("Hell0!");
    }
}]);
