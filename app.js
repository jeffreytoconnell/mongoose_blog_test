var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//const {DATABASE_URL, PORT} = require('./config');
const Posts = require('./models');

app.use(bodyParser.json()); 

// Connect to Mongoose
mongoose.connect('mongodb://jeff:gunner@ds115352.mlab.com:15352/blogchallenge');
//var db = mongoose.connection;

// GET POSTS

app.get('/posts', function(req, res){
    Posts.getPosts(function(err, posts){
        if(err){
            throw err;
        }
        res.json(posts); 
    });
})

// GET POST BY ID
app.get('/posts/:_id', function(req, res){
    Posts.findById(req.params._id, function(err, posts){
        if(err){
            throw err;
        }
        res.json(posts);
    });
})

// ADD POSTS
app.post('/posts', function(req, res){
    var post = req.body;
    console.log(post);
    var newPost = new Posts(req.body);
    newPost.save(function(err){
        if (err){
            console.log(err);        
        }
        res.send(201);

    })
     //Posts.(post, function(err, doc){
       //  res.status(201);
     //});

    //Posts.addPost(post, function(err, doc){
    //   console.log(err);
     //   console.log(doc);
       // if(err){
        //    throw err;
       // }
       // res.status(201);
   // });
})

// PUT POSTS BY ID
app.put('/posts/:_id', function(req, res){
    var post = req.body;
    Posts.findOneAndUpdate({_id:req.params._id}, post, {}, function(err, post){
        if(err){
            throw err;
        }
        res.status(201);
    });
})

// DELETE POST
app.delete('/posts/:_id', function(req, res)  {
    console.log(req.params._id);
  Posts
    .findByIdAndRemove(req.params._id, function(err, doc){
        if(err){
            throw err;
        }
        res.status(201).json({
            message: "blog was deleted"
        });
    })
    
});

app.listen(8080);
console.log('Running on port 8080...');