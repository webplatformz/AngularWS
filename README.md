# Challenge 1
To get started we've set up a simple case with tests for the controller. Unfortunately the tests are failing...

### Task 1
Fix the unit tests and make the cat happy. 

```sh
$ npm test
```

### Task 2
This one is a bit more tricky. Now you've fixed the unit tests and the code seems to be working fine, but the webtest is failing! Can you see the problem?

If you are not using the VM, you will need to install protractor globally first & start the selenium server:

```sh
$ npm install -g protractor
$ webdriver-manager update
$ webdriver-manager start
```


```sh
$ npm run webtest
```



#### Hints
- Difference between defining and extending a module 
- Scope inheritance (ng-if)