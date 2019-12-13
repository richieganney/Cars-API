var mongoose = require('mongoose')
Car = mongoose.model('Car');

class mongooseContext {
    constructor(){
      this.url = process.env.MONGO_ENDPOINT
      this.mongoose = require('mongoose')
      this.car = require('mongoose').model('Car')
    }

    mongoosePromise(){
      this.mongoose.Promise = global.Promise;
    }

    connectMongoose(){
      this.mongoose.connect(this.url)
    }

    list_all_cars(req, res) {
        Car.find({}, function(err, car) {
          if (err)
            res.send(err);
          res.json(car);
        });
      };
    
      create_car(req, res) {
        var new_car = new Car(req.body);
        new_car.save(function(err, car) {
          if (err)
            res.send(err);
          res.json(car);
        });
      };
    
      show_car(req, res) {
        Car.findById(req.params.carId, function(err, car) {
          if (err)
            res.send(err);
          res.json(car);
        });
      };
    
      update_car(req, res) {
        Car.findOneAndUpdate({_id: req.params.carId}, req.body, {new: true}, function(err, car) {
          if (err)
            res.send(err);
          res.json(car);
        });
      };
    
      delete_car(req, res) {
        Car.remove({
          _id: req.params.carId
        }, function(err, car) {
          if (err)
            res.send(err);
          res.json({ message: 'Car successfully removed' });
        });
      };
}

module.exports = mongooseContext;