// require express framework and additional modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    _ = require('underscore');

// Route JS and Stylesheet
app.use(express.static(__dirname + '/public'));

// tell app to use bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));



var posts = [
	{id: 1, user: 'Jack', place: 'Patagonia', post: 'Its awesome'},
	{id: 2, user: 'Sarah', place: 'Himalayas', post: 'Its sweet' },
	{id: 3, user: 'Rob', place: 'Grand Canyon', post: 'Its cool' }
];


// STATIC ROUTES

// root (serves index.html)
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});


app.get ('/blogposts', function(req, res) {
	res.json(posts);
});

app.get('/blogposts/:id', function (req, res) {
	var targetId = parseInt(req.params.id);
	var foundPost = _.findWhere(posts, {id: targetId});
	res.send(foundPost);
});

//API Routes

// blogposts




// Create new blogposts
app.post ('/blogposts', function (req, res) {
	var newPost = req.body;
	// set sequential id (last id in `phrases` array + 1)
	if (posts.length > 0) {
	  newPost.id = posts[posts.length - 1].id +  1;
	} else {
	  newPost.id = 0;
	};

	posts.push(newPost);
	res.json(newPost);

});

// Update phrase
app.put ('/blogposts/:id', function (req, res) {
	//set the value of id
	var targetId = parseInt(req.params.id);
	
	// Find item in posts array matching the ID
	var foundPost = _.findWhere(posts, {id: targetId});

	// Edit User
	foundPost.user = req.body.user;

	// Edit place
	foundPost.place = req.body.place;

	// Edit Description
	foundPost.post = req.body.post;

	res.json(foundPost);
	


});

app.delete('/blogposts/:id', function (req, res) {
  
  // set the value of the id
  var targetId = parseInt(req.params.id);

  // find item in `phrases` array matching the id
  var foundPost = _.findWhere(posts, {id: targetId});

  // get the index of the found item
  var index = posts.indexOf(foundPost);
  
  // remove the item at that index, only remove 1 item
  posts.splice(index, 1);
  
  // send back deleted object
  res.json(foundPost);
});

// listen on port 3000
app.listen(3000, function () {
  console.log('server started on localhost:3000');
});