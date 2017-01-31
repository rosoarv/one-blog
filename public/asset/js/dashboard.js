$(document).ready(function(){

  page = 'list_post';
  set_profie();
  
	$('.tooltipped').tooltip({
		delay: 50
	});

  // show all posts
  $('#list_post').click(function(){
  
    if(page)
      $('#'+page).removeClass('disabled');
     
    page = 'list_post';
    $(this).addClass('disabled');

    $.get( url+"posts/get_posts", function( data ) {
		  $( "#dashboard_view" ).html( data );
      scroll_up();
		});

  });

  // show new post form
  $('#new_post').click(function(){

    if(page)
        $('#'+page).removeClass('disabled');

  	page = 'new_post';
  	$(this).addClass('disabled');

    $.get( url+"posts/new_post", function( data ) {
		  $( "#dashboard_view" ).html( data );
      scroll_up();
		});

  });

  // profile settings
   $('.profile').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
  
  // logout user function
  $('#logout').click(function(){
    // Hide sideNav
    $('.profile').sideNav('hide');
    google_signout();
    return false;
  });

});

// set user profile
var set_profie = function(){
  $('#profile_photo').attr('src',user_data.photoURL);
  $('#profile_name').text(user_data.displayName);
  $('#profile_email').text(user_data.email);
}