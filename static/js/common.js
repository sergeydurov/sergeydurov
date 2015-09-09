$(document).ready(function() {
    $('#stat').click(function() {
        if(document.getElementById('stat').checked) {
            localStorage.setItem('stat', "true");
        } else {
            localStorage.setItem('stat', "false");
        }
    });

    if (localStorage.getItem('stat') == "true") {
        document.getElementById("stat").setAttribute('checked', 'checked');
    } else {
        $('.rus').hide();
        $('.eng').click(function() {
            $(this).next().toggle();
            $(this).addClass("focus")
        });
    }
    
});