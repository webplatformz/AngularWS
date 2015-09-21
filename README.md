# Challenge 4

This scenario describes a case where we need to combine 2 sources of information together. Reuirement is, that the user shouldn't see 2 spinner or another form async loading of those information. The view should wait until all information is gathered and show them altogether.

###Task

Find a better way to achieve the asked behaviour as the given code.

Currently the client asks the two rest services synchronously which takes time. If we could start those calls at once and just synchronize the result, we might shorten the response time.

### Hints
Combine two ```$http``` GET result

Switch the commented code in the ```service.js``` file to see it running against reals API interfaces.