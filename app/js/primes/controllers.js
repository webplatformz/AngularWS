function isPrime(n) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
    if (n % 2 == 0) return (n == 2);
    if (n % 3 == 0) return (n == 3);
    var m = Math.sqrt(n);
    for (var i = 5; i <= m; i += 6) {
        if (n % i == 0) return false;
        if (n % (i + 2) == 0) return false;
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
    .controller('primesController', ['$scope', '$filter',
        function ($scope, $filter) {
            $scope.n = 1000;
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