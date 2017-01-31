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
        <div class="navbar-fixed">
          <nav class="light-blue darken-3" role="navigation">
            <div class="nav-wrapper container"><a id="logo-container" href="#" onclick="return false" class="brand-logo">One Blog</a>
              <ul class="right hide-on-med-and-down" id="menu">
                <li><a href="#blog" id="blog">Blog</a></li>
                <li><a href="#dashboard" class="hidden" id="dashboard">Dashboard</a></li>
                <li><a href="#" id="login">Log In</a></li>
              </ul>
            </div>
          </nav>
        </div>


        <div id="mainContent" class="container">

            @section('content')

            @show

        </div>

        <script type="text/javascript" src="{{ URL::asset('js/jquery.min.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('css/materialize/js/bin/materialize.min.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('plugins/material-pagination/materialize-pagination.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('plugins/sweet-alert/sweetalert.min.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('js/navigation.js') }}"></script>
        <script src="https://www.gstatic.com/firebasejs/3.6.7/firebase.js"></script>
        <script type="text/javascript" src="{{ URL::asset('js/firebase.config.js') }}"></script>        
        <script type="text/javascript" src="{{ URL::asset('js/fireauth.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('js/index.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('js/sa_alert.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('js/main.js') }}"></script>

    </body>
</html>
