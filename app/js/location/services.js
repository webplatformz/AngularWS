angular.module('location')
    .factory('locationService', ['$http', '$timeout', function ($http, $timeout) {
        return {
            getIPLocation: function (url, success) {
                $http.get('http://ip-api.com/json/' + url).success(function (response) {
                    $timeout(function () {
                        success(response);
                    }, 2000);

                });

            },
            getNS: function (url, success) {
                $http.get('http://api.statdns.com/' + url + '/a').success(function (response) {
                    $timeout(function () {
                        success(response.authority[0]);
                    }, 2000);

                });
            }
        }
    }]);

/*angular.module('location')
    .factory('locationService', ['$http', '$timeout', function ($http, $timeout) {
        return {
            getIPLocation: function (url, success) {
                $timeout(function () {
                    var response = {
                        "as": "AS31004 Schweizerische Bundesbahnen SBB",
                        "city": "Bern 7",
                        "country": "Switzerland",
                        "countryCode": "CH",
                        "isp": "Schweizerische Bundesbahnen SBB",
                        "lat": 46.9467,
                        "lon": 7.44699,
                        "org": "Schweizerische Bundesbahnen SBB",
                        "query": "194.150.245.142",
                        "region": "",
                        "regionName": "Canton of Bern",
                        "status": "success",
                        "timezone": "Europe/Zurich",
                        "zip": ""
                    };
                    success(response);
                }, 2000);
            },
            getNS: function (url, success) {
                $timeout(function () {
                    var response = {
                        "name": "sbb.ch.",
                        "type": "NS",
                        "class": "IN",
                        "ttl": 11168,
                        "rdlength": 6,
                        "rdata": "ns3.sbb.ch."
                    };
                    success(response);
                }, 2000);
            }
        }
    }]);*/