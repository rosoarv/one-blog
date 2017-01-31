<link rel="stylesheet" href="{{ URL::asset('plugins/meltdown/css/meltdown.css') }}" />
<style type="text/css">
  /* Place both meltdowns at the top for easier testings (in a large enough window): */
  .meltdown_wrap { display: inline-block; vertical-align: top; }
</style>

<div class="row">
  <div class="col s12">

    <div class="section no-pad-bot" id="index-banner">

        <br><br>
        <h4 class="header left orange-text">Edit Post</h4>
        <br><br>

    </div>   

  </div>
</div>


<?php foreach($post_data as $post): ?>
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input id="title" type="text" data-length="50" value="<?php echo $post->post_title; ?>">
            <label for="title">Title</label>
            {!! csrf_field() !!}
          </div>
        </div>
        <div class="row">
          <div class="col s12">
           
            <textarea id="post" class="meltdown" rows="7" cols="80">
<?php echo $post->post_markdown; ?>

            </textarea>

          </div>
        </div>
        <div class="row right">
          <button class="btn waves-effect waves-light grey lighten-1 white-text back" type="button">Back</button>
          <button class="waves-effect waves-light btn btn-small red darken-3 delete_post tooltipped" type="button" data-position="bottom" data-tooltip="Remove" id="<?php echo $post->post_id; ?>"><i class="material-icons">delete</i></button>
          <button class="btn waves-effect waves-light blue darken-3 tooltipped draft_edit" type="button" data-position="bottom" data-tooltip="Save as draft" id="<?php echo $post->post_id; ?>"><i class="material-icons">receipt</i></button> 
          <button class="btn waves-effect waves-light green publish_edit" type="button" id="<?php echo $post->post_id; ?>">Publish
            <i class="material-icons right">send</i>
          </button> 
        </div>
      </form>
    </div>

<?php endforeach; ?>


</div>

<script type="text/javascript" src="{{ URL::asset('plugins/meltdown/js/lib/rangyinputs-jquery.min.js') }}"></script>
<script type="text/javascript" src="{{ URL::asset('plugins/meltdown/js/lib/element_resize_detection.js') }}"></script>
<script type="text/javascript" src="{{ URL::asset('plugins/meltdown/js/lib/js-markdown-extra.js') }}"></script>
<script type="text/javascript" src="{{ URL::asset('plugins/meltdown/js/jquery.meltdown.js') }}"></script>
<!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->

<script type="text/javascript">
$(document).ready(function() {
    $('input#title').characterCounter();

    // Variables are exposed on the window object for easy testings in your console:
    $('#post').meltdown({
      openPreview: true,
      previewHeight: "auto",
      sidebyside: true
    });
    
});
</script>