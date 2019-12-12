'use strict';

module.exports = function(app) {
  var cc = require('../controllers/carsController');
  var db = require('../databases/mongooseContext');

  const dbContext = new db(process.env.MONGO_ENDPOINT);
  const carController = new cc(dbContext);

  // cars Routes
  app.route('/cars')
    .get(carController.list_all_cars)
    .post(carController.create_car);
  app.route('/cars/:carId')
    .get(carController.show_car)
    .put(carController.update_car)
    .delete(carController.delete_car);
};