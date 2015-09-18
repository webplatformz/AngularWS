/*angular.module('location')
    .factory('locationService', ['$q', '$http', '$timeout', function ($q, $http, $timeout) {
        return {
            getIPLocation: function (url) {
                return $http.get('http://ip-api.com/json/' + url);
            },
            getNS: function (url, success) {
                return $http.get('http://api.statdns.com/' + url + '/a');
            },
            checkSyntax: function (url) {
                var deferred = $q.defer();
                var domainRegex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
                var regex = new RegExp(domainRegex);

                if (url.match(regex)) {
                    deferred.resolve();
                } else {
                    deferred.reject();
                }
                return deferred.promise;
            },
            checkAndLoadLocation: function (locationObject, url) {
                var that = this;
                var tempLocation = {};
                return that.checkSyntax(url).then(function (isValidUrl) {
                    return $q.all([
                        that.getIPLocation(url), that.getNS(url)
                    ])
                });
            }
        }
    }]);*/


angular.module('location')
    .factory('locationService', ['$q', '$http', '$timeout', function ($q, $http, $timeout) {
        return {
            getIPLocation: function (url) {
                var deferred = $q.defer();
                $timeout(function () {
                    var response = {
                        "data": {
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
                        }
                    };
                    deferred.resolve(response);
                }, 2000);

                return deferred.promise;
            },
            getNS: function (url) {
                var deferred = $q.defer();
                $timeout(function () {
                    var response = {
                        "data": {
                            "authority": [
                                {
                                    "name": "sbb.ch.",
                                    "type": "NS",
                                    "class": "IN",
                                    "ttl": 5928,
                                    "rdlength": 6,
                                    "rdata": "ns3.sbb.ch."
                            }
                        ]
                        }
                    };
                    deferred.resolve(response);
                }, 2000);

                return deferred.promise;
            },
            checkSyntax: function (url) {
                var deferred = $q.defer();
                var domainRegex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
                var regex = new RegExp(domainRegex);

                if (url.match(regex)) {
                    deferred.resolve();
                } else {
                    deferred.reject();
                }
                return deferred.promise;
            },
            checkAndLoadLocation: function (locationObject, url) {
                var that = this;
                var tempLocation = {};
                return that.checkSyntax(url).then(function (isValidUrl) {
                    return $q.all([
                        that.getIPLocation(url), that.getNS(url)
                    ])
                });
            }
        }
    }]);