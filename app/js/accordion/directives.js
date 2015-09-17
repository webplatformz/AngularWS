angular.module('angularws')

    .directive('nameInputOne', function () {
        return {
            restrict: 'AE',
            templateUrl: './partials/nameInput.html',
            scope: false
        };
    })

    .directive('nameInputTwo', function () {
        return {
            restrict: 'AE',
            templateUrl: './partials/nameInput.html',
            scope: true
        };
    })

    .directive('nameInputThree', function () {
        return {
            restrict: 'AE',
            templateUrl: './partials/nameInput.html',
            scope: {
                name: '='
            }
        };
    })

    .directive('nameInputFour', function () {
        return {
            restrict: 'AE',
            templateUrl: './partials/nameInput.html',
            scope: {
                name: '@'
            }
        };
    });