angular.module('angularws')
    .controller('injectionController', ['$scope',
        function ($scope) {
            $scope.greeting = "Hello World";
            console.log("init injectionController");
    }]);