'use strict';

var db = require('../databases/mongooseContext');

class carsController {

  constructor(){
    this.carController = new db();
  }
  routes(app){
    // var db = require('../database/mongodb');
    // const dbContext = new db();
    // cars Routes
    app.route('/cars')
      .get(this.carController.list_all_cars)
      .post(this.carController.create_car);
    app.route('/cars/:carId')
      .get(this.carController.show_car)
      .put(this.carController.update_car)
      .delete(this.carController.delete_car);
  };
}

module.exports = carsController;
