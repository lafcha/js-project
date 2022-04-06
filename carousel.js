$(document).ready(function(){
	$(function() {
        $('.jcarousel').jcarousel({
            // Core configuration goes here
        });
    
        $('.jcarousel-prev').jcarouselControl({
            target: '-=1'
        });
    
        $('.jcarousel-next').jcarouselControl({
            target: '+=1'
        });
    });
    
});