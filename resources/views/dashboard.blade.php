<div id="dashboard_view"></div>

<div class="fixed-action-btn">
  <button class="btn-floating btn-large light-blue darken-3">
    <i class="large material-icons">view_module</i>
  </button>
  <ul id="fab_main">
    <!-- <li><a class="btn-floating red tooltipped" data-position="bottom" data-delay="50" data-tooltip="I am tooltip" id="logout" ><i class="material-icons">power_settings_new</i></a></li> -->
    <li><button class="btn-floating blue tooltipped profile" data-activates="profile" data-position="left" data-tooltip="View Profile" id="view_profile"><i class="material-icons">perm_identity</i></button></li>
    <li><button class="btn-floating green tooltipped new_post" data-position="left" data-tooltip="New Post" id="new_post"><i class="material-icons">playlist_add</i></button></li>
    <li><button class="btn-floating amber accent-4 tooltipped" data-position="left" data-tooltip="Manage Posts" id="list_post"><i class="material-icons">list</i></button></li>
  </ul>
</div>

<ul id="profile" class="side-nav">
	<li>
		<div class="userView">
	  	<div class="background">
	    	<img src="{{ URL::asset('img/office.jpg') }}" id="profile_bg">
	  	</div>
  		<img class="circle" src="{{ URL::asset('img/yuna.jpg') }}" id="profile_photo">
  		<span class="white-text name profile_name" id="profile_name">One Blog</span>
  		<span class="white-text email" id="profile_email">user@oneblog.com</span>
		</div>
	</li>
	<li><a href="#!" id="logout"><i class="material-icons">power_settings_new</i>Log Out</a></li>
</ul>

<script type="text/javascript" src="{{ URL::asset('js/dashboard.js') }}"></script>