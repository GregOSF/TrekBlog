$(function() {

  
  function NewPost(user, loc, post) {
    this.user = user;
    this.loc = loc;
    this.post = post;
  }

  

  NewPost.all = [
        new NewPost('Jack', 'Patagonia', 'Cupcake ipsum dolor sit. Amet I love liquorice jujubes pudding croissant I love pudding. Apple pie macaroon toffee jujubes pie tart cookie applicake caramels. Halvah macaroon I love lollipop. Wypas I love pudding brownie cheesecake tart jelly-o. Bear claw cookie chocolate bar jujubes toffee.'),
        new NewPost('Alice', 'Himalayas', 'Cupcake ipsum dolor sit. Amet I love liquorice jujubes pudding croissant I love pudding. Apple pie macaroon toffee jujubes pie tart cookie applicake caramels. Halvah macaroon I love lollipop. Wypas I love pudding brownie cheesecake tart jelly-o. Bear claw cookie chocolate bar jujubes toffee.'),
        new NewPost('Sarah', 'Grand Canyon', 'Cupcake ipsum dolor sit. Amet I love liquorice jujubes pudding croissant I love pudding. Apple pie macaroon toffee jujubes pie tart cookie applicake caramels. Halvah macaroon I love lollipop. Wypas I love pudding brownie cheesecake tart jelly-o. Bear claw cookie chocolate bar jujubes toffee.')
  ];

  NewPost.prototype.save = function() {
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

  
/*  $newPosts.on('click', '.blogPost', function() {
    $(this).toggleClass('removePost');
  });*/

  var $blogPost = $('.blogPost')
  var $removeButton = $('.removeButton')

  $blogPost.on("click", function (event) {
    event.preventDefault();
    var $blogPosts = $(this).closest(".blogPost");
    var index = $blogPost.attr('data-index');
    $(this).fadeOut("slow");

/*  $('#new-Posts').on("click", function(event) {
  event.preventDefault();
  $(this).fadeOut("slow");
  });
*/
  
  NewPost.all.splice(index, 1);
  console.log(NewPost.all);


/*  $blogPost.remove();*/


  $('.blogPost').each(function(index) {
    $(this).attr('data-index', index);
 
  });
});



});

