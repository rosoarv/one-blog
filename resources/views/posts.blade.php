<div class="row">
  <div class="col s12"> 
    <div class="section no-pad-bot" id="index-banner">

        <br><br>
        <h4 class="header left orange-text">Manage Posts</h4>
        <br><br><br><br>

    </div>  
  </div>
</div>

<div id="posts_list"></div>

<div class="row">

    <div class="col s12 m12 pagination">
        <div id="pagination-long"></div>
    </div>

</div>

<script type="text/javascript">
$(function() {
  
  $('#pagination-long').materializePagination({
      align: 'center',
      lastPage:  <?php echo $last_page; ?>,
      firstPage:  1,
      useUrlParameter: false,
      onClickCallback: function(requestedPage){

         get_post_list(requestedPage);
         scroll_up();
      
      }
  }); 

});
</script>