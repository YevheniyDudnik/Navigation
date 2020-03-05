$(document).resize(function(){
    displayNavigationMobile();
});

function displayNavigationMobile() { //TODO
    let navigationMobile = '#navigation--mobile';
    if ($(window).width() >= 768){
        if (typeof $(navigationMobile).data('mmenu') !== 'undefined') {
            $(navigationMobile).data('mmenu').close();
        };
    };
}

