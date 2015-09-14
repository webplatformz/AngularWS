# Challange 2 - Solution
This challllenge can be managed with a bunch of measures. This readme goes through various improvements and states the progress. In the end theres nothing much left of the initial setup. 

### Step 1:
Remove *try/catch* block - As the profiles say's (small yellow warning sign), the *try/catch* cannot be further optimized... so we remove that part.

- ``computing primes: 2252.154ms`` -> Time spent on calculating primes
- ``find:find: 5623.797ms`` -> Overall time between click button and end of rendering.

### Step 2:
The time spent on calculating the primes is still quite high. Let's replace the prime calculation with a faster algorythm -> http://www.javascripter.net/faq/numberisprime.htm

- ``computing primes: 12.486ms`` -> Time spent on calculating primes
- ``find:find: 5613.254ms`` -> Overall time between click button and end of rendering.

### Step 2-1:
Since we noticeable reduced our calculating time, it's time to increase the amount of prime to 100000 numbers.

- ``computing primes: 190.815ms`` -> Time spent on calculating primes
- ``find:find: 14700.517ms`` -> Overall time between click button and end of rendering.

### Step 3:
Now the prime calculation is fine, let's see what we can do about the rendering time. First let's get rid of these many watchers.

- ``computing primes: 12.486ms`` -> Time spent on calculating primes
- ``find:find: 5613.254ms`` -> Overall time between click button and end of rendering.