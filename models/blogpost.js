var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var BlogSchema = new Schema ({
	user: String,
	place: String,
	post: String
});

var BlogPost = mongoose.model('posts', BlogSchema);

module.exports = BlogPost;