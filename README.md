# Challange 4 - Solution
When we normally get information from a REST interface, we commonly use a promise which is given by $http provider. Promises in angular are not so easy to understand, but when you master them you can use them to flaten your calls and prevent a callback nightmare.

The solution combines the 3 steps (regex -> ipLocation -> nsServer) by using promises. The first promise must succeed in order to start the two XHR calls simultaneously.

Now we combine the answer of both calls and trigger the promise to result not before we have the answer from both interfaces. This can be achieved with ```$q.all[promise1,promise2]```.

When combining promises this way, you will receive an array with corresponding promise result: