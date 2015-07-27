var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


// Make variable for schema
var BlogSchema = new Schema ({
	user: String,
	place: String,
	post: String
});

// First parameter is name of the collection in Mongo
var BlogPost = mongoose.model('posts', BlogSchema);


module.exports = BlogPost;