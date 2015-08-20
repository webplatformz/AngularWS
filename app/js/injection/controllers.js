angular.module('injection')
    .controller('injectionController', ['$scope', 'injectionService', function ($scope, injectionService) {
        $scope.introduction = {
            "greeting": "Hello everybody",
            "showAnswer": false,
            "name": injectionService.get().firstname + ' ' + injectionService.get().lastname,
            "year": '1995'
        }
    }]);