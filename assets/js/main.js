(function ($) {
    "use strict";
    var windowOn = $(window);


    /*===========================================
        =            Windows Load          =
    =============================================*/
    $(window).on('load', function () {
        wowAnimation();
    });

    /*======================================
    Preloader activation
    ========================================*/
    $(window).on('load', function (event) {
    $('.preloader').delay(500).fadeOut(500);
    });

    /*======================================
        Mobile Menu Js
        ========================================*/
        $("#mobile-menu").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "991",
        meanExpand: ['<i class="fa-regular fa-angle-down"></i>'],
    });

    /* 14. loaded */ 
    $(window).on('load', function () {
        $("body").addClass("page-loaded");
        console.log("loaded")
    });

    // One Page Nav
    if ($(".header-area").length) {
        var top_offset = $('.header-area').height() - 10;
        $('.main-menu ul').onePageNav({
            currentClass: 'active',
            scrollOffset: top_offset,
        });
    }

    // 13. Smooth Scroll Js
    function smoothSctoll() {
        $('.mean-nav a').on('click', function (event) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - 120
                }, 1500);
            }
        });
    }
    smoothSctoll();

    /*------------------------------------------------------
    /  Services Hover BG
    /------------------------------------------------------*/
    function service_animation() {
        var active_bg = $(".resume-widget .active-bg");
        var element = $(".resume-widget .current");
        $(".resume-widget .resume-item").on("mouseenter", function () {
            var e = $(this);
            activeService(active_bg, e);
            $(this).addClass('currentHover');
        });
        $(".resume-widget").on("mouseleave", function () {
            element = $(".resume-widget .current");
            activeService(active_bg, element);
            element.closest(".resume-item").siblings().removeClass("mleave");
        });
        activeService(active_bg, element);
    }
    service_animation();

    function activeService(active_bg, e) {
        if (!e.length) {
            return false;
        }
        var topOff = e.offset().top;
        var height = e.outerHeight();
        var menuTop = $(".resume-widget").offset().top;
        e.closest(".resume-item").removeClass("mleave");
        e.closest(".resume-item").siblings().addClass("mleave");
        active_bg.css({ top: topOff - menuTop + "px", height: height + "px" });
    }

    $(".resume-widget .resume-item").on("click", function () {
        $(".resume-widget .resume-item").removeClass("current");
        $(this).addClass("current");
    });

    /*======================================
    Sidebar Toggle
    ========================================*/
    $(".bars_icon").on("click", function () {
        $(".offcanvas-info").addClass("info_open");
        $(".offcanvas_overlay").addClass("overlayopen");
    });

    $(".offcanvas-icon,.offcanvas_overlay").on("click", function () {
        $(".offcanvas-info").removeClass("info_open");
        $(".offcanvas_overlay").removeClass("overlayopen");
    });

    /*======================================
    Search Toggle Js
    ========================================*/
    $(".search-icon").on("click", function () {
        $(".search_form-toggle").addClass("active");
        $(".offcanvas_overlay").addClass("overlayopen");
    });

    $(".close_btn,.offcanvas_overlay").on("click", function () {
        $(".search_form-toggle").removeClass("active");
        $(".offcanvas_overlay").removeClass("overlayopen");
    });

    /*======================================
    Sticky Header Js
    ========================================*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
        $(".header-sticky").addClass("sticky");
        } else {
        $(".header-sticky").removeClass("sticky");
        }
    });
    /*======================================
    Body overlay Js
    ========================================*/
    $(".body-overlay").on("click", function () {
        $(".offcanvas__area").removeClass("opened");
        $(".body-overlay").removeClass("opened");
    });

    /*======================================
    Data Css js
    ========================================*/
    $("[data-background").each(function () {
        $(this).css(
            "background-image",
            "url( " + $(this).attr("data-background") + "  )"
        );
    });

    $("[data-width]").each(function () {
        $(this).css("width", $(this).attr("data-width"));
    });

    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    });

    //  Counter Js
    $('.counter').counterUp({
        delay: 100,
        time: 2000
    });

    /*-----------------------------------
        20. Mouse Cursor    
    -----------------------------------*/
    function mousecursor() {
        if ($("body")) {
            const e = document.querySelector(".cursor-inner"),
                t = document.querySelector(".cursor-outer");
            let n,
                i = 0,
                o = !1;
            (window.onmousemove = function (s) {
                o ||
                    (t.style.transform =
                        "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                    (e.style.transform =
                        "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                    (n = s.clientY),
                    (i = s.clientX);
            }),
                $("body").on("mouseenter", "a, .cursor-pointer", function () {
                    e.classList.add("cursor-hover");
                    t.classList.add("cursor-hover");
                }),
                $("body").on("mouseleave", "a, .cursor-pointer", function () {
                    ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
                        (e.classList.remove("cursor-hover"),
                            t.classList.remove("cursor-hover"));
                }),
                (e.style.visibility = "visible"),
                (t.style.visibility = "visible");
        }
    }
    $(function () {
        mousecursor();
    });

    /*=============================================
        =         ProgressBar Active            =
    =============================================*/
    $('.progress-item').appear(function (e) {
        // Animated Prograssbar
        $(".progress--bar").each(function () {
            $(this)
            .find(".progress-fill")
            .animate(
                {
                    width: $(this).attr("data-percentage"),
                },
                2000
            );
            $(this)
            .find(".progress-number")
            .animate(
                { left: $(this).attr("data-percentage") },
                {
                    duration: 2000,
                    step: function (now, fx) {
                        var data = Math.round(now);
                        $(this)
                        .find(".percent")
                        .html(data + "%");
                    },
                }
            );
        });
    });

    // btn-moveement Animation Start
    $(".btn-hover").on("mouseenter", function (e) {
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;

        $(this).find("span").css({
        top: y,
        left: x,
        });
    });

    $(".btn-hover").on("mouseout", function (e) {
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;

        $(this).find("span").css({
        top: y,
        left: x,
        });
    });

    const all_btns = gsap.utils.toArray(".btn-hover");
    if (all_btns.length > 0) {
        var all_btn = gsap.utils.toArray(".btn-hover");
    } else {
        var all_btn = gsap.utils.toArray("#btn-hover");
    }
    const all_btn_cirlce = gsap.utils.toArray(".btn-item");
    all_btn.forEach((btn, i) => {
        $(btn).mousemove(function (e) {
        callParallax(e);
        });
        function callParallax(e) {
        parallaxIt(e, all_btn_cirlce[i], 80);
        }

        function parallaxIt(e, target, movement) {
        var $this = $(btn);
        var relX = e.pageX - $this.offset().left;
        var relY = e.pageY - $this.offset().top;

        gsap.to(target, 0.5, {
            x: ((relX - $this.width() / 2) / $this.width()) * movement,
            y: ((relY - $this.height() / 2) / $this.height()) * movement,
            ease: Power2.easeOut,
        });
        }
        $(btn).mouseleave(function (e) {
        gsap.to(all_btn_cirlce[i], 0.5, {
            x: 0,
            y: 0,
            ease: Power2.easeOut,
        });
        });
    });
    // btn-moveement Animation End

    /*===========================================
        =        Wow Active      =
    =============================================*/
    function wowAnimation() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }

    /*======================================
    Button scroll up js
    ========================================*/

    !function (s) { "use strict"; s(".switch").on("click", function () { s("body").hasClass("light") ? (s("body").removeClass("light"), s(".switch").removeClass("switched")) : (s("body").addClass("light"), s(".switch").addClass("switched")) }), s(document).ready(function () { var e = document.querySelector(".progress-wrap path"), t = e.getTotalLength(); e.style.transition = e.style.WebkitTransition = "none", e.style.strokeDasharray = t + " " + t, e.style.strokeDashoffset = t, e.getBoundingClientRect(), e.style.transition = e.style.WebkitTransition = "stroke-dashoffset 10ms linear"; var o = function () { var o = s(window).scrollTop(), r = s(document).height() - s(window).height(), i = t - o * t / r; e.style.strokeDashoffset = i }; o(), s(window).scroll(o); jQuery(window).on("scroll", function () { jQuery(this).scrollTop() > 50 ? jQuery(".progress-wrap").addClass("active-progress") : jQuery(".progress-wrap").removeClass("active-progress") }), jQuery(".progress-wrap").on("click", function (s) { return s.preventDefault(), jQuery("html, body").animate({ scrollTop: 0 }, 550), !1 }) }) }(jQuery);

    /* ============================================================ */
    /* brand-slider-active
    /* ============================================================ */
    var brandSlider = new Swiper('.brand-slider', {
        spaceBetween: 30,
        slidesPerView: 3,
        loop: true,
        speed: 5000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        allowTouchMove: false,
        breakpoints: {
            576: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 4,
            },
            1400: {
                slidesPerView: 5,
            },
        },
    });

    /* ============================================================ */
    /* experience-slider-active
    /* ============================================================ */
    var experience = new Swiper('.experience-slider', {
        spaceBetween: 30,
        slidesPerView: 2,
        loop: true,
        spaceBetween: 25,
        speed: 700,
        autoplay: true,
        autoplay: {
            delay: 2500,
        },
        navigation: {
            nextEl: ".button_next",
            prevEl: ".button_prev",
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },

    });

    /* ============================================================ */
    /* portfolio Slider start
    /* ============================================================ */

    $(document).ready(function () {
        // For each ".brand-slider" initialize Swiper
        $(".portfolio-slider").each(function () {
            const scaleFactor = 0.1;
            const rotationFactor = 0.01;
    
            // Initialize Swiper slider
            new Swiper(".portfolio-slider", {
                slidesPerView: 5,
                spaceBetween: 60,
                centeredSlides: true,
                autoplay: true,
                loop: true,
                grabCursor: true,
                speed: 1000,
                autoplay: {
                    delay: 2500,
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                breakpoints: {
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1205: {
                        slidesPerView: 3.5,
                        spaceBetween: 50,
                    },
                    1405: {
                        slidesPerView: 4.5,
                        spaceBetween: 50,
                    },
                },
            });
    
            // Animation function for rotating brand images
            function animateBrandImages() {
                requestAnimationFrame(animateBrandImages);
    
                document.querySelectorAll(".single").forEach((img, i) => {
                    const rect = img.getBoundingClientRect();
                    const offset = 0.5 * window.innerWidth - (rect.x + 0.5 * rect.width);
    
                    let verticalTranslate = Math.abs(offset) * scaleFactor - rect.width * scaleFactor;
                    verticalTranslate = verticalTranslate < 0 ? 0 : verticalTranslate;
    
                    const transformOrigin = offset < 0 ? "left top" : "right top";
                    img.style.transform = `translate(0, ${verticalTranslate}px) rotate(${-offset * rotationFactor}deg)`;
                    img.style.transformOrigin = transformOrigin;
                });
            }
    
            // Start the animation
            animateBrandImages();
        });


    });
    
    /* ============================================================ */
    /* portfolio Slider start
    /* ============================================================ */

    $(document).ready(function () {
        // For each ".brand-slider" initialize Swiper
        $(".testmonial-slider").each(function () {
            const scaleFactor = 0.3;
            const rotationFactor = 0;
    
            // Initialize Swiper slider
            new Swiper(".testmonial-slider", {
                slidesPerView: 5,
                spaceBetween: 40,
                centeredSlides: true,
                autoplay: true,
                loop: true,
                grabCursor: true,
                speed: 1000,
                autoplay: {
                    delay: 2500,
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                breakpoints: {
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3.5,
                        spaceBetween: 40,
                    },
                    1200: {
                        slidesPerView: 3.8,
                        spaceBetween: 30,
                    },
                    1680: {
                        slidesPerView: 4.8,
                        spaceBetween: 60,
                    },
                },
            });

    

            // Animation function for rotating brand images
            function animateBrandImages() {
                requestAnimationFrame(animateBrandImages);
    
                document.querySelectorAll(".single2").forEach((img, i) => {
                    const rect = img.getBoundingClientRect();
                    const offset = 0.5 * window.innerWidth - (rect.x + 0.5 * rect.width);
    
                    let verticalTranslate = Math.abs(offset) * scaleFactor - rect.width * scaleFactor;
                    verticalTranslate = verticalTranslate < 0 ? 0 : verticalTranslate;
    
                    const transformOrigin = offset < 0 ? "left top" : "right top";
                    img.style.transform = `translate(0, ${verticalTranslate}px) rotate(${-offset * rotationFactor}deg)`;
                    img.style.transformOrigin = transformOrigin;
                });
            }
    
            // Start the animation
            animateBrandImages();
        });
    });
    
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    gsap.config({
        nullTargetWarn: false,
    });

    let smoother = ScrollSmoother.create({
        smooth: 1.35,
        effects: true,
        smoothTouch: true,
        normalizeScroll: false,
        ignoreMobileResize: true,
    });


    //nice select
    $('select').niceSelect();	

    
})(jQuery);
