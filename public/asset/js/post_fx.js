// redirect to all posts
var goto_list = function(){

  if(page)
    $('#'+page).removeClass('disabled');
  
  page = 'list_post';
  $(this).addClass('disabled');

  $.get( url+"posts/get_posts", function( data ) {
    $( "#dashboard_view" ).html( data );
  });

  scroll_up();

}

// redirect to new post form
var goto_new_post = function(){
  
    if(page)
      $('#'+page).removeClass('disabled');

    page = 'new_post';
    $(this).addClass('disabled');

    $.get( url+"posts/new_post", function( data ) {
      $( "#dashboard_view" ).html( data );
    });

    scroll_up();
}



// alert for fields required
var sa_fields_required = function(){

  swal({
    title: "All fields are required!",
    text: "Please fill up all the fields!",
    type: "warning",
    confirmButtonColor: sa_btn_clr,
  });

}



// Publish successful! display alert    
var sa_publish_successful = function(){

  swal({
    title: "Successful!",
    text: "Your post was published successfully!",
    type: "success",
    confirmButtonColor: sa_btn_clr,
  },
  function(){
    // redirect to list_posts
    goto_list();

  });

}

// saving draft successful! display alert  
var sa_draft_successful = function(){
    
  swal({
    title: "Successful!",
    text: "Your post was saved successfully!",
    type: "success",
    confirmButtonColor: sa_btn_clr,
  },
  function(){
    // redirect to list_posts
    goto_list();

  });

}

// Delete successful! display alert    
var sa_delete_successful = function(data){

  swal({
    title: "Deleted!",
    text: "Post was deleted!",
    type: "success",
    confirmButtonColor: sa_btn_clr,
  });

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

var bind_edit_post = function(){

    $('.edit_post').click(function(){
      
      if(page)
        $('#'+page).removeClass('disabled');

      page = '';

      var id = $(this).closest('tr').attr('id');

      $.get( url+"posts/load_post/"+id, function( data ) {
        $( "#dashboard_view" ).html( data );
        Materialize.updateTextFields();
      });
    
      return false;
  })

}

var bind_delete_post = function(){

  // remove post
  $('.delete_post').click(function(){

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

      $.get( url+"posts/remove_post/"+id, function( data ) {
        $( "#dashboard_view" ).html( data );
      });

      sa_delete_successful();

    });

  });

}