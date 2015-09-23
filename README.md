# Angular 15 to 5 Challenge
Workshop for intermediate angular developer and architects. The workshop is set up with challenges where you have to solve lifelike problems and requirements. Each challenge is designed to have 15min for solving the given tasks while 5min are reserved for review of the/any solution - that's why call it a "15 to 5" challenge.

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


This applies for all steps 1 to n.


## Installation
The easiest way for you to do the challenges is to get the VM, where everything is up and running for you

If you want to do it yourself, need to have node.js & protractor installed.

Installing node.js: 

See http://nodejs.org/download/

Installing protractor:

```sh
$ npm install -g protractor
```


### Windows users (not recommended)

- Install python **version 2.7 NOT 3.x**: http://www.python.org/getit/windows/
- Install Microsoft Visual Studio C++ 2012 Express version: http://go.microsoft.com/?linkid=9816758
- Install node-gyp: npm install -g node-gyp
- Installing node.js http://nodejs.org/download/


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