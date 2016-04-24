$(function() {

    $('#js_open-popup-btn').on('click', function(){
            $('#js_modal-popup').show();
            $('body').addClass('stop-scrolling');
            $('body').bind('touchmove', function(e){e.preventDefault()})
    }) 
    $('#js_close-modal-btn').on('click', function(){
            $('#js_modal-popup').hide();
            $('body').removeClass('stop-scrolling');
            $('body').unbind('touchmove')
    }) 

    $(document).on('scroll', function (e) {
        if ($(this).scrollTop() > 70) {
            $('header').addClass('fixed');
        }
        else {
            $('header').removeClass('fixed');
        }
    })


    $('#desktop-nav-dropdown-anchor').on('click', function(event){
        event.preventDefault();
        var dropout = $('#js_desktop-nav-dropout');
        if(dropout.hasClass('active')) {
            dropout.fadeOut(200).removeClass('active');
        }
        else {
            dropout.fadeIn(200).addClass('active');
        }
    })

    var $mobileMenu = $('#js_mobile-menu');
    var mobileMenuOpen = false;

    $(document).ready(function(){
        $mobileMenu.multilevelpushmenu({
            menuHeight: '100%',
            collapsed: true,
            fullCollapse: true,
            //mode: 'cover',
            onExpandMenuEnd: function(){
                mobileMenuOpen = true;
            },
            onFullCollapseMenuEnd: function(){
                mobileMenuOpen = false;
            },
        });
    });

    $('#js_hamburger').click(function(){
        if( mobileMenuOpen == true){
            $mobileMenu.multilevelpushmenu('fullcollapse');
            $(this).removeClass('open');
        }
        else{
            $mobileMenu.css('visibility','visible');
            $mobileMenu.multilevelpushmenu('expand');
            $(this).addClass('open');
        }
    });

    $(window).on('resize', function(){
        if( $(this).width() > 600 ){
            $('#js_mobile-menu').multilevelpushmenu('fullcollapse');
            $('#js_hamburger').removeClass('open');
        }
        else{
            $('#js_modal-popup').hide();
        }
    })

    $("#main").on('click', function(){
        $mobileMenu.multilevelpushmenu('fullcollapse');
        $('#js_hamburger').removeClass('open');
    })

    $('.js_placeholder').on('click', function(){
        $(this).parent().addClass('active');
        $(this).prev().focus();
    })

    $('input[type="text"], textarea').on('focus change input', function(){
        $(this).parent().addClass('active');
    }).on('blur',function(){
        if ($(this).val() == ''){
            $(this).parent().removeClass('active');
        }
    })

});