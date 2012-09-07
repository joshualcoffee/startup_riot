
$(function(){
var angle = 0;
$(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
        angle-=1;
        $("#ball, .ball img").rotate(angle); 
    }
    else {
      
      angle+=1;
      $("#ball, .ball img").rotate(angle);        
    }
});
});