var express = require('express');
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/pinapp');

var Key = require('./models/keyModel');

var app = express();

var port = process.env.PORT || 3000;

var keysRouter = express.Router();
keysRouter.route('/keys')
  .get(function(req, res) {
    Key.find(function(err, keys) {
      if (err)
        res.status(500).send(err);
      else
        res.json(keys)
    });
  });

app.use('/api', keysRouter);

app.listen(port, function() {
  console.log('pinapp server is running on PORT: ' + port);
});