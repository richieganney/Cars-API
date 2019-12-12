var mongoose = require('mongoose');

Car = require('../models/carsModel'); 
require('../models/carsModel');

class MongooseContext {
  constructor(dbUrl) {
    mongoose.Promise = global.Promise;
    this.cars = mongoose.model('Car');
    mongoose.connect(dbUrl);
  }

  AllCars() {
    return this.cars.find({}, function(err, car) {
      if (err)
        res.send(err);
      res.json(car);
      return car;
    });
  }
}

module.exports = MongooseContext;