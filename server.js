'use strict';

var port = process.env.PORT || 3000;

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/app'));
app.listen(port);
console.info('Server listening on port:', port);