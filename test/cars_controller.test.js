const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;

chai.use(chaiHttp);

const url = 'http://localhost:3000'

describe('Cars API', () => {
    it('should load car data', () => {
        chai.request(`${url}/cars`)
            .get('/cars')
            .then(data => {
                expect(data).to.have.status(200)
                    // expect(data.title).to.be('News Article')
                    // expect(data.author).to.be('John Smith')
            })
    })

    it('should post car data', () => {
        chai.request(`${url}/cars`)
            .post('/')
            .type('form')
            .send({
                'make': 'Test Make',
                'model': 'Test Model',
                'color': 'Test Colour',
                'year': 2000
            })
            .then(data => {
                expect(data).to.have.status(200)
                expect(data.text.make)

            })
            .catch(error => {
                console.log(error)
            })
    })

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
});
