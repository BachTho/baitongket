
	$(document).ready(function () {
		var plus = '<i class="color-orther fa fa-plus" aria-hidden="true"></i>';
		var minus = '<i class="color-orther fa fa-minus" aria-hidden="true"></i>';
            // Dòng 1
            // hiện lorem
            $('.them').hide();
            $('#button2').click(function () {
            	if ($('#button2').html() == minus) {
            		$('#button2').html(plus);
            	} else {
            		$('#button2').html(minus);
                        
            	}
            	$('.them').slideToggle();
            });
        });
