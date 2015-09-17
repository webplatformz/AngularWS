angular.module('angularws.accordion')

.directive('accordionItem', function () {
    return {
        restrict: 'AE',
        replace: true,
        transclude: true,
        templateUrl: './partials/accordionItem.html',
        scope: {
            title: '@',
            icon: '@iconClass',
            link: '@'
        },
        link: function (scope) {
            scope.lock = false;
            scope.togglePlanetLock = function () {
                scope.lock = !scope.lock;
            };

        }
    }
});