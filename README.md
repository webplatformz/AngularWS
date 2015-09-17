# Challenge 3 - Solution

The point of this task was to see if you know how to use ng-transclude.
 
An important thing to note about ng-transclude is that the client of the directive is able to use his own scope inside the 
template of your directive. See how we are able to call a the method ```like()```, although that method is not in the directive scope?