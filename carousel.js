$(document).ready(function(){
	$(function() {

        $('.jcarousel').jcarousel({
          
     
        });

    
        $('.jcarousel-prev').jcarouselControl({
            target: '-=1'
        });
    
        $('.jcarousel-next').jcarouselControl({
            target: '+=1'
        });
        $('.jcarousel').jcarousel({
            wrap: 'circular'
        });

    });
    
});