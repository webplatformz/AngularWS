angular.module('angularws.blogpost')
    .controller('injectionController', ['$scope', 'injectionService',
        function ($scope, injectionService) {
            $scope.greeting = "Hello";
            console.log("init injectionController");
            $scope.name = injectionService.get();
    }]);