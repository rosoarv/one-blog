 <div class="row">
  <div class="col s12 m12">

    <div class="card">
      <div class="card-content">
        <!-- <span class="card-title">All Posts</span> -->
        <?php if($posts): ?>
        <table id="post_table">
          <thead>
            <tr>
              <th data-field="num" style="width:50px;">No.</th>
              <th data-field="title">Title</th>
              <th data-field="status">Status</th>
              <th data-field="status">Date Published</th>
              <th data-field="status">Last Modified</th>
              <th data-field="options" class="center" style="width:100px;">Options</th>
            </tr>
          </thead>
          <tbody id="post_list">
            <?php $i=$start; foreach($posts as $post): ?>

              <tr id="<?php echo $post->post_id; ?>">
                <td class="center"><?php echo $i++; ?></td>
                <td>
                  <a href="#" class="edit_post">
                    <?php echo ucwords( $post->post_title ); ?></td>
                  </a>
                <td><?php echo ucwords( $post->status ); ?></td>
                <td>
                    <?php
                      if($post->date_published != null)
                      {
                        $int = time($post->date_published);
                        echo date('F j, Y g:i A', $int);
                      }
                        
                    ?>
                </td>
                <td>
                    <?php
                        $int = time($post->date_modified);
                        echo date('F j, Y g:i A', $int);
                    ?>
                </td>
                <td class="center">
                  <button class="waves-effect waves-light btn btn-small red darken-3 delete_post tooltipped" data-position="right" data-tooltip="Remove Post" id="<?php echo $post->post_id; ?>"><i class="material-icons">delete</i></button>
                </td>
              </tr>
            
            <?php endforeach; ?>
          
          </tbody>
        </table>
      <?php else: ?>

        <p>No Posts Found.</p>

      <?php endif; ?>
      </div>
    </div>
  </div>
</div>