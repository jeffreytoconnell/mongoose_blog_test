const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const mongoose = require('mongoose');

const {DATABASE_URL} = require('../config'); // CHECK THIS
const {BlogPost} = require('../models'); // CHECK THIS
const {closeServer, runServer, app} = require('../app'); // CHECK THIS 
const {TEST_DATABASE_URL} = require('../config'); // CHECK THIS

const should = chai.should();
chai.use(chaiHttp);

describe('GET /posts', function(){
    it('should list all on /posts', function(done){
       request.get('/posts')
       .end(function(err, res){
           res.should.have.status(200);
           done();
       });
    });
});