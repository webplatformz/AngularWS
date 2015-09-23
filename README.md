# Challenge 5

##### Directive 1 - No new scope

This directive uses ```scope: false```, so no new scope is created (nor any prototypical inheritance). This is why you can not break the binding between the directive and the parent, **they have the exact same scope**.

Obviously this can be very dangerous. So when should you use ```scope: false```? The short answer: probably never. You could justify using ```scope: false``` if the directive doesn't read from nor write to the scope, so it would be unnecessary to create a new scope (for example a directive that reacts to a window event but has nothing to do with the scope around it).

##### Directive 2 - Child scope

This is exactly the same case as we observed in challenge 1. ```scope: true``` creates a new child scope which inherits / is prototypically linked to its parent. In this case you can break the binding by entering something into the input field.

Use this for context-specific directives. It makes it easy for you to use properties from the parent scope, but you are also safe to add new properties to the scope inside the directive without polluting the parent scope.

##### Directive 3 - Isolated Scope

When using isolated scope, you define an API for the directive. You pass scope properties to the directive via HTML attributes such as ```name="name"```. No other scope properties are passed along - we have demonstrated this with the ```profession```property, which is undefined in the directive, although it is set in the parent scope.

Use isolated scope for reusable components.

##### Directive 4 - Child controller

Whenever you use a child controller, a child scope which prototypically inherits from its parent scope is created. This has the exact same effect as using ```scope: true``` in a directive.