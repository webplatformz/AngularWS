function isPrime(n) {
    try {
        var k;
        for (k = 2; k < n; k += 1) {
            if (n % k === 0) {
                return false;
            }
        }
    } catch (err) {
        console.error(err);
    }
    return true;
}

var foundPrimes = [];

function findPrime(n) {
    var k;
    if (foundPrimes.length) {
        k = foundPrimes[foundPrimes.length - 1] + 1;
    } else {
        k = 1;
    }
    while (foundPrimes.length < n) {
        if (isPrime(k)) {
            foundPrimes.push(k);
        }
        k += 1;
    };
    return foundPrimes[n - 1];
}

angular.module('angularws.primes')
    .controller('primesController', ['$scope',
        function ($scope) {
            $scope.n = 10000;
            $scope.find = function () {
                console.log('computing first', $scope.n, 'primes');
                $scope.primes = [];
                var k;
                console.time('computing primes');
                for (k = 0; k < $scope.n; k += 1) {
                    var prime = findPrime(k + 2);
                    $scope.primes.push(prime);
                }
                console.timeEnd('computing primes');
            };
    }])
    .filter('isPrime', function () {
        return isPrime;
    })