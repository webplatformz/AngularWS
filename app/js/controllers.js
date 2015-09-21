angular.module('angularws')

    .controller('mainController', function ($scope) {
        $scope.name = 'Harry Potter';
        $scope.profession = 'Wizard';
    })

    .controller('childController', function($scope) {

    });

