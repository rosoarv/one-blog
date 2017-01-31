// sa button color
var sa_btn_clr = '#0277bd';

// alert for error
var sa_alert_error = function(){

  swal({
    title: "Something went wrong!",
    text: "Please try again later!",
    type: "warning",
    confirmButtonColor: sa_btn_clr,
  });

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
    show_post_list(0);

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
    show_post_list(0);

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

// alert for error
var sa_alert_error = function(){

  swal({
    title: "Something went wrong!",
    text: "Please try again later!",
    type: "warning",
    confirmButtonColor: sa_btn_clr,
  });

}

// Publish successful! display alert    
var sa_login_successful = function(data){

  swal({
    title: "Welcome " + data.displayName + "!",
    text: "Log in successful!",
    type: "success",
    confirmButtonColor: sa_btn_clr,
  });

}

// Publish successful! display alert    
var sa_logout_successful = function(data){

  swal({
    title: "Bye!",
    text: "Log out successful!",
    type: "success",
    confirmButtonColor: sa_btn_clr,
  });

}

// Publish successful! display alert    
var sa_login_error = function(msg){

  swal({
    title: 'Log In Failed!',
    text: msg,
    type: "warning",
    confirmButtonColor: sa_btn_clr,
  });

}
