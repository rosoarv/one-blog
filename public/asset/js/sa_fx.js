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