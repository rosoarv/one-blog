$(document).ready(function() {

  $('.tooltipped').tooltip({
    delay: 50
  });

  // $('#datatable').dataTable({
  //   "oLanguage": {
  //     "sStripClasses": "",
  //     "sSearch": "",
  //     "sSearchPlaceholder": "Enter Keywords Here",
  //     "sInfo": "_START_ -_END_ of _TOTAL_",
  //     "sLengthMenu": '<span>Rows per page:</span><select class="browser-default">' +
  //       '<option value="10">10</option>' +
  //       '<option value="20">20</option>' +
  //       '<option value="30">30</option>' +
  //       '<option value="40">40</option>' +
  //       '<option value="50">50</option>' +
  //       '<option value="-1">All</option>' +
  //       '</select></div>'
  //   },
  //   bAutoWidth: false
  // });

  // display new post form
  // $('.new_post').click(function(){
  //   goto_new_post();
  // });

  // display form with post details
  bind_edit_post();
  bind_delete_post();


  // publish new post
  $('.publish_add').click(function(){

    var data = get_post_data();

    if( validate_post(data) )
    {

      $.post(url+'posts/publish_post',data,function(result){
         
        if(!result)
          sa_publish_successful();
        else
          sa_alert_error();
          
      });

    }
    else
      sa_fields_required(); // if validation is false

  });

  // publish edited post
  $('.publish_edit').click(function(){

    var data = get_post_data();
    data.id = $(this).attr('id');

    if( validate_post(data) )
    {

      $.post(url+'posts/publish_edit',data,function(result){
         
        if(!result)
          sa_publish_successful();
        else
          sa_alert_error();
          
      });

    }
    else
      sa_fields_required(); // if validation is false

  });


  // redirect to list of posts
  $('.back').click(function(){
    goto_list();
  });

  // save new post as draft
  $('.draft_add').click(function(){

    var data = get_post_data();

    if( validate_post(data) )
    {
      // submit draft post to server
      $.post(url+'posts/draft_post',data,function(result){
         
        if(!result)
          sa_draft_successful();
        else
          sa_alert_error();
          
      });

    }
    else
      sa_fields_required();

  });


  // save edited post as draft
  $('.draft_edit').click(function(){

    var data = get_post_data();
    data.id = $(this).attr('id');

    if( validate_post(data) )
    {

      $.post(url+'posts/draft_edit',data,function(result){
         
        console.log(result);
        
        if(!result)
          sa_draft_successful();
        else
          sa_alert_error();
          
      });

    }
    else
      sa_fields_required(); // if validation is false

  });


});


// get post data values
var get_post_data = function(){
  
  var data = {
        'post_title': $('#title').val(),
        'post_markdown' : $('#post').val(),
        'post_html' : Markdown( $('#post').val() )
  }

  return data;
}