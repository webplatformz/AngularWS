angular.module('angularws')

    .controller('mainController', function ($scope, $window) {

            $scope.like = function(planet) {
                $window.alert('So, you like ' + planet + '. Interesting...');
            };
    });