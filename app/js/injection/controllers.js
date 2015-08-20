angular.module('injection', [])
    .controller('injectionController', ['$scope', 'injectionService', function ($scope, injectionService) {
        $scope.greeting = 'Hello everybody';
        $scope.showAnswer = false;
        $scope.name = injectionService.get().firstname + ' ' + injectionService.get().lastname;
        $scope.year = '1995';
    }]);