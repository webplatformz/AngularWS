'use strict';

var port = process.env.PORT || 3000;

var express = require('express');
//var server = require('http').createServer(app);
var app = express();

app.use(express.static(__dirname + '/app'));
app.listen(port);
console.info('Server listening on port:', port);
/*server.listen(port, () => {
    console.info('Server listening on port:', server.address().port);
});*/