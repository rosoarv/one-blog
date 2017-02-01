var url = 'http://localhost:8000/';

$(document).ready(function(){
	
	$('#btn_stop').hide();
	$('#form_loader').hide();

	$('#btn_generate').click(function(){
		generate_post();
	})


	$('#btn_stop').click(function(){

		swal({
	      title: "Are you sure?",
	      text: "You are about to cancel post generation",
	      type: "warning",
	      showCancelButton: true,
	      confirmButtonColor: "#c62828",
	      confirmButtonText: "Yes!",
	      closeOnConfirm: false
	    },
	    function(){
	      action = 'stop';
	      generate_stop();

	      sa_stop();

	    });

	})

});

var user_num = 0;
var post_num = 0;
var start_num = 0;
var action = 'stop';
var i=1, j=1;
var last = '';

setInterval('create_post()',1000);
setInterval('check_stats()',300);

function check_stats(){
	$.get(url+'postgen/stats',function(result){
		$('#stats_counter').html(result);
	});
}

function generate_post()
{
	show_loader();
	action = 'generate';
	user_num = parseInt( $('#user_num').val() );
	post_num = parseInt( $('#post_num').val() );
	last = user_num + '-' + post_num;
	i=1;
	j=1;

	//generate_stop();
	
}

function create_post() {

	if(i!=user_num+1 && action=='generate')
	{
		if(j!=post_num+1 && action=='generate')
		{
			var data = {
				'user_id':i,
				'post_id':j,
				'_token': $('meta[name="csrf-token"]').attr('content')
			};

			$.post(url+'postgen/create',data,function(result){
				
				console.log(result);
				if(result == last)
				{
					sa_done();
					generate_stop();
				}

			});

			j++;
		}
		else
		{
			i++;
			j = 1;
		}
		
	}
	// else
	// {
	// 	if(action=='generate')
	// 		sa_done();

	// 	generate_stop();
	// }

		
}

function generate_stop(){
	show_form();
}

function show_loader() {

	$('#btn_generate').hide();
	$('#form_input').hide();

	$('#btn_stop').show();
	$('#form_loader').show();
}

function show_form() {
	$('#btn_stop').hide();
	$('#form_loader').hide();

	$('#btn_generate').show();
	$('#form_input').show();
}

// sa button color
var sa_btn_clr = '#0277bd';

// alert for done
var sa_done = function(){

  swal({
    title: "Done!",
    text: "Dont close the page. Some contents are still saving!",
    type: "success",
    confirmButtonColor: sa_btn_clr,
  });

}

// alert for stop
var sa_stop = function(){

  swal({
    title: "Stopped!",
    text: "Interrupted by user!",
    type: "warning",
    confirmButtonColor: sa_btn_clr,
  });

}