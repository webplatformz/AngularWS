# Angular 15 to 5 Challenge
Workshop for intermediate angular developer and architects. The workshop is set up with challenges where you have to solve lifelike problems and requirements. Each challenge is designed to have 15min for solving the given tasks while 5min are reserved for review of the/any solution - that's why call it a "15 to 5" challenge.

###Initial Setup:
Welcome to our angular challenge. In this first step, you have a basic, *working* setup of the challenge. The angular-app currently consists of:

- `angularws-app` module definition in `app.js`
- `injection` module definition in `controllers.js`, which also contains the controller `injectionController`

The dependencies are as follows:

`angularws-app` -> `injection`

The `injectionTest.js` asserts the simple `$scope` variables on the `injectionController`, keep the nyan cat happy! Instructions below.

Have a look at the folder structure as well. Make sure you have understood the setup before we dive into the first challenge.

###Going through the steps
Make sure you have all branches checked out
```sh
$ git fetch
```

You have now checked out the `master` branch. During the challenge, you will have to check out the single steps as follows:


```sh
$ git checkout challenge1/task
```
And if you want to see our solution

```sh
$ git checkout challenge1/solution
```
This applies for all steps 1 to n.


## Installation
You only need to have node.js installed. 

Installing node.js: 

See http://nodejs.org/download/

Install node modules:
```sh
$ npm install
```

Start the server:
```sh
$ npm start
```

Test the app:
```sh
$ npm test //uses PhantomJS
$ npm run test_chrome //uses Chrome
```

View the app:
```
http://localhost:3000
```