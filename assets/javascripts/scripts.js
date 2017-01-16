//
// Foundation-Jekyll - Javascripts
// Author: @aaronkwhite
//

// Init Foundation
$(document).foundation();

// Init Highlight.js
//hljs.initHighlightingOnLoad();

// Sticky Header
$('.top-bar').on('sticky.zf.stuckto:top', function(){
  $(this).addClass('shrink');
}).on('sticky.zf.unstuckfrom:top', function(){
  $(this).removeClass('shrink');
})




$(window).load(function(){

	
	
	var tabID = $("#pathways-panel div.tabs-panel").attr('id');
	
	// alert(activeID);

    // $('#pathways-panel li.tabs-title').on('click', function(e) {
    	
    // 	$('div[id="' + activeID + '"]').toggleClass( 'is-active' );

    //   e.preventDefault();
    // });

    $('#pathways-panel [data-tabs]').on('change.zf.tabs', function() {
    	var activeID = $("#pathways-panel li.tabs-title.is-active").find("a").attr("href");
    	$('div[id="' + activeID + '"]').toggleClass( 'is-active' );
	});

	// if (tabID == activeID) {
		
	// 	$("#pathways-panel li.tabs-title").click(function(){
 //    	  $("#pathways-panel div.tabs-panel").addClass("is-active");
 // 		});

		
	// }


	// if(!!tabActive){
	// 	$(tabActive).find("a").attr('href');
	// 	var hrefID = $(this);

	// 	if (tabID == hrefID) {
	// 		$(".tabs-panel").addClass("is-active");
	// 	}
		
	// }

    var $container = $('.courseContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.courseFilter a').click(function(){
        $('.courseFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
});
