<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <title>One Blog @yield('title')</title>

        <!-- Styles -->
        <link rel="stylesheet" href="{{ URL::asset('css/icon.css') }}" />
        <link rel="stylesheet" href="{{ URL::asset('css/materialize/css/materialize.css') }}" />
        <link rel="stylesheet" href="{{ URL::asset('plugins/sweet-alert/sweetalert.css') }}" />
        <link rel="stylesheet" href="{{ URL::asset('css/style.css') }}" />
    </head>
    <body>
        
        <div class="container">
			<h2 class="center">Post Generator</h2>

			<div class="row">
				<div class="col offset-s2 s8">

						<div id="stats">
							<h5>Statistics</h4>
							<p id="stats_counter">
								<b>User Count:</b> <?php echo $num_users; ?><br>
								<b>Post Count:</b> <?php echo $num_posts; ?>
							</p>
						</div>

				</div>
			</div>

			<div class="row">
		    <form class="col offset-s2 s8">
		    	
		    	<h5>Generate Post</h5>
		      <div class="row">
		      	
		      	<div id="form_input">
			        <div class="col s6">
			          No. of Users: 
			          <div class="input-field inline">
			            <input id="user_num" type="number" class="validate">
			          </div>
			        </div>

			        <div class="col s6">
			          Posts per User: 
			          <div class="input-field inline">
			            <input id="post_num" type="number" class="validate">
			          </div>
			        </div>
			      </div>

			      <div id="form_loader">
			      	<div class="col offset-s2 s8">
			      		<span class="center">Generating.. Please wait...</span>
			      		<div class="progress">
							      <div class="indeterminate"></div>
							  </div>
							</div>
			      </div>

		      </div>
		      <div class="row">
		      	<div class="col s12">
								
		      		<button class="btn waves-effect waves-light" type="button" id="btn_generate">Generate
						    <i class="material-icons right">send</i>
						  </button>

						  <button class="btn waves-effect waves-light red" type="button" id="btn_stop">Stop</button>

		      	</div>
		      </div>

		    </form>
		  </div>
		</div>

        <script type="text/javascript" src="{{ URL::asset('js/jquery.min.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('css/materialize/js/bin/materialize.min.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('plugins/sweet-alert/sweetalert.min.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('js/postgen.js') }}"></script>

    </body>
</html>
