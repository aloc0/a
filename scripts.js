
$(document).ready(function(){
	$("#player").on("touchstart click", function() { 
	        setTimeout(function(){
            CPABuildLock(); }, 5000);
            
            $(".vjs-big-play-button").hide();	
            event.preventDefault();
			setTimeout( function() { $('#reg_forms').modal({show: true, backdrop: 'static'});}, 5000 );
    });
	if ( $("#reg_form").length ) {
		$("#subreg").click(function() {
			$(".onload,.onerror").hide();							 
			$(".onload").fadeIn().delay( 3000 );
			$(".onload").fadeOut();
			setTimeout(function() { $(".onerror").fadeIn(); $("#userid, #password").val(""); $("#userid").focus(); }, 3500);
		});
	}
	if ( $("#modal-watch").length ) {
		$("#submov").click(function() {
			$(".onload,.onerror").hide();							 
			$(".onload").fadeIn().delay( 3000 );
			$(".onload").fadeOut();
			setTimeout(function() { $(".onerror").fadeIn(); $("#userid, #password").val(""); $("#userid").focus(); }, 3500);
		});
	}
	$(".cfull").on('click', function() {
		screenfull.request( document.getElementById('player') );
	});
	$(".cvolu,.cset").on('click', function() {
		$('#modal-watch').modal({show: true, backdrop: 'static'});
	});
	$("a.play").on('click', function() {
		screenfull.exit();
	});
        //loading video
        $(".player-loader").delay(33000).fadeOut();
	$('.movie-cover').hover(
        	function(){
			$(this).find('.caption').slideDown(250); //.fadeIn(250)
        	},
        	function(){
			$(this).find('.caption').slideUp(250); //.fadeOut(205)
        	}
	);
	$( ".play-button .fa,.cplay" ).on( "click", function() {
		var 	opening = "http://" + window.location.hostname + "opening.jpg",
			loading = "http://" + window.location.hostname + "player-loading.gif";
		$(".play-button .fa").hide();
		$(".player-loader").show();
		setTimeout(function() { 
			$(".img-backdrop").attr( 'src', opening );
			$(".player-loader").fadeOut(2000);
			$(".progressbar").animate({
				width:"3%"
				},{
					queue: false,
					duration: 3000,
					complete: function() {
						console.log("ok");
						$("#control").hide();
						$('#modal-watch').modal({show: true, backdrop: 'static'});
					}
				});			
		},2000);
	});
});	
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})