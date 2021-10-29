jQuery(document).ready(function($) {

//меню
$('#navbar-toggler').click(function() {

    $('#navbarNavAltMarkup').toggle("");
    $('#navbarNavAltMarkup').toggleClass('mob-hide');

    if ($("#navbarNavAltMarkup").hasClass("mob-hide"))
    $('#navbar-toggler img').attr('src', 'menu_img/icon_menu.svg');
    else $('#navbar-toggler img').attr('src', 'menu_img/icon_close_menu.png');

});


$('a[href^="#"]').click( function(e)
    {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0)
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        e.preventDefault();
    });


});
