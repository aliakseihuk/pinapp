// id: action.id,
// name: action.name,
// hash: hash,
// isNumerical: action.isNumerical,
// icon: action.icon

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var keyModel = new Schema({
  name: {
    type: String
  },
  hash: {
    type: String
  },
  isNumerical: {
    type: Boolean,
    default: false
  },
  icon: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Key', keyModel);