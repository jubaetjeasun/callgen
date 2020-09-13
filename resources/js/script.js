$(document).ready(function(){

    // sticky navigation
    $('.js-aboutus--section').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    },{
        offset:'60px;'
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault()
      
        $('html, body').animate(
          {
            scrollTop: $($(this).attr('href')).offset().top,
          },
          900,
          'linear'
        )
      })

    // mobile navigation
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        nav.slideToggle(200);
    })

    // animation on scroll
    // hiding elements
    $('.js-wp-aboutus-first')
    .css('opacity', 0) // immediately hide element
    .waypoint(function(direction) {
        if (direction === 'down') {
        $(this.element).animate({ opacity: 1 })
        }
    }, {
        offset: '80%'
    })

    //giving animation
    $('.js-wp-aboutus-first').waypoint(function(direction){
        $('.js-wp-aboutus-first').addClass('animate__animated animate__fadeInLeftBig');
        
    },{
        offset: '80%'
    });
    // hiding elements
    $('.js-wp-aboutus-second')
    .css('opacity', 0) // immediately hide element
    .waypoint(function(direction) {
        if (direction === 'down') {
        $(this.element).animate({ opacity: 1 })
        }
    }, {
        offset: '80%'
    })

    //giving animation
    $('.js-wp-aboutus-second').waypoint(function(direction){
        $('.js-wp-aboutus-second').addClass('animate__animated animate__fadeInRightBig');
        
    },{
        offset: '80%'
    });
    // hiding elements
    $('.js-wp-servicesection')
    .css('opacity', 0) // immediately hide element
    .waypoint(function(direction) {
        if (direction === 'down') {
        $(this.element).animate({ opacity: 1 })
        }
    }, {
        offset: '80%'
    })

    //giving animation
    $('.js-wp-servicesection').waypoint(function(direction){
        $('.js-wp-servicesection').addClass('animate__animated animate__fadeInUpBig');
        
    },{
        offset: '80%'
    });

     //giving animation
     $('.js-wp-oursection').waypoint(function(direction){
        $('.js-wp-oursection').addClass('animate__animated animate__pulse');
        
    },{
        offset: '40%'
    });
    // hiding elements
    $('.js-wp-peoplecomment1')
    .css('opacity', 0) // immediately hide element
    .waypoint(function(direction) {
        if (direction === 'down') {
        $(this.element).animate({ opacity: 1 })
        }
    }, {
        offset: '80%'
    })

    //giving animation
    $('.js-wp-peoplecomment1').waypoint(function(direction){
        $('.js-wp-peoplecomment1').addClass('animate__animated animate__fadeInLeftBig');
        
    },{
        offset: '80%'
    });
    // hiding elements
    $('.js-wp-peoplecomment3')
    .css('opacity', 0) // immediately hide element
    .waypoint(function(direction) {
        if (direction === 'down') {
        $(this.element).animate({ opacity: 1 })
        }
    }, {
        offset: '80%'
    })

    //giving animation
    $('.js-wp-peoplecomment3').waypoint(function(direction){
        $('.js-wp-peoplecomment3').addClass('animate__animated animate__fadeInRightBig');
        
    },{
        offset: '80%'
    });
    // hiding elements
    $('.js-wp-peoplecomment2')
    .css('opacity', 0) // immediately hide element
    .waypoint(function(direction) {
        if (direction === 'down') {
        $(this.element).animate({ opacity: 1 })
        }
    }, {
        offset: '80%'
    })

    //giving animation
    $('.js-wp-peoplecomment2').waypoint(function(direction){
        $('.js-wp-peoplecomment2').addClass('animate__animated animate__fadeInUpBig');
        
    },{
        offset: '80%'
    });
    // hiding elements
    $('.js-wp-contactsec1')
    .css('opacity', 0) // immediately hide element
    .waypoint(function(direction) {
        if (direction === 'down') {
        $(this.element).animate({ opacity: 1 })
        }
    }, {
        offset: '80%'
    })

    //giving animation
    $('.js-wp-contactsec1').waypoint(function(direction){
        $('.js-wp-contactsec1').addClass('animate__animated animate__fadeInLeftBig');
        
    },{
        offset: '80%'
    });
    // hiding elements
    $('.js-wp-contactsec2')
    .css('opacity', 0) // immediately hide element
    .waypoint(function(direction) {
        if (direction === 'down') {
        $(this.element).animate({ opacity: 1 })
        }
    }, {
        offset: '80%'
    })

    //giving animation
    $('.js-wp-contactsec1').waypoint(function(direction){
        $('.js-wp-contactsec2').addClass('animate__animated animate__fadeInRightBig');
        
    },{
        offset: '80%'
    });

    
});

//   active section navigation border bottom 
function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.main-nav li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.main-nav li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

