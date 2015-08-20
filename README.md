# Challange 1 - Solution
The challenge inherited 2 problems which have to be fixed:

- Multiple module definitions
- The "DOT" problem

### Module Definition:
When defining a module, you only can have one definition with dependencies:

```javascript
angular.module('injection', []) // Define once
```

We recommend defining all modules in a central place (for example the app.js) and extend the module in different files:

```javascript
//app.js
angular.module('injection', [])

//services.js
angular.module('injection')
    .factory('injectionService', function () {
```




```sh
$ npm test
```