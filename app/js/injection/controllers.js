angular.module('injection')
    .controller('injectionController', ['$scope', 'injectionService', function ($scope, injectionService) {
            $scope.greeting = 'Hello';
            $scope.name = injectionService.get().firstname + ' ' + injectionService.get().lastname;
    }]);