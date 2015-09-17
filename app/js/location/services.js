angular.module('location')
    .factory('locationService', ['$http', function ($http) {
        return {
            getIPLocation: function (url) {
                return $http.get('http://ip-api.com/json/' + url);
            },
            getNS: function (url) {
                return $http.get('http://api.statdns.com/' + url + '/a');
            }
        }
    }]);