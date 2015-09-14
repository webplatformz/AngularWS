# Challange 2 - Solution
This challllenge can be managed with a bunch of measures. This readme goes through various improvements and states the progress. In the end theres nothing much left of the initial setup. 

### Step 1:
Remove *try/catch* block - As the profiles say's (small yellow warning sign), the *try/catch* cannot be further optimized... so we remove that part.

- ``computing primes: 2252.154ms`` -> Time spent on calculating primes
- ``find:find: 5623.797ms`` -> Overall time between click button and end of rendering.

### Step 2:
The time spent on calculating the primes is still quite high. Let's replace the prime calculation with a faster algorythm -> http://www.javascripter.net/faq/numberisprime.htm

- ``computing primes: 12.486ms`` -> Time spent on calculating primes
- ``find:find: 1863.254ms`` -> Overall time between click button and end of rendering.

### Step 3:
The calc part is now pretty fast... Let's have a look at the filters. We don't really need those, so we remove them.

```
<tr ng-repeat="prime in primes | orderBy:$index | limitTo: n">
    <td>index</td>
    <td>{{ $index + 1 }}</td>
    <td>prime number</td>
    <td>{{ prime }}</td>
</tr>
```

- ``computing primes: 11.259ms`` -> Time spent on calculating primes
- ``find:find: 1116.987ms`` -> Overall time between click button and end of rendering.


### Step 3-1:
Since we noticeable reduced our calculating and some rendering time, it's time to increase the amount of prime to 100000 numbers.

- ``computing primes: 170.815ms`` -> Time spent on calculating primes
- ``find:find: 10300.517ms`` -> Overall time between click button and end of rendering.

### Step 4:
Even if the rendering works now quite well, we have a lot of watchers in our table. Since it is no requirement to have the 2-way binding maintained, we can use 1-time binding for our ng-repeat (this can be achieved with '::' prefixed to scope variables).

```
<tr ng-repeat="prime in ::primes">
    <td>index</td>
    <td>{{ $index + 1 }}</td>
    <td>prime number</td>
    <td>{{ ::prime }}</td>
</tr>
```

- ``computing primes: 170.815ms`` -> Time spent on calculating primes
- ``find:find: 9720.348ms`` -> Overall time between click button and end of rendering.

### Step 5 - final:
To get a even better performance we now have to reduce the angular part drastically. Since the templating of angular takes time we test our table with pure javascript preparation.

```
for (k = 0; k < $scope.n; k += 1) {
    str += '<tr><td>index</td>';
    str += '<td>' + number(k + 1, 0) + '</td>';
    str += '<td>prime number</td>';
    str += '<td>' + number($scope.primes[k], 0) + '</td>';
    str += '<td>is prime? true</td></tr>';
}
```

- ``computing primes: 170.815ms`` -> Time spent on calculating primes
- ``find:find: 6812.869ms`` -> Overall time between click button and end of rendering.

