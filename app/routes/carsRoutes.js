'use strict';

module.exports = function(app) {
  var cars = require('../controllers/carsController');

  // cars Routes
  app.route('/cars')
    .get(cars.list_all_cars)
    .post(cars.create_car);
  app.route('/cars/:carId')
    .get(cars.show_car)
    .put(cars.update_car)
    .delete(cars.delete_car);
};