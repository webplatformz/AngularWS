angular.module('angularws.injection')
    .factory('injectionService', function () {
        return {
            get: function () {
                var sampleJSON = {
                    "firstname": "Keyser",
                    "lastname": "Soze"
                }
                return sampleJSON;
            }
        };
    });