angular.module('location')
    .controller('locationController', ['$scope', 'locationService', function ($scope, locationService) {
        $scope.domainRegex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
        $scope.greeting = 'Hello';
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

        function getIPLocalization(urlToTest, success, error) {

        }

        $scope.findLocation_old = function () {
            if (checkURL($scope.location.url)) {
                locationService.getIPLocation($scope.location.url).then(function (geoResponse) {
                    var geoData = geoResponse.data;
                    locationService.getNS($scope.location.url).then(function (nsResponse) {
                        var authorityData = nsResponse.data.authority[0];
                        $scope.location.geo = geoData;
                        $scope.location.authority = authorityData;
                    }, null)
                }, function (response) {});
            }
        }

        $scope.findLocation = function () {
            if (checkURL($scope.location.url)) {
                locationService.getIPLocation($scope.location.url, function (geoResponse) {
                    var geoData = geoResponse;
                    locationService.getNS($scope.location.url, function (nsResponse) {
                        $scope.location.geo = geoData;
                        $scope.location.authority = nsResponse;
                    });
                });
            }
        }
}]);