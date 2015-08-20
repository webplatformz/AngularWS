angular.module('injection')
    .factory('injectionService', function () {
        return {
            get: function () {
                var sampleJSON = {
                    "firstname": "Keyser",
                    "lastname": "Söze"
                };
                return sampleJSON;
            }
        };
    });