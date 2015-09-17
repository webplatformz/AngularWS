# Challenge 1 - Solution
The challenge contained 2 problems:

- Multiple module definitions which caused one module to be overwritten
- The "DOT" problem

###Step 1 - Module Definition:
When defining a module, you only can have one definition with dependencies ([] brackets):

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
As the webtest uncovered, hiding the answer didn't work.

We used ``ng-if``, a simple angular directive, to hide/show the answer. ng-if, among other directives, creates its own child scope - this becomes a problem once you try to make use of **{{ two way binding }} to primitives**, in thise case a boolean.
"Child scope" means the child scope **prototypically inherits** from the parent scope. The boolean ``showAnswer`` is set on the child scope once we click the "Hide Answer" button in our ng-click through ``showAnswer = false``, thus shadowing the parent's own property ``showAnswer``.

Fortunately, the solution is quite simple. Get accustomed to using objects instead of primitives in your controllers and access the data with the dot ``foo.bar``.

Other standard directives that create child scopes:

- ng-repeat
- ng-switch
- ng-view
- ng-include

This problem obviously also arises when you create your own directives that create their own child scope.

If you don't quite grasp the concept yet, here are some very useful links which go into more detail about this problem:

- [Egghead Video]
- [Understanding Scopes]


[Egghead Video]: https://egghead.io/lessons/angularjs-the-dot
[Understanding Scopes]: https://github.com/angular/angular.js/wiki/Understanding-Scopes#javascript-prototypal-inheritance



