angular.module('angularws.accordion')
    .controller('accordionController', ['$scope',
        function ($scope) {
            $scope.mercuryLock = false;
            $scope.venusLock = false;
            $scope.earthLock = false;
    }]);