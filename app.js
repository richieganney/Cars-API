const express = require('express'),
      app = express(),
      cc = require('./app/controllers/carsController'),
      db = require('./app/databases/mongooseContext');

var mongoose = require('mongoose');

const mongoDbContext = new db(process.env.MONGO_ENDPOINT);
const carController = new cc(mongoDbContext);

app.get('/cars', (req, res) => {
  res.send(carController.list_all_cars());
});

const port = 3000;
app.listen(port);
console.log('Cars API server started on: ' + port);

// const path = require('path')
// require('dotenv').config({ path: path.resolve(__dirname, './.env') })

// var express = require('express'),
// app = express(),
// port = process.env.PORT || 3000,
// mongoose = require('mongoose'),
// bodyParser = require('body-parser')
// Car = require('./app/models/carsModel'); //created model loading here


// // mongoose instance connection url connection
// mongoose.Promise = global.Promise;
// // mongoose.connect(process.env.MONGO_ENDPOINT);
// // console.log('mongodb://' + process.env.MONGO_ENDPOINT)
// mongoose.connect(process.env.MONGO_ENDPOINT); 

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// var routes = require('./app/routes/carsRoutes'); //importing route

// routes(app); //register the route

// app.listen(port);
// console.log('Cars API server started on: ' + port);