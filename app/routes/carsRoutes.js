'use strict';

module.exports = function(app) {
  var cc = require('../controllers/carsController');
  // var db = require('../database/mongodb');

  // const dbContext = new db();
  const carController = new cc();

  // cars Routes
  app.route('/cars')
    .get(carController.list_all_cars)
    .post(carController.create_car);
  app.route('/cars/:carId')
    .get(carController.show_car)
    .put(carController.update_car)
    .delete(carController.delete_car);
};