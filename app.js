const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './.env') })
bodyParser = require('body-parser')


const express = require('express'),
      app = express(),
      cc = require('./app/controllers/carsController'),
      db = require('./app/databases/mongooseContext'),
      // mongoose = require('mongoose'),
      // Car = require('./app/models/carsModel'), 
      port = process.env.PORT || 3000;

const mongoDbContext = new db(process.env.MONGO_ENDPOINT);
const carController = new cc(mongoDbContext);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/carsRoutes');
routes(app);

app.listen(port);
console.log('Cars API server started on: ' + port);

// bodyParser = require('body-parser')
// 


// // mongoose instance connection url connection
// mongoose.Promise = global.Promise;
// // mongoose.connect(process.env.MONGO_ENDPOINT);
// // console.log('mongodb://' + process.env.MONGO_ENDPOINT)
// mongoose.connect(process.env.MONGO_ENDPOINT); 
