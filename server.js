// require express framework and additional modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    _ = require('underscore'),
    mongoose = require('mongoose');

// Route JS and Stylesheet
app.use(express.static(__dirname + '/public'));

// tell app to use bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));

// Connect to database
mongoose.connect('mongodb://localhost/trekblog');

var BlogPost = require('./models/blogpost');

// Seed data
// var posts = [
// 	{id: 1, [{user: 'Jack', place: 'Patagonia', post: "Drinking vinegar taxidermy normcore pug freegan, distillery bitters irony artisan lo-fi chillwave. Lomo Odd Future McSweeney's, twee before they sold out fingerstache stumptown. Migas keffiyeh ethical, Schlitz deep v food truck Kickstarter mumblecore seitan Pinterest Godard salvia cardigan YOLO. Chambray tofu organic, cronut hella High Life irony stumptown migas banh mi VHS Tumblr wolf slow-carb. Listicle Tumblr mumblecore keytar, master cleanse art party tattooed letterpress. Keytar fashion axe wolf post-ironic banh mi. Tilde blog direct trade bicycle rights, selvage banjo Blue Bottle craft beer PBR&B ennui."},
// 	{id: 2, [{user: 'Sarah', place: 'Himalayas', post: "Pour-over fixie DIY Shoreditch. Freegan dreamcatcher skateboard trust fund. Cold-pressed organic roof party heirloom 3 wolf moon pork belly. Fap keytar post-ironic, selfies swag ugh Schlitz. Pug XOXO direct trade, PBR pop-up butcher locavore Echo Park. Intelligentsia Kickstarter beard, Banksy +1 pour-over mumblecore Wes Anderson locavore before they sold out messenger bag artisan roof party brunch Schlitz. Banksy Shoreditch pop-up master cleanse." },
// 	{id: 3, [{user: 'Rob', place: 'Grand Canyon', post: "Sartorial Shoreditch viral tattooed Schlitz Williamsburg. Odd Future Williamsburg next level 3 wolf moon semiotics migas. Forage cardigan tilde polaroid McSweeney's. Freegan irony bespoke literally Banksy Helvetica. Raw denim chambray cornhole Odd Future, flexitarian street art normcore salvia distillery. Echo Park disrupt tilde synth. Banksy distillery kale chips, Thundercats Kickstarter crucifix next level synth art party squid tilde normcore." }
// ];



// Insert seed data into database



// STATIC ROUTES

// root (serves index.html)
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});

// Get all posts
app.get ('/blogposts', function(req, res) {
	// find all posts

	BlogPost.find(function (err, posts) {
		res.json(posts);
		});
});

// app.get('/blogposts/:id', function (req, res) {
// 	var targetId = parseInt(req.params.id);
// 	var foundPost = _.findWhere(posts, {id: targetId});
// 	res.send(foundPost);
// });

//API Routes

// blogposts




// Create new blogposts
// app.post ('/blogposts', function (req, res) {
// 	var newPost = req.body;
// 	// set sequential id (last id in `phrases` array + 1)
// 	if (posts.length > 0) {
// 	  newPost.id = posts[posts.length - 1].id +  1;
// 	} else {
// 	  newPost.id = 0;
// 	};

// 	posts.push(newPost);
// 	res.json(newPost);

// });

// Update phrase
// app.put ('/blogposts/:id', function (req, res) {
// 	//set the value of id
// 	var targetId = parseInt(req.params.id);
	
// 	// Find item in posts array matching the ID
// 	var foundPost = _.findWhere(posts, {id: targetId});

// 	// Edit User
// 	foundPost.user = req.body.user;

// 	// Edit place
// 	foundPost.place = req.body.place;

// 	// Edit Description
// 	foundPost.post = req.body.post;

// 	res.json(foundPost);
	


// });

// app.delete('/blogposts/:id', function (req, res) {
  
//   // set the value of the id
//   var targetId = parseInt(req.params.id);

//   // find item in `phrases` array matching the id
//   var foundPost = _.findWhere(posts, {id: targetId});

//   // get the index of the found item
//   var index = posts.indexOf(foundPost);
  
//   // remove the item at that index, only remove 1 item
//   posts.splice(index, 1);
  
//   // send back deleted object
//   res.json(foundPost);
// });

// listen on port 3000
app.listen(3000, function () {
  console.log('server started on localhost:3000');
});