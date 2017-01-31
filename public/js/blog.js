var show_posts = function(pageNum) {

	var offset = (pageNum - 1) * 5;

	$.get( url+'blog/posts/'+offset, function( data ) {
		$( "#blog_posts" ).html( data );
	});

}
