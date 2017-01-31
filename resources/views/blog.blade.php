<div class="section no-pad-bot" id="index-banner">
  <div class="container">

    <div class="row center">
    	 <br>
      <h5 class="header col s12 light">
      	A clean, stylish, one page Blog application.
      </h5>
    	<br>

    </div>
   

  </div>
</div>

<div id="blog_posts"></div>

<div class="row">

    <div class="col s12 m12 pagination">
        <div id="pagination-long"></div>
    </div>

</div>
<script type="text/javascript" src="{{ URL::asset('js/blog.js') }}"></script>
<script type="text/javascript">
$(function() {
  
  $('#pagination-long').materializePagination({
      align: 'center',
      lastPage:  <?php echo $last_page; ?>,
      firstPage:  1,
      useUrlParameter: false,
      onClickCallback: function(requestedPage){

         show_posts(requestedPage);
         scroll_up();
      
      }
  }); 

});
</script>