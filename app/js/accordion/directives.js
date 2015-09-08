angular.module('angularws.accordion')

    .directive('accordionItem', function () {
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: './partials/accordionitem.html'
        }
    });