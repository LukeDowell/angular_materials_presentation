/**
 * Created by lukedowell on 8/14/15.
 */
var app = angular.module('myApp', ['ngMaterial']);

app.controller('MyController', ['$scope', '$mdSidenav', '$mdDialog',
    function($scope, $mdSidenav, $mdDialog) {
        var alert;

        $scope.user = {
            firstName: "Maria"
        };

        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };

        $scope.sendAlert = function() {
            alert = $mdDialog.alert({
                title: "Example Title",
                content: "This is an example of how easy it is to create dialog boxes",
                ok: "Close"
            });
            $mdDialog
                .show(alert)
                .finally(function() {
                    console.log("Dialog close");
                    alert = undefined;
                });
        }
}]);
