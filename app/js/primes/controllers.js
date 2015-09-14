function isPrime(n) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 1) return false;
    if (n == leastFactor(n)) return true;
    return false;
}

function leastFactor(n) {
    if (isNaN(n) || !isFinite(n)) return NaN;
    if (n == 0) return 0;
    if (n % 1 || n * n < 1) return 1;
    if (n == 1) return 1;
    if (n % 2 == 0) return 2;
    if (n % 3 == 0) return 3;
    if (n % 5 == 0) return 5;
    var m = Math.sqrt(n);
    for (var i = 7; i <= m; i += 30) {
        if (n % i == 0) return i;
        if (n % (i + 4) == 0) return i + 4;
        if (n % (i + 6) == 0) return i + 6;
        if (n % (i + 10) == 0) return i + 10;
        if (n % (i + 12) == 0) return i + 12;
        if (n % (i + 16) == 0) return i + 16;
        if (n % (i + 22) == 0) return i + 22;
        if (n % (i + 24) == 0) return i + 24;
    }
    return n;
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
    .controller('primesController', ['$scope', '$filter',
        function ($scope, $filter) {
            $scope.n = 100000;
            // use AngularJs built-in filter
            var number = $filter('number');

            function generateTableRows() {
                var k;
                var str = '';
                for (k = 0; k < $scope.n; k += 1) {
                    str += '<tr><td>index</td>';
                    str += '<td>' + number(k + 1, 0) + '</td>';
                    str += '<td>prime number</td>';
                    str += '<td>' + number($scope.primes[k], 0) + '</td>';
                    str += '<td>is prime? true</td></tr>';
                }
                document.getElementsByTagName('table')[0].innerHTML = str;
            }
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
                generateTableRows();
            }
    }])