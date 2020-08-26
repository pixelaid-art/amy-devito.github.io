// Функция для фиксированного меню
function getHeaderHeight() {
	let headerHeight = $('.header').innerHeight();
	return headerHeight;
}
// Высота Header
let headerHeight;

$(document).ready(function () {
	if ($('.header').not('.fixed')) {
		headerHeight = getHeaderHeight();
	}

	if ($(window).width() < 768) {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 300) {
				$('.top-mobile-string').addClass('fixed');
			} else {
				$('.top-mobile-string').removeClass('fixed');
			}
		});
		$(window).scroll(function () {
			if ($(this).scrollTop() < 150) {
				$('.top-mobile-string').hide();
			} else {
				$('.top-mobile-string').show();
			}
		});
	} else {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 250) {
				$('.header').addClass('fixed');
				$('.banner').css({ 'margin-top': headerHeight });
			} else {
				$('.header').removeClass('fixed');
				$('.banner').css({ 'margin-top': '0' })
			}
		});
	}

	// Slick slider
	$('.slick-gallery').slick({
		dots: true,
		arrows: true,
		speed: 400,
		infinite: true,
		// autoplay: true,
		autoplaySpeed: 4000,
		// slidesToShow: 4,
		slidesToScroll: 1,
		mobileFirst: true,

		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 2,
				}
			}
		]
	});

	// Fancybox
	$('[data-fancybox="gallery"]').fancybox({
		// Options will go here
	});
	$('.call-price').click(function () {
		event.preventDefault();
		$('a[data-fancybox="' + $(this).attr("data-trigger") + '"]').first().trigger('click');
	});

	// Анимация при скролле
	if (window.matchMedia('(min-width: 768px)').matches) {
		new WOW().init();
	}

	// Аккордеон
	$('.inner').hide();// Hide all tabs
	$('.toggle').click(function (j) {

		var arrow = $(this).find('.accordion__arrow');

		$('.accordion__arrow').removeClass('accordion__arrow_active');

		var dropDown = $(this).closest('.accordion__card').find('.inner');
		$(this).closest('.accordion').find('.inner').not(dropDown).slideUp();



		if ($(this).hasClass('active')) {
			$(this).removeClass('active');

			// Effects
			/*$(arrow).removeClass('accordeon-arrow-2_active');*/
			$(this).removeClass('colored');
		} else {
			$(this).closest('.accordion').find('.toggle.active').removeClass('active');
			$(this).addClass('active');

			// Effects
			$(arrow).addClass('accordion__arrow_active');

		}

		dropDown.stop(false, true).slideToggle();
		j.preventDefault();
	});

	// Плавная прокрутка
	$("body").on('click', '[href*="#"]', function (e) {
		var fixed_offset = 65;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 300);
		e.preventDefault();
	});

	// Мобильное меню
	$('.hamburger').click(function () {
		$('.hamburger').toggleClass('is-active');
		$('.header__menu').toggleClass('collapse');
	});
	// Действия при клике на Hamburger-Button
	$('.main-menu_header a').click(function () {
		$('.hamburger').removeClass('is-active');
		$('.header__menu').removeClass('collapse');
	});

});
