angular.module('location')
    .controller('locationController', ['$scope', 'locationService', function ($scope, locationService) {
        $scope.domainRegex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
        $scope.processing = false;
        $scope.location = {
            url: ''
        };

        function checkURL(urlToTest) {
            var regex = new RegExp($scope.domainRegex);
            if (urlToTest.match(regex)) {
                return true;
            } else {
                return false;
            }
        }

        $scope.findLocation = function () {
            $scope.processing = true;
            locationService.checkAndLoadLocation($scope.location, $scope.location.url, $scope.processing).then(function (data) {
                $scope.location.geo = data[0].data;
                $scope.location.authority = data[1].data.authority[0];
                $scope.processing = false;
            }, function () {
                console.log('ERROR');
                $scope.processing = false;
            });
        };
}]);