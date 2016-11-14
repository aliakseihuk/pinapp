var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/pinapp');
var Key = require('./models/keyModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var keysRouter = require('./routes/keysRouter')(Key);

app.use('/api/keys', keysRouter);

app.listen(port, function() {
  console.log('pinapp server is running on PORT: ' + port);
});