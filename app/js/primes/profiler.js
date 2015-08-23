function profileScopeMethod() {
    var selector = 'find';
    var methodName = 'find';
    var name = selector + ':' + methodName;

    /* global angular */
    var el = angular.element(document.getElementById(selector));
    var scope = el.scope() || el.isolateScope();
    console.assert(scope, 'cannot find scope from ' + name);

    var fn = scope[methodName];
    console.assert(typeof fn === 'function', 'missing ' + methodName);
    var $timeout = el.injector().get('$timeout');
    var $q = el.injector().get('$q');

    var countWatchers = function () {
        var elts = document.getElementsByClassName('ng-scope');
        var watches = [];
        var visited_ids = {};
        for (var i = 0; i < elts.length; i++) {
            var scope = angular.element(elts[i]).scope();
            if (scope.$id in visited_ids)
                continue;
            visited_ids[scope.$id] = true;
            watches.push.apply(watches, scope.$$watchers);
        }
        return watches.length;
    }

    scope[methodName] = function () {
        console.profile(name);
        console.time(name);

        // method can return a value or a promise
        var returned = fn();
        $q.when(returned).finally(function finishedMethod() {
            console.timeStamp('finished', methodName);

            $timeout(function afterDOMUpdate() {
                console.timeStamp('dom updated after', methodName);
                console.timeEnd(name);
                console.profileEnd();
                scope[methodName] = fn;
                console.log('restored', name);
                console.log('Watchers: ' + countWatchers());
            }, 0);
        });
    };
    console.log('wrapped', name, 'for measurements');
}
setTimeout(profileScopeMethod, 500);