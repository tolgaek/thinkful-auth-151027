'use strict'

var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('<a href="/authenticate">Log in!</a>');
});

app.get('/authenticate');

app.get('/display', function(req, res) {

});


app.listen(8060);
