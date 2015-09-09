$(document).ready(function() {
     $(function(){
        $('.eng').click(function() {
            $(this).next().toggle();
            $(this).addClass("focus")
        });
    });
});