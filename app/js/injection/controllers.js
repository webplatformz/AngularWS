angular.module('injection', [])
    .controller('injectionController', ['$scope', function ($scope) {
            $scope.greeting = 'Hello';
            $scope.name = 'Keyser Soze';
    }]);