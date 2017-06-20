var mongoose = require('mongoose');

// Blog Post Schema
var blogs = mongoose.Schema({
    author: {
        firstName: String,
        lastName: String
    },
    title: {
        type: String
    },
    content: {
        type: String
    },
    created: {
        type: String,
        default: Date.now
    }
});

const Posts = module.exports = mongoose.model('blog', blogs) /// THIS BASTARD LINE // SINGULAR VERSION COLLECTION // SCHEMA

// GET POSTS
module.exports.getPosts = function(callback, limit){
    Posts.find(callback).limit(limit);
}

// GET POSTS BY ID
module.exports.getPostsById = function(id, callback){
    Posts.findOne(id, callback);
}


