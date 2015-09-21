# Challenge 2
In this challenge it's all about performance. The page should render thousands of prime number as fast as possible.

### Task:
With the initial setup the rendering of the first 10000 prime numbers takes quite some time. On a normal system it takes about 9 seconds to calculate and render the first 10000 primes.

**Reduce that time as much as you can. You are free to change or delete what you want... It just should render the first n-th primes in a listed view.**

#### Profilers:
We included a simple ``profile.js`` that will help you analyze what is taking time in your app. Check the *Profiles* Tab from the Chrome Dev-Tools.
The *Console* initially gives you also info about timing.
- ``computing primes: 4315.961ms`` -> Time spent on calculating primes
- ``find:find: 9744.160ms`` -> Overall time between click button and end of rendering.

#### Hints: 
Check JavaScript functions; Binding; Angular slowdowns
Use the profiler to determine if the bottleneck is a angular issue or just bad JS.

```sh
$ npm start
```
