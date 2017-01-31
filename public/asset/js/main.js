$(document).ready(function(){
	
	firebase_init();

	$.get( url+"main/show_blog", function( data ) {
	  $( "#mainContent" ).html( data );
	});

	$('#dashboard').click(function(){

		$('#blog').closest('ul li').removeClass('active');
		$(this).closest('li').addClass('active');
		
		$.get( url+"main/show_dashboard", function( data ) {
		  $( "#mainContent" ).html( data );

		   $.get( url+"posts/get_posts", function( data ) {
			  $( "#dashboard_view" ).html( data );
			});

		});

	 
		return false;
	})

	$('#dashboard').closest('li').hide();

	$('#blog').click(function(){
		
		$('#dashboard').closest('ul li').removeClass('active');
		$(this).closest('li').addClass('active');

		$.get( url+"main/show_blog", function( data ) {
		  $( "#mainContent" ).html( data );
		});

		return false;
		
	})

	$('#login').click(function(){
		
		google_signin();

		return false;
		
	})

});

