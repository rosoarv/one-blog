$(document).ready(function() { 

    $('#dashboard').closest('li').hide();
    $('#login').click(function(){
		fireauth.signin();
		return false;
	})

    fireauth.init();


});