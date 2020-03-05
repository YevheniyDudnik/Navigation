$(document).resize(function(){
    displayNavigationMobile();
});

function displayNavigationMobile() { //TODO
    let html = 'html';
    let navigationMobile = '#navigation--mobile';
    if ($(window).width() >= 768){
        $(html).removeClass();
        $(navigationMobile).removeClass('mm-current mm-opened');
    };
}