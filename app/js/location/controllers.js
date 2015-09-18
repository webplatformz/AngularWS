angular.module('location')
    .controller('locationController', ['$scope', 'locationService', function ($scope, locationService) {
        $scope.domainRegex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
        $scope.processing = false;
        $scope.location = {
            url: '',
            geo: {}
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
            if (checkURL($scope.location.url)) {
                $scope.processing = true;
                locationService.getIPLocation($scope.location.url, function (geoResponse) {
                    var geoData = geoResponse;
                    locationService.getNS($scope.location.url, function (nsResponse) {
                        $scope.location.geo = geoData;
                        $scope.location.authority = nsResponse;
                        $scope.processing = false;
                    });
                });
            }
        }
}]);