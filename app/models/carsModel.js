'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CarsSchema = new Schema({
  make: String,
  model: String,
  color: String,
  year:  Number
});
module.exports = mongoose.model('Cars', CarsSchema);