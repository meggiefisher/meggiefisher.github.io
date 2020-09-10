function main(){
				$("p").delay(900).animate({"opacity": "1"}, 1000);
				$("#resume li").delay(500).animate({"opacity": "1"}, 700);
				$('.class').hide();
                $('.class_button').on('click',function(){
           			//execute this code when class_button is clicked
                  $(this).next().slideToggle(400);
                  $(this).toggleClass('active');
				  $(this).text($(this).text() == '+' ? '-' : '+');
                                         });
}

$(document).ready(main);