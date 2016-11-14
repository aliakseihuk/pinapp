var express = require('express');

var routes = function(Key) {
  var keysRouter = express.Router();

  keysRouter.route('/')
    .post(function(req, res) {
      var key = new Key(req.body);
      key.save();
      res.status(201).send(key);
    })
    .get(function(req, res) {
      Key.find(function(err, keys) {
        if (err)
          res.status(500).send(err);
        else
          res.json(keys)
      });
    });

  return keysRouter;
};

module.exports = routes;
