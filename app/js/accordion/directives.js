angular.module('angularws.accordion')

    .directive('accordionItem', function () {
        return {
            restrict: 'AE',
            transclude: true,
            scope: {

            },
            link: function(scope, element, attrs) {

            },
            template: '<div />'
        }
    });