$(function() {

  

  var postController = {

    // phrase template
    template: _.template($('#post-template').html()),

    // pass blog posts through template and append to view

    render: function(blogObj) {
      var $blogHtml = $(postController.template(blogObj));
      $('#new-Posts').append($blogHtml);
    },

    // List all blog posts
    all: function() {
      $.get ('/blogposts', function(data) {
        var allPosts = data;

        _.each(allPosts, function(post) {
          postController.render(post);
        });
      });


    },

    // Post new data
    create: function(newUser, newLoc, newDesc) {
      var newPostData = {user: newUser, location: newLoc, post: newDesc};
          $.post ('/blogposts', newPostData, function(data) {
            var newPost = data;
            postController.render(newPost)
          });
    },

    setupView: function() {
      // Append existing blog posts
      postController.all();

      // Add event handler to new blogpost
      $('#new-Entry').on('submit', function(event) {
        event.preventDefault();

        // create new blog post
        var $newUser = $('#user-name').val();
        var $newLoc = $('#user-location').val();
        var $newDesc = $('#user-post').val();
        postController.create($newUser, $newLoc, $newDesc);

        // form reset
        $(this)[0].reset();
        $newUser.focus();
      });

    }


  };

  postController.setupView();



  /*function NewPost(user, loc, post) {
    this.user = user;
    this.loc = loc;
    this.post = post;
  }*/

  

  /*NewPost.all = [
        new NewPost('Jack', 'Patagonia', 'Cupcake ipsum dolor sit. Amet I love liquorice jujubes pudding croissant I love pudding. Apple pie macaroon toffee jujubes pie tart cookie applicake caramels. Halvah macaroon I love lollipop. Wypas I love pudding brownie cheesecake tart jelly-o. Bear claw cookie chocolate bar jujubes toffee.'),
        new NewPost('Alice', 'Himalayas', 'Cupcake ipsum dolor sit. Amet I love liquorice jujubes pudding croissant I love pudding. Apple pie macaroon toffee jujubes pie tart cookie applicake caramels. Halvah macaroon I love lollipop. Wypas I love pudding brownie cheesecake tart jelly-o. Bear claw cookie chocolate bar jujubes toffee.'),
        new NewPost('Sarah', 'Grand Canyon', 'Cupcake ipsum dolor sit. Amet I love liquorice jujubes pudding croissant I love pudding. Apple pie macaroon toffee jujubes pie tart cookie applicake caramels. Halvah macaroon I love lollipop. Wypas I love pudding brownie cheesecake tart jelly-o. Bear claw cookie chocolate bar jujubes toffee.')
  ];*/

 /* NewPost.prototype.save = function() {
    NewPost.all.push(this);
    console.log(NewPost.all);
  };

  NewPost.prototype.render = function() {
    var $newPost = $(newPostTemplate(this));
    this.index = NewPost.all.indexOf(this);
    $newPost.attr('data-index', this.index);

    $newPosts.prepend($newPost);
  };

  var $newEntry = $('#new-Entry');  
  var $newPosts = $('#new-Posts');
  var newPostTemplate = _.template($('#post-template').html());

  
  _.each(NewPost.all, function (NewPost, index) {
    NewPost.render();
  });

  
  $newEntry.on('submit', function(event) {
    event.preventDefault();

  
  var $userName = $('#user-name').val();
  var $userLoc = $('#user-location').val();
  var $userPost = $('#user-post').val();
  var newBlog = new NewPost($userName, $userLoc, $userPost);
  var $postCont = $('#newPostContainer')

  
  newBlog.save();


  newBlog.render();


  $newEntry[0].reset();
  $('#user-name').focus();
  });
*/
  
/*  $newPosts.on('click', '.blogPost', function() {
    $(this).toggleClass('removePost');
  });*/

/*  var $blogPost = $('.blogPost')
  var $removeButton = $('.removeButton')*/

  /*$blogPost.on("click", function (event) {
    event.preventDefault();
    var $blogPosts = $(this).closest(".blogPost");
    var index = $blogPost.attr('data-index');
    $(this).fadeOut("slow");*/
/*
    $(document).on("click", '.blogPost', function (event) {
      event.preventDefault();
      var $blogPosts = $(this).closest(".blogPost");
      var index = $blogPost.attr('data-index');
      $(this).fadeOut("slow");*/

/*  $('#new-Posts').on("click", function(event) {
  event.preventDefault();
  $(this).fadeOut("slow");
  });
*/
  
/*  NewPost.all.splice(index, 1);
  console.log(NewPost.all);*/


/*  $blogPost.remove();*/


/*  $('.blogPost').each(function(index) {
    $(this).attr('data-index', index);
 
  });*/
});




