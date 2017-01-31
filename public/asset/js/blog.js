$(document).ready(function(){
  
	$.get( url+"blog/get_posts", function( data ) {
	  $( "#blog_view" ).html( data );
	});
  

});