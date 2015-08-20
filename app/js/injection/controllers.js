angular.module('injection', [])
    .controller('injectionController', ['$scope', 'injectionService', function ($scope, injectionService) {
            $scope.greeting = 'Hello';
            $scope.showAnswer = false;
            $scope.name = injectionService.get().firstname + ' ' + injectionService.get().lastname;
            $scope.birthDate = '15.09.1995';            
    }]);