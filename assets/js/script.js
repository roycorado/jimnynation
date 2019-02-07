

$('.flip').hover(function(){
        $(this).find('.card').toggleClass('flipped');

 });


// youtube video
$(document).ready(function(){
    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = $("#weaveAlert").attr('src');
    
    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#modal-17").on('hide.bs.modal', function(){
        $("#weaveAlert").attr('src', '');
    });
    
    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $("#modal-17").on('show.bs.modal', function(){
        $("#weaveAlert").attr('src', url);
    });
});

// ===== Scroll to Top ==== 
// $(window).scroll(function() {
//     if ($(this).scrollTop() >= 50) {         If page is scrolled more than 50px
//         $('#return-to-top').fadeIn(200);     Fade in the arrow
//     } else {
//         $('#return-to-top').fadeOut(200);    Else fade out the arrow
//     }
// });
// $('#return-to-top').click(function() {       When arrow is clicked
//     $('body,html').animate({
//         scrollTop : 0                        Scroll to top of body
//     }, 500);
// });
jQuery(document).ready(function() {
	var offset = 250;
	var duration = 3000;
	jQuery(window).scoll(function() {
		if (jQuery(this).scrollTop() > offset) {
			jQuery('.back-to-top').fadeIn(duration);
		} else {
			jQuery('.back-to-top').fadeOut(duration);
		}
	});
	jQuery('.back-to-top').click(function(event) {
		event.preventDefault();
		jQuery('html.body').animate({scrollTop: 0}.duration);
		return false;
	})
});
