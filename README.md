# Challenge 1 - Solution
The challenge inherited 2 problems which have to be fixed:

- Multiple module definitions
- The "DOT" problem

###Step 1 - Module Definition:
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
    ...
```

###Step 2 - The DOT Problem:
Even if both test pass, the app wasn't working correctly. When you tried to hide the answer, it didn't work.

We used a ``ng-if`` to hide/show the answer. This is a simple directive from angular. And as every directive does, it has it's own scope inherited from his parent. When using javascript primitives (string, number, boolean, undefined and null), those values are *copied* to the child scope. So changing the value in the inner element has no impact on the parent variable. 

This is actually a ``javascripts prototypal inheritance`` problem caused by angulars scoping mechanism.

Not using primitives when you want 2-way binding will solve the problem. So get accustomed to use objects (and access variables by the ``.``) more often.


