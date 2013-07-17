jQuery(function() {

	$('#answerdiv').addClass('hidden');



	$('#generator').click(function(){

		$('#answerdiv').removeClass('hidden');

		var random = Math.round(Math.random());
		var answer;
		var color;


		switch (random) {
			case 0:
			answer = "Yes";
			color = "A2F2A4";
			break;

			case 1:
			answer = "No";
			color = "FF144B";
			break;
		}


		$('#answer_span').text(answer);

		$('#generator').addClass('hidden');

		$('#answerdiv').css('background-color', "#" + color);

	});



	$('#answerdiv').click(function(){

		$('#generator').removeClass('hidden');
		$('#answerdiv').addClass('hidden');

	});

	var win_height = $(window).height();
	var div_height = $('.button').height() / 2;
	var top_coord = (win_height / 2) - div_height - 35;

	$('.button').css('top', top_coord);

});




