$(function () {


    $('.mobile-nav-btn').click(function () {
        $('.mobile-nav').toggleClass('active');
    });

    //*****************************
    // Match Height Functions
    //*****************************
    $('.matchheight').matchHeight();



    //*****************************
    // Range Slider
    //*****************************
    function getVals() {
        // Get slider values
        var parent = this.parentNode;
        var slides = parent.getElementsByTagName("input");
        var slide1 = parseFloat(slides[0].value);
        var slide2 = parseFloat(slides[1].value);
        // Neither slider will clip the other, so make sure we determine which is larger
        if (slide1 > slide2) { var tmp = slide2; slide2 = slide1; slide1 = tmp; }

        var displayElement = parent.getElementsByClassName("rangeValues")[0];
        displayElement.innerHTML = "$ " + slide1 + "k - $" + slide2 + "k";
    }

    window.onload = function () {
        // Initialize Sliders
        var sliderSections = document.getElementsByClassName("range-slider");
        for (var x = 0; x < sliderSections.length; x++) {
            var sliders = sliderSections[x].getElementsByTagName("input");
            for (var y = 0; y < sliders.length; y++) {
                if (sliders[y].type === "range") {
                    sliders[y].oninput = getVals;
                    // Manually trigger event first time to display values
                    sliders[y].oninput();
                }
            }
        }
    }



    //*****************************
    // Slick Slider
    //*****************************



    $('.testimonial-slider').slick({

        dots: false,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        speed: 500,
        pauseOnHover: false,
        vertical: false,
        verticalSwiping: false,
        verticalReverse: false,
        leftMode: false,
        centerMode: true,
        centerPadding: '139px',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '139px',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 0.5,
                    centerMode: true,
                    mobileFirst: true,

                }
            },
            // {
            //     breakpoint: 320,
            //     settings: {
            //         // mobileFirst: true,
            //         slidesToShow: 2,

            //     }
            // }
        ]

    });

    $('.new-arrival-slider').slick({

        dots: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
        pauseOnHover: false,
        vertical: false,
        verticalSwiping: false,
        verticalReverse: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,

                }
            }
        ]

    });
    $('.why-slider').slick({

        dots: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        pauseOnHover: false,
        vertical: false,
        verticalSwiping: false,
        verticalReverse: false,
        settings: 'unslick',
        responsive: [

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                    settings: 'slick',
                    centerMode: true,
                    // centerPadding: '150px',
                    mobileFirst: true,

                }
            }
        ]

    });

    $('.under-slider').slick({

        dots: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        pauseOnHover: false,
        vertical: false,
        verticalSwiping: false,
        verticalReverse: false,
        settings: 'unslick',
        responsive: [

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                    settings: 'slick',
                    centerMode: true,
                    // centerPadding: '150px',
                    mobileFirst: true,

                }
            }
        ]

    });
    $('.lates-slider').slick({

        dots: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        pauseOnHover: false,
        vertical: false,
        verticalSwiping: false,
        verticalReverse: false,
        settings: 'unslick',
        responsive: [

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    settings: 'slick',
                    centerMode: true,
                    // centerPadding: '150px',
                    mobileFirst: true,

                }
            }
        ]

    });
    $('.client-slider').slick({

        dots: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
        pauseOnHover: false,
        vertical: false,
        verticalSwiping: false,
        verticalReverse: false,
        settings: 'unslick',
        responsive: [

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    settings: 'slick',
                    centerMode: true,
                    // centerPadding: '150px',
                    mobileFirst: true,

                }
            }
        ]

    });

    $('.antique-pro-slider').slick({

        dots: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        pauseOnHover: false,
        vertical: false,
        verticalSwiping: false,
        verticalReverse: false,
        settings: 'unslick',
        responsive: [

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                    settings: 'slick',
                    centerMode: true,
                    // centerPadding: '150px',
                    mobileFirst: true,

                }
            }
        ]

    });
    $('.new-arrival-slider-2').slick({

        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        speed: 200,
        pauseOnHover: false,
        vertical: false,
        verticalSwiping: false,
        verticalReverse: false,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    mobileFirst: true,

                }
            }


        ]

    });
    $('.hero-slider').slick({

        dots: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
        pauseOnHover: false,
        vertical: false,
        verticalSwiping: false,
        verticalReverse: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    draggable: false,
                    swipe: false,
                }
            }
        ]

    });

    $('.hero-slider1').slick({

        dots: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
        pauseOnHover: false,
        vertical: false,
        verticalSwiping: false,
        verticalReverse: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    draggable: false,
                    swipe: false,
                }
            }
        ]

    });

    $('.hero-slider2').slick({

        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        pauseOnHover: false,
        vertical: false,
        verticalSwiping: false,
        verticalReverse: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    draggable: false,
                    swipe: false,
                }
            }
        ]

    });

    $('.hero-slider3').slick({

        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        pauseOnHover: false,
        vertical: false,
        verticalSwiping: false,
        verticalReverse: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    draggable: false,
                    swipe: false,
                }
            }
        ]

    });


    $('.price-slider').slick({

        dots: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        pauseOnHover: false,
        vertical: false,
        verticalSwiping: false,
        verticalReverse: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    draggable: false,
                    swipe: false,
                }
            }
        ]

    });



    /////// single product Nav Slider /////////

    $('.slider-single').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        adaptiveHeight: true,
        infinite: false,
        useTransform: true,
        speed: 400,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    });

    $('.slider-nav')
        .on('init', function (event, slick) {
            $('.slider-nav .slick-slide.slick-current').addClass('is-active');
        })
        .slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: false,
            focusOnSelect: false,
            infinite: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            }, {
                breakpoint: 640,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }, {
                breakpoint: 420,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }]
        });

    $('.slider-single').on('afterChange', function (event, slick, currentSlide) {
        $('.slider-nav').slick('slickGoTo', currentSlide);
        var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
        $('.slider-nav .slick-slide.is-active').removeClass('is-active');
        $(currrentNavSlideElem).addClass('is-active');
    });

    $('.slider-nav').on('click', '.slick-slide', function (event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');

        $('.slider-single').slick('slickGoTo', goToSingleSlide);
    });


    /////// single product Nav Slider /////////


    //*****************************
    // Responsive Slider
    //*****************************

    var tabrespsliders = {
        1: { slider: '.difference-slider' }
    };


    //*****************************
    // Responsive Slider
    //*****************************

    var respsliders = {
        1: { slider: '.res-slider' }

    };

    //*****************************
    // Function for Responsive Slider 991
    //*****************************

    $.each(tabrespsliders, function () {

        $(this.slider).slick({
            arrows: false,
            dots: true,
            autoplay: true,
            settings: "unslick",
            responsive: [
                {
                    breakpoint: 2000,
                    settings: "unslick"
                },
                {
                    breakpoint: 991,
                    settings: {
                        unslick: true
                    }
                }
            ]
        });
    });


    //*****************************
    // Function for Responsive Slider 767
    //*****************************

    $.each(respsliders, function () {

        $(this.slider).slick({
            arrows: false,
            dots: true,
            autoplay: true,
            settings: "unslick",
            responsive: [
                {
                    breakpoint: 2000,
                    settings: "unslick"
                },
                {
                    breakpoint: 767,
                    settings: {
                        unslick: true
                    }
                }
            ]
        });
    });


    // var m = new Masonry($('.grid').get()[0], {
    //     itemSelector: ".block-grid"
    // });


    //.parallax(xPosition, speedFactor, outerHeight) options:
    //xPosition - Horizontal position of the element
    //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
    //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
    $('.parallaxing1').parallax("50%", 0.1);
    $('.parallaxing2').parallax("50%", 0.2);
    $('.parallaxing3').parallax("50%", 0.3);
    $('.parallaxing4').parallax("50%", 0.4);
    $('.parallaxing5').parallax("50%", 0.5);
    $('.parallaxing6').parallax("50%", 0.6);
    $('.parallaxing7').parallax("50%", 0.7);
    $('.parallaxing8').parallax("50%", 0.8);
    $('.parallaxing9').parallax("50%", 0.9);
    $('.parallaxing10').parallax("50%", 0.10);

});



$(function () {
    // Accordion functionality
    $('.listing-category-parent').on('click', function (e) {
        if ($(e.target).is('input')) {
            return;
        }

        e.preventDefault();
        let $this = $(this);
        let $accordionContent = $this.next();

        if ($this.hasClass('active')) {
            $this.removeClass('active');
            $accordionContent.stop().slideUp(300);
        } else {
            $this.addClass('active');
            $accordionContent.stop().slideDown(300);
        }
    });

    // Checkbox group functionality
    $(function () {
        // Checkbox group functionality
        let parentCheckboxes = document.querySelectorAll('.listing-category-parent input[type="checkbox"]');
        let childCheckboxes = document.querySelectorAll('.listing-category-child input[type="checkbox"]');

        for (let i = 0; i < childCheckboxes.length; i++) {
            childCheckboxes[i].onclick = function () {
                let checkedCount = document.querySelectorAll('.listing-category-child input[type="checkbox"]:checked').length;
                let parentCheckbox = this.closest('.listing-category-child').previousElementSibling.querySelector('input[type="checkbox"]');
                parentCheckbox.checked = checkedCount > 0;
                parentCheckbox.indeterminate = checkedCount > 0 && checkedCount < childCheckboxes.length;
            }
        }

        for (let i = 0; i < parentCheckboxes.length; i++) {
            parentCheckboxes[i].onclick = function () {
                let childCheckboxes = this.closest('.listing-category').querySelectorAll('.listing-category-child input[type="checkbox"]');
                for (let j = 0; j < childCheckboxes.length; j++) {
                    childCheckboxes[j].checked = this.checked;
                }
            }
        }
    });

});
let index = 1;

const on = (listener, query, fn) => {
    document.querySelectorAll(query).forEach(item => {
        item.addEventListener(listener, el => {
            fn(el);
        })
    })
}

on('click', '.selectBtn', item => {
    const next = item.target.nextElementSibling;
    next.classList.toggle('toggle');
    next.style.zIndex = index++;
});
on('click', '.option', item => {
    item.target.parentElement.classList.remove('toggle');

    const parent = item.target.closest('.sort-product-drop').children[0];
    parent.setAttribute('data-type', item.target.getAttribute('data-type'));
    parent.innerText = item.target.innerText;
})


// Right side Cart

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "400px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// left side Cart

/* Set the width of the side navigation to 250px */
function openleftNav() {
    document.getElementById("mySideLeftnav").style.width = "400px";
}

/* Set the width of the side navigation to 0 */
function closeleftNav() {
    document.getElementById("mySideLeftnav").style.width = "0";
}




// single product tabbing        


$(function() {
    var $tabButtonItem = $('#tab-button li'),
        $tabSelect = $('#tab-select'),
        $tabContents = $('.tab-contents'),
        activeClass = 'is-active';
  
    $tabButtonItem.first().addClass(activeClass);
    $tabContents.not(':first').hide();
  
    $tabButtonItem.find('a').on('click', function(e) {
      var target = $(this).attr('href');
  
      $tabButtonItem.removeClass(activeClass);
      $(this).parent().addClass(activeClass);
      $tabSelect.val(target);
      $tabContents.hide();
      $(target).show();
      e.preventDefault();
    });
  
    $tabSelect.on('change', function() {
      var target = $(this).val(),
          targetSelectNum = $(this).prop('selectedIndex');
  
      $tabButtonItem.removeClass(activeClass);
      $tabButtonItem.eq(targetSelectNum).addClass(activeClass);
      $tabContents.hide();
      $(target).show();
    });
  });