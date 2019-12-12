var mongoose = require('mongoose');
require('../models/carsModel');

class MongooseContext {
  constructor(dbUrl) {
    this.cars = mongoose.model('Car');
    mongoose.connect(dbUrl);
  }

  AllCars() {
    return this.cars.find({}, function(err, car) {
      // if (err)
      //   res.send(err);
      // res.json(car);
      return car;
    });
  }
}

module.exports = MongooseContext;