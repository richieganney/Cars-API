const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './.env') })
const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;

chai.use(chaiHttp);

const mongoose = require('mongoose')

beforeAll(async () => {
  const url = "mongodb://localhost/Testdb"
  await mongoose.connect(url, { useNewUrlParser: true })
})

beforeAll(async () => {
    mongoose.connect("mongodb://localhost/Testdb"); 
})

var express = require('express')
app = express()
var Car = require('../app/models/carsModel') // Link to your user model 

app.post('/cars', async (req, res) => {
  const { make, model, color, year } = req.body 
  const car = new Car({make, model, color, year})
  const ret = await car.save()
  res.json(ret)
})

describe('Cars API', () => {
    it('Should save a car to database', async done => {
        const res = await request.post('/cars')
        .send({
            make: 'Test Car',
						model: 'Test Model',
						color: 'black',
						year: 2000
        })
        done()
    });
});

// describe('Cars API', () => {
//     it('should load car data', () => {
//         chai.request(`${url}/cars`)
//             .get('/cars')
//             .then(data => {
//                 expect(data).to.have.status(200)
//                     // expect(data.title).to.be('News Article')
//                     // expect(data.author).to.be('John Smith')
//             })
//     })

//     it('should post car data', () => {
//         chai.request(`${url}/cars`)
//             .post('/')
//             .type('form')
//             .send({
//                 'make': 'Test Make',
//                 'model': 'Test Model',
//                 'color': 'Test Colour',
//                 'year': 2000
//             })
//             .then(data => {
//                 expect(data).to.have.status(200)
//                 expect(data.text.make)

//             })
//             .catch(error => {
//                 console.log(error)
//             })
//     })

    // it('should delete user data', (done) => {
    //     chai.request('http://localhost:3000/articles')
    //         .get('/')
    //         .then(res => {
    //             chai.request('http://localhost:3000/articles')
    //                 .delete('/1')
    //                 .then(data => {
    //                     expect(data).to.have.status(200);
    //                 })
    //                 .catch(error => {
    //                     console.log(error)
    //                 })
    //         });
    // });
// });
