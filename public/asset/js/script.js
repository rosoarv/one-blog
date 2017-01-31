/*** SWEET ALERTS ***/

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

/*** FIREBASE USER AUTHENTICATION ***/

var user_data;

// initialize firebase
var firebase_init = function(){

  firebase.initializeApp(config);

  // get current logged google user
  firebase.auth().onAuthStateChanged(function(user) {

    if(user)
    {
      user_data = {
        'displayName': user.displayName,
        'email': user.email,
        'photoURL': user.photoURL,
        'uid': user.uid,
        // This gives you a Google Access Token. You can use it to access the Google API.
      }
      firebase.auth().currentUser.getToken().then(function(idToken) {
        user_data.token = idToken;
         check_session();

      }).catch(function(error) {
        // Handle error
      });

        

    }
    else
      clear_session();

  });
}

// Google Sign In
var google_signin = function(){

  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    
    // The signed-in user info.
    user_data = {
      'displayName': result.user.displayName,
      'email': result.user.email,
      'photoURL': result.user.photoURL,
      'uid': result.user.uid,
      //'token': result.credential.accessToken // This gives you a Google Access Token. You can use it to access the Google API.
    };
   
   firebase.auth().currentUser.getToken().then(function(idToken) {
      user_data.token = idToken;
    //console.log(idToken);
       set_session();

    }).catch(function(error) {
      // Handle error
    });

  }).catch(function(error) {
    // Handle Errors here.
      swal({
        title: 'Log In Failed!',
        text: error.message,
        type: "warning",
        confirmButtonColor: sa_btn_clr,
      });
  });

}

var google_signout = function(){
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    clear_session();
    sa_logout_successful();

    $('#dashboard').closest('ul li').removeClass('active');
    $('#blog').closest('li').addClass('active');

    $.get( url+"main/show_blog", function( data ) {
      $( "#mainContent" ).html( data );
    });

  }, function(error) {
    // An error happened.
    sa_alert_error();
  });
}

// set session for logged-in user
var set_session = function(){

  $.post(url+'main/set_session',user_data,function(result){
       //console.log('temp'+result);
    if(!result)
    {
      sa_login_successful(user_data);
      $('#dashboard').closest('li').show();
      $('#login').closest('li').hide();
    }
    else
      sa_alert_error();
      
  });

}

// check session for logged-in user
var check_session = function(){

  $.post(url+'main/check_session',user_data,function(result){
    //console.log(result);
    if(result)
    {
      set_session();
      
    }
    else
      clear_session();
      
  });

}

// clear session for logged-out user
var clear_session = function(){

  $.get(url+'main/clear_session',function(result){
         
    $('#dashboard').closest('li').hide();
    $('#login').closest('li').show();
      
  });

}

var scroll_up = function(){
  $("html, body").animate({ scrollTop: 0 }, "slow");
}