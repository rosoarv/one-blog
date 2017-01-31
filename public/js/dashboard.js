$(document).ready(function() {
  
  set_profie();
  show_post_list(0);
  
  bind_tooltip();

});

var page = 'list_post';
// set user profile
var set_profie = function(){
  $('#profile_photo').attr('src',userdata.photoURL);
  $('#profile_name').text(userdata.displayName);
  $('#profile_email').text(userdata.email);

	// profile settings
	$('.profile').sideNav({
	  menuWidth: 300, // Default is 300
	  edge: 'left', // Choose the horizontal origin
	  closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
	  draggable: true // Choose whether you can drag to open on touch screens
	});

}

var bind_tooltip = function(){
	$('.tooltipped').tooltip({
		delay: 50
	});
}

// Event bindings
$(document).on("click", '#new_post', function(event) { 

	show_post_form();

});

// show new post form
var show_post_form = function() {

	console.log('new');

	$.get( url+"posts/new", function( data ) {
	  $( "#dashboard_view" ).html( data );
	  scroll_up();
	  bind_tooltip();
	});

}

// Event bindings
$(document).on("click", '#list_post', function(event) { 

	show_post_list(0);

});

var show_post_list = function(){

	$.get( url+'posts', function( data ) {
	  $( "#dashboard_view" ).html( data );
    scroll_up();
    bind_tooltip();
	});

}

// show list of posts
var get_post_list = function(pageNum) {

	var offset = (pageNum - 1) * 5;

	$.get( url+"posts/list/"+offset, function( data ) {
		$( "#posts_list" ).html( data );
	  scroll_up();
	  bind_tooltip();
	});
	
}

$(document).on("click", '#logout', function(){
  // Hide sideNav
  $('.profile').sideNav('hide');
  fireauth.signout();
  return false;
});

// publish new post
$(document).on("click", '.publish_add', function(event){

  var data = get_post_data('post/new/publish');

  if( validate_post(data) )
  {

    $.post(url+'posts/new/publish',data,function(result){
       
      if(!result)
        sa_publish_successful();
      else
        sa_alert_error();
        
    });

  }
  else
    sa_fields_required(); // if validation is false

});

// get post data values
var get_post_data = function(uri){
  
  var data = {
        'post_title': $('#title').val(),
        'post_markdown' : $('#post').val(),
        'post_html' : Markdown( $('#post').val() ),
        'action' : uri,
        '_token': $('meta[name="csrf-token"]').attr('content')
      }

  return data;
}

// validate post values
var validate_post = function(data){

    if(data.post_title && data.post_html)
    {
      return true;
    }
    else
    {
      return false;
    }
}

// remove post
$(document).on("click", '.delete_post', function(){

  var id = $(this).attr('id');
  
  swal({
    title: "Are you sure?",
    text: "You will not be able to recover this post!",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#c62828",
    confirmButtonText: "Yes, delete it!",
    closeOnConfirm: false
  },
  function(){

    $.get( url+"posts/remove/"+id, function( data ) {
      $( "#dashboard_view" ).html( data );
    });

    sa_delete_successful();
    show_post_list(0);

  });

});

// save new post as draft
$(document).on("click", '.draft_add', function(){

    var data = get_post_data('posts/new/draft');

    if( validate_post(data) )
    {
      // submit draft post to server
      $.post(url+'posts/new/draft',data,function(result){
         
        if(!result)
          sa_draft_successful();
        else
          sa_alert_error();
          
      });

    }
    else
      sa_fields_required();

  });


$(document).on("click", '.edit_post', function(){

    var id = $(this).closest('tr').attr('id');

    $.get( url+"posts/edit/post/"+id, function( data ) {
      $( "#dashboard_view" ).html( data );
      Materialize.updateTextFields();
      scroll_up();
      bind_tooltip();
    });
  
    return false;
})

// save edited post as draft
$(document).on("click", '.draft_edit', function(){

  var data = get_post_data('posts/edit/draft');
  data.id = $(this).attr('id');

  if( validate_post(data) )
  {

    $.post(url+'posts/edit/draft',data,function(result){
       
      if(!result)
        sa_draft_successful();
      else
        sa_alert_error();
        
    });

  }
  else
    sa_fields_required(); // if validation is false

});

// publish edited post
$(document).on("click", '.publish_edit', function(){

  var data = get_post_data('posts/edit/publish');
  data.id = $(this).attr('id');

  if( validate_post(data) )
  {

    $.post(url+'posts/edit/publish',data,function(result){
       
      if(!result)
        sa_publish_successful();
      else
        sa_alert_error();
        
    });

  }
  else
    sa_fields_required(); // if validation is false

});


// redirect to list of posts
$(document).on("click", '.back', function(){
  show_post_list(0);
});
