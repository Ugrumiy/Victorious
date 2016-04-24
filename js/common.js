$(function() {

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
    })
    
    $("#main").on('click', function(){
        $mobileMenu.multilevelpushmenu('fullcollapse');
        $('#js_hamburger').removeClass('open');
    })

});