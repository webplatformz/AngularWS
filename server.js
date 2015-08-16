'use strict';

let port = process.env.PORT || 3000;

let express = require('express');
let app = express();

app.use(express.static(__dirname + '/app'));