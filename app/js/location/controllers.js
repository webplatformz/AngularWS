angular.module('location')
    .controller('locationController', ['$scope', 'locationService', function ($scope, locationService) {
        $scope.processing = false;
        $scope.location = {
            url: ''
        };

        $scope.findLocation = function () {
            $scope.processing = true;
            locationService.checkAndLoadLocation($scope.location, $scope.location.url, $scope.processing).then(function (combinedPromiseData) {
                $scope.location.geo = combinedPromiseData[0].data;
                $scope.location.authority = combinedPromiseData[1].data.authority[0];
                $scope.processing = false;
            }, function () {
                console.log('Some Error just happened...');
                $scope.processing = false;
            });
        };
}]);