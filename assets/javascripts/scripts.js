//
// Foundation-Jekyll - Javascripts
// Author: @aaronkwhite
//

// Init Foundation
$(document).foundation();

// Init Highlight.js
//hljs.initHighlightingOnLoad();


// Sticky Header
// $('.top-bar').on('sticky.zf.stuckto:top', function(){
//   $(this).addClass('shrink');
// }).on('sticky.zf.unstuckfrom:top', function(){
//   $(this).removeClass('shrink');
// })




// $(window).load(function(){
	
	
	// var tabID = $("#pathways-panel div.tabs-panel").attr('id');

 //    $('#pathways-panel [data-tabs] li').on('click', function(e) {
 //    	var activeID = $(this).attr("id");
 //        console.log(activeID);
 //        $('div[id="' + activeID + '"]').addClass( 'is-active' );
 //        e.preventDefault();
	// });

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
// });


(function($){

    var $doc = $(document),
        $win = $(window);

    $win.on('load', function(){
        // document is fully loaded

        $( "#pathway-accordion li.accordion-group-tab, #curriculum-accordion li.accordion-group-tab" ).click(function(){

            var $container = $('.courseContainer');

                $container.isotope({
                    filter: '*',
                    layoutMode: 'fitRows',
                    itemSelector: '.course-item',
                    stagger: 30
                });


                $('#courseFilter a').click(function(){
                $('#courseFilter .current').removeClass('current');
                $(this).addClass('current');
         
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector
                 });
                 return false;
            }); 
        });
    });
    
})(jQuery);
