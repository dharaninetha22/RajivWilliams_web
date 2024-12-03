/*------------------------------------- Page Loader -------------------------------------*/
$(function () { 
    setTimeout(() => {
        $('.page-loader').fadeOut('slow');
    }, 500);
});
/*------------------------------------- AOS Scroll Animation -------------------------------------*/
AOS.init({
    duration: 1600,
})
/*------------------------------------- Sticky Header -------------------------------------*/
$(function () { 
    $(window).on('scroll', function () { 
        const scrollPosition = $(window).scrollTop(); 
        if (scrollPosition >= 20) { 
            $('#top-header, #top-navbar').addClass('fixed');
        } else {
            $('#top-header, #top-navbar').removeClass('fixed');
        }
    });
});
/*------------------------------------- Menu Open Close -------------------------------------*/
// const menu = document.getElementById('menu');
// const openBtn = document.getElementById('openBtn');
// const closeBtn = document.getElementById('closeBtn');

// openBtn.addEventListener('click', () => {
//     menu.classList.add('open');
// });

// closeBtn.addEventListener('click', () => {
//     menu.classList.remove('open');
// });

// document.addEventListener('click', (event) => {
//     if (event.target.classList.contains('plus-icon')) {
//         event.target.classList.toggle('rotate');
//     }
// });





// Get references to elements
const menu = document.getElementById('menu');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const menuLinks = document.querySelectorAll('.side-menu-list');

// Function to open the menu
function openMenu() {
    menu.classList.add('open');
}

// Function to close the menu
function closeMenu() {
    menu.classList.remove('open');
}

// Toggle menu when the open button is clicked
openBtn.addEventListener('click', () => {
    if (!menu.classList.contains('open')) {
        openMenu();
    } else {
        closeMenu();
    }
});

// Close menu when the close button is clicked
closeBtn.addEventListener('click', closeMenu);

// Close menu when a menu link is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});
/*------------------------------------- Infinite Marquee -------------------------------------*/
document.querySelectorAll('.logos').forEach((logosContainer) => {
    const copy = logosContainer.querySelector('.logos-slide').cloneNode(true);
    logosContainer.appendChild(copy);
});
/*------------------------------------- myWorkSlider -------------------------------------*/
var swiper = new Swiper('.myWorkSlider', {
    slidesPerView: 2,
    spaceBetween: 80,
    centeredSlides: true,
    speed: 2000,
    autoplay: {
        delay: 3000, // Adding control to autoplay
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1199: {
            slidesPerView: 2,
            spaceBetween: 80
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        200: {
            slidesPerView: 1,
            spaceBetween: 15
        },
    },
    on: {
        slideChange: () => {
            const allSlides = document.querySelectorAll('.myWorkSlider-swiper');
            allSlides.forEach((slide) => {
                const name = slide.querySelector('.slide-name');
                if (slide.classList.contains('swiper-slide-active')) {
                    name.style.opacity = '1';
                    name.style.transform = 'translateY(0)';
                } else {
                    name.style.opacity = '0';
                    name.style.transform = 'translateY(20px)';
                }
            });
        },
    },
});

/*------------------------------------- Testimonials slider -------------------------------------*/
const updateCenterSlide = (swiperInstance) => {
    const activeIndex = swiperInstance.activeIndex;

    swiperInstance.slides.forEach((slide) => {
        const clientText = slide.querySelector('.client-text-main');
        if (clientText) {
            clientText.style.borderBottom = '4px solid #2D3866';
        }
    });

    const activeSlide = swiperInstance.slides[activeIndex];
    if (activeSlide) {
        const clientText = activeSlide.querySelector('.client-text-main');
        if (clientText) {
            clientText.style.borderBottom = '4px solid #FFF';
        }
    }

    if (swiper2) {
        swiper2.slideTo(activeIndex);
    }
};

// Initialize the main slider (products/clients)
var swiper = new Swiper(".singleShop", {
    spaceBetween: 10,
    slidesPerView: 3,
    centeredSlides: true,
    slideToClickedSlide: true,
    speed: 1500,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        991: {
            slidesPerView: 3,
            spaceBetween: 10,
            centeredSlides: true,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 10,
            centeredSlides: false,
        },
        200: {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: false,
        },
    },
    on: {
        slideChange: () => updateCenterSlide(swiper),
        init: () => updateCenterSlide(swiper),
        click: () => updateCenterSlide(swiper),
    },
});

// Initialize the testimonial slider and link it with the main slider
var swiper2 = new Swiper(".singleShop2", {
    spaceBetween: 10,
    slidesPerView: 1,
    speed: 1500,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    thumbs: {
        swiper: swiper,
    },
});

document.querySelectorAll('.client-text-main').forEach((clientBox, index) => {
    clientBox.addEventListener('click', () => {
        swiper.slideTo(index);
    });
});
/*------------------------------------- Scroll counter -------------------------------------*/
var counted = 0;
$(window).on('scroll', function () { 
    var oTop = $('.counter').offset()?.top - window.innerHeight;
    if (counted === 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
                {
                    duration: 800,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                });
        });
        counted = 1;
    }
});
/*------------------------------------- Bottom To Top Button -------------------------------------*/
window.addEventListener('scroll', function () {
    var button = document.querySelector('.bottom-top-button');
    if (window.pageYOffset > 100) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});

document.querySelector('.bottom-top-button').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/*------------------------------------- Skill Bar Circular -------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
    const progressSection = document.querySelector("#progress");
    const items = document.querySelectorAll('.progress-item');
    const colors = ['#BCE70C', '#FF759C', '#00CC97', '#FFDB59', '#6F39FD', '#FF7D61'];
    const observerOptions = { threshold: 0.1 };

    function handleIntersection(entries, observer) {
        if (entries[0].isIntersecting) {
            items.forEach((item, index) => {
                let num = parseInt(item.dataset.num, 10);
                let count = 0;
                let color = colors[index % colors.length];
                let interval = setInterval(() => {
                    if (count === num) {
                        clearInterval(interval);
                    } else {
                        count++;
                        item.style.background = `conic-gradient(${color} ${count}%, #80808047 0deg)`;
                        item.setAttribute('data-value', `${count}%`);
                        item.innerHTML = `${count}%`;
                    }
                }, 15);
            });
            observer.unobserve(progressSection);
        }
    }

    if (progressSection) {
        const observer = new IntersectionObserver(handleIntersection, observerOptions);
        observer.observe(progressSection);
    }
});
/*------------------------------------- Hover text img move cursor -------------------------------------*/
var $cursor = $(".cursor"),
    $overlay = $(".project-overlay");

function moveCircle(e) {
    TweenLite.to($cursor, 0.5, {
        css: {
            left: e.pageX,
            top: e.pageY
        },
        delay: 0.03
    });
}

$(".project-1").on("mouseenter", function () {
    $(".cursor").css({ "background-image": "url(assets/images/portfolio-img/Port-hover-img1.jpg)" });
});
$(".project-2").on("mouseenter", function () {
    $(".cursor").css({ "background-image": "url(assets/images/portfolio-img/Port-hover-img2.jpg)" });
});
$(".project-3").on("mouseenter", function () {
    $(".cursor").css({ "background-image": "url(assets/images/portfolio-img/Port-hover-img3.jpg)" });
});
$(".project-4").on("mouseenter", function () {
    $(".cursor").css({ "background-image": "url(assets/images/portfolio-img/Port-hover-img4.jpg)" });
});
$(".project-5").on("mouseenter", function () {
    $(".cursor").css({ "background-image": "url(assets/images/portfolio-img/Port-hover-img5.jpg)" });
});
$(".project-6").on("mouseenter", function () {
    $(".cursor").css({ "background-image": "url(assets/images/portfolio-img/Port-hover-img6.jpg)" });
});
$(".project-7").on("mouseenter", function () {
    $(".cursor").css({ "background-image": "url(assets/images/portfolio-img/Port-hover-img7.jpg)" });
});

var flag = false;
$($overlay).on("mousemove", function () {
    flag = true;
    TweenLite.to($cursor, 0.3, { scale: 1, autoAlpha: 1 });
    $(this).on("mousemove", moveCircle);
}).on("mouseout", function () {
    flag = false;
    TweenLite.to($cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
});

/*------------------------------------- Portfolio Three Slider Sec One -------------------------------------*/
function addLeadingZero(number) {
    return number < 10 ? '0' + number : number;
}

function updSwiperNumericPagination(swiper) {
    const counter = document.querySelector('.port3-col-first .swiper-counter');
    if (counter) {
        counter.innerHTML =
            '<span class="count">' + (swiper.realIndex + 1) + '</span>/' +
            '<span class="total">' + addLeadingZero(swiper.el.slidesQuantity) + '</span>';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.swiper-container').forEach(function (node) {
        node.slidesQuantity = node.querySelectorAll('.swiper-slide').length;
        new Swiper(node, {
            speed: 1500,
            loop: true,
            effect: "coverflow",
            autoplay: true,
            pagination: { el: node.querySelector('.swiper-pagination') },
            on: {
                init: function () {
                    updSwiperNumericPagination(this); 
                },
                slideChange: function () {
                    updSwiperNumericPagination(this);
                }
            }
        });
    });
});
/*------------------------------------- Single Page Yoube Vimeo sound cloud Video -------------------------------------*/
function playVideo() {
    var cover = document.querySelector('.video-container2 img.cover');
    var playButton = document.querySelector('.video-container2 img.play-button');
    var iframe = document.getElementById('youtube-video');
    if (cover && playButton && iframe) {
        cover.style.display = 'none';
        playButton.style.display = 'none';
        iframe.src = "https://www.youtube.com/embed/60SstPjPdLU?si=cYDRCWe-8AELCqS2-&autoplay=1";
        iframe.style.display = 'block';
    } 
}
/*------------------------------------- Pricing Tabs btn -------------------------------------*/
$(function () {
    $('.tabs-btn').on('click', 'a', function () {
        var tabId = $(this).attr('data-tab');

        $('.tabs-btn a').removeClass('active');
        $('.Tabcondent').removeClass('active');

        $(this).addClass('active');
        $('#' + tabId).addClass('active');
    });
});

// ---------------------preloader------------------

window.onload = function () {
    var loaderWrapper = document.getElementById('loader-wrapper');
    var mainContent = document.getElementById('main-content');
    mainContent.style.display = 'none';

    setTimeout(function () {
        loaderWrapper.style.display = 'none';
        mainContent.style.display = 'block';
    }, 3000); 
};
