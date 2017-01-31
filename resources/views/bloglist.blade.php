<?php foreach($posts as $post): ?>
	<div class="row">
		<div class="col s12">
		  <div class="card">
		    <div class="card-content">
		      <p>
		      	<?php echo $post->post_html; ?>
		      </p>
		    </div>
		    <div class="card-action">
		    	
		    	<?php if($post->post_title): ?>
		    		<h6><?php echo $post->post_title; ?></h6>
		    	<?php endif; ?>

		    	By <b><?php echo $post->name; ?></b> on 
		    	<b>
		    		<?php
		    			$int = strtotime($post->date_published);
	                    echo date('F j, Y g:i A', $int);
		    		?>
		    	</b>
		    </div>
		  </div>
		</div>
	</div>
<?php endforeach; ?>
