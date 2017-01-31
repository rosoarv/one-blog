/*** FIREBASE USER AUTHENTICATION ***/

var userdata;

// initialize firebase
var fireauth = {

	init: function() {

	  firebase.initializeApp(config);

	  // get current logged google user
	  firebase.auth().onAuthStateChanged(function(user) {

	    if(user)
	    {
	      userdata = {
	        'displayName': user.displayName,
	        'email': user.email,
	        'photoURL': '',
	        'uid': user.uid,
	        '_token': $('meta[name="csrf-token"]').attr('content')
	        // This gives you a Google Access Token. You can use it to access the Google API.
	      }

			if (user.hasOwnProperty('photoURL')) {
			  userdata.photoURL = user.photoURL
			}

			firebase.auth().currentUser.getToken().then(function(idToken) {
			userdata.token = idToken;
			session.check();

	      }).catch(function(error) {
	        // Handle error
	      });
	    }
	    else
	      session.destroy();

	  });
	},

	signin: function(){

	  var provider = new firebase.auth.GoogleAuthProvider();

	  firebase.auth().signInWithPopup(provider).then(function(result) {
	    
	    // The signed-in user info.
	    userdata = {
	      'displayName': result.user.displayName,
	      'email': result.user.email,
	      'photoURL': result.user.photoURL,
	      'uid': result.user.uid,
	      '_token': $('meta[name="csrf-token"]').attr('content')
	      //'token': result.credential.accessToken // This gives you a Google Access Token. You can use it to access the Google API.
	    };
	   
	   firebase.auth().currentUser.getToken().then(function(idToken) {
	      userdata.token = idToken;
	      session.set();

	    }).catch(function(error) {
	      // Handle error
	    });

	  }).catch(function(error) {
	    // Handle Errors here.
	      sa_login_error(error.message);
	  });

	},

	signout: function(){

		firebase.auth().signOut().then(function() {
		    // Sign-out successful.
		    session.destroy();
		    sa_logout_successful();

		    $('#dashboard').closest('ul li').removeClass('active');
		    $('#blog').closest('li').addClass('active');

		    location.hash = "#blog";

		  }, function(error) {
		    // An error happened.
		    sa_alert_error();
	  });

	}
}

var session = {

	check: function(){
		
		$.post(url+'session/check',userdata,function(result){

			if(result)
		    {
		    	//console.log(result);
		      	session.set();
		    }
		    else
		    	session.destroy();
	      
	  });
	},

	set: function(){
		$.post(url+'session/set',userdata,function(result){
			
			if(!result)
			{
				sa_login_successful(userdata);
				$('#dashboard').closest('li').show();
				$('#login').closest('li').hide();
				location.hash = "#dashboard";
			}
			else
				sa_alert_error();
	      
		});
	},

	destroy: function(){
		$.get(url+'session/destroy',function(result){
         
		    $('#dashboard').closest('li').hide();
		    $('#login').closest('li').show();

		    location.hash = "#blog";
		      
		  });
	}
}

