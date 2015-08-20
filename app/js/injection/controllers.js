angular.module('injection')
    .controller('injectionController', ['$scope', 'injectionService', function ($scope, injectionService) {
        $scope.introduction = {
            "greeting" : "Hello",
            "showAnswer" : false,
            "name" : injectionService.get().firstname + ' ' + injectionService.get().lastname,
            "birthDate" : '15.09.1995'
        }
    }]);