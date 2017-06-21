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


// TESTS GET 
describe('GET /posts', function(){
    it('should list all on /posts', function(done){
       request.get('/posts')
       .end(function(err, res){
           res.should.have.status(200);
           done();
       });
    });
});

// TESTS POST
describe('POST /posts', function(){
    it('should save a new post', function(done) {
        request.post('/posts')
        .send({
            title: 'test_run',
            done: false // CHECK THIS DUNNO WHAT THIS DOES
        })
        .expect(201)
        .end(function(err, res){
            done(err);
        });
    });
});

// TESTS PUT
describe('PUT posts/:id', function(){ //CHECK THIS ID _ID
    it('should update a post', function(done){
        var post = app.db('posts').first(); //CHECK THIS COLLECTION NAME
        request.put('/posts/' + post.id) //DOUBLE CHECK PATH
        .send({
            title: 'testing put',
            done: false // CHECK THIS DUNNO THAT THIS DOES
        })
        .expect(201)
        .end(function(err, res) {
            done(err);
        });
    });
});

describe('DELETE /posts/:id', function(){
    it('should delete a post', function(done) {
        var post = app.db('posts').first();
        request.put('/posts/' + post.id)
        expect(201)
        .end(function(err,res) {
            done(err);
        });
    });
});