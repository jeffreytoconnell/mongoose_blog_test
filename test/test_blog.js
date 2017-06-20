const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const mongoose = require('mongoose');

const should = chai.should();

const {DATABASE_URL} = require('../config'); // CHECK THIS
const {BlogPost} = require('../models'); // CHECK THIS
const {closeServer, runServer, app} = require('../app'); // CHECK THIS 
const {TEST_DATABASE_URL} = require('../config'); // CHECK THIS

chai.use(chaiHttp);

describe('GET', function() {
    it('should return all posts', function(){
        let res;
        return chai.request(app)
        .get('/posts')
        .then(function(_res){
            res = _res;
            res.should.have.status(200);
            res.body.should.have.length.of.at.least(1);
            return Posts.count(); //CHECK POSTS
        })
        .then(function(count){
            res.body.posts.should.have.length.of(count);
        })
    })
})

