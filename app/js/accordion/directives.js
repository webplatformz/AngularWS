angular.module('angularws.accordion')

    .directive('planetAccordionItem', function () {
        return {
            restrict: 'AE',
            replace: true,
            transclude: true,
            templateUrl: './partials/accordionitem.html',
            scope: {
                selectedPlanet: '@planet',
                link: '@'
            },
            link: function(scope) {
                var planets = {
                    mercury : {
                        iconClass: 'mercury-icon',
                        title: 'Mercury',
                        lock: false
                    },
                    venus: {
                        iconClass: 'venus-icon',
                        title: 'Venus',
                        lock: false
                    },
                    earth: {
                        iconClass: 'earth-icon',
                        title: 'Earth',
                        lock: false
                    }
                };

                scope.planet = planets[scope.selectedPlanet];

                if (!scope.planet) {
                    throw 'Unknown planet: ' + scope.selectedPlanet;
                }

                scope.togglePlanetLock = function() {
                    scope.planet.lock = !scope.planet.lock;
                };

            }
        }
    });