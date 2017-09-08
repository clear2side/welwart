//@prepros-prepend map.js

$(document).ready(function () {

	$('.burger').click(function () {
		$(this).toggleClass('active');
		if ($(this).hasClass('active')) {
			$('.mobile').animate({
				'top': 0
			}, 500);
			$('body').css({
				'overflow-y': 'hidden'
			});
		} else {
			$('.mobile').animate({
				'top': '-100vh'
			}, 500);
			$('body').css({
				'overflow-y': 'auto'
			});
		}
	});

	class Slider {
		constructor(parent, pagination) {
			this.sliderNav = parent.find('.slider__nav');
			this.container = parent.find('.slider__container');
			this.containerWidth = $(this.container).width();
			this.slides = parent.find('.slider__container').find('.slider__inner').find('.slider__slide');
			this.counter = 0;
			if (pagination) this.pagination = pagination.find('.slider__paginationItem');

			let that = this;

			$(window).resize(function () {
				that.containerWidth = $(that.container).width();
				$(that.slides[0]).css({
					'margin-left': -(that.containerWidth * that.counter + 4 * that.counter)
				});
			});

			this.sliderNav.each(function (index) {
				$(this).click(function () {
					index === 0 ? that.counter-- : that.counter++;
					that.counter <= 0 ? that.counter = that.slides.length : false;
					that.counter === that.slides.length ? that.counter = 0 : false;

					that.slide();

					if (pagination) {
						that.pagination.removeClass('active');
						$(that.pagination[that.counter]).addClass('active');
					}
				});
			});

			if (pagination) {
				this.pagination.each(function (index) {
					$(this).click(function () {
						that.counter = index;

						that.slide();

						that.pagination.removeClass('active');
						$(this).addClass('active');
					});
				});
			}
		}

		slide() {
			$(this.slides[0]).animate({
				'margin-left': -(this.containerWidth * this.counter + 4 * this.counter)
			}, 500);
		};
	}

	let mainSliderParent = $(document).find('.header').find('.header__inner').find('.header__slider');
	let mainSliderPagination = $(document).find('.header').find('.header__inner').find('.header__pagination');

	let mainSlider = new Slider($(mainSliderParent), $(mainSliderPagination));

	let aboutPagination = $(document).find('.about').find('.about__inner').find('.about__desc').find('.about__pagination').find('.about__paginationItem');
	let aboutSlides = $(document).find('.about').find('.about__inner').find('.about__desc').find('.about__slide');
	let aboutImages = $(document).find('.about').find('.about__inner').find('.about__image');

	aboutPagination.each(function (index) {
		$(this).click(function () {
			aboutPagination.removeClass('active');
			aboutSlides.removeClass('active');
			aboutImages.removeClass('active');
			$(this).addClass('active');
			$(aboutSlides[index]).addClass('active');
			$(aboutImages[index]).addClass('active');
		});
	});

	let itemSliderParent = $(document).find('.item').find('.item__inner').find('.item__description').find('.item__left').find('.item__slider');

	let itemSliderPagination = $(document).find('.item').find('.item__inner').find('.item__description').find('.item__left').find('.item__pagination');

	let itemSlider = new Slider($(itemSliderParent), $(itemSliderPagination));

	let activators = $(document).find('[activator]');

	activators.each(function () {
		$(this).click(function (e) {
			e.preventDefault();
			$('#' + $(this).attr('activator')).fadeIn(500);
		});
	});

	$('.modalClose').click(function () {
		$('.modal').fadeOut(500);
	});

	/* ------ mobile list menu ------ */
	$('.nav__link_parent--tablet_button').on('click', function () {
		var $this = $(this),
			menu = $this.parent().find('.nav__submenu'),
			arrowButton = $this.find('.nav__link_parent--tablet_svg');

		if (!menu.hasClass('active')) {
			menu.stop(true, true).slideDown(300).addClass('active').siblings('.nav__link_parent--tablet_button').addClass('active');
		} else {
			menu.stop(true, true).slideUp(300).removeClass('active').siblings('.nav__link_parent--tablet_button').removeClass('active');
		};
	});

	/* ------ button scroll slider ------ */
	$(".header__down").click(function () {
		$("html, body").animate({
			scrollTop: $("header").height() + 60 + "%"
		}, "slow");
		return false;
	});

});