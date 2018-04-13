require.config({　　　　
	paths: {
		"jquery": "./jquery-1.12.4.min",
		"swiper": "./swiper",
		"animation": "./wow",
		"swiper-animation": "./swiper.animate1.0.2.min",
	},
	shim: {
		animation: {
			deps: [],
			exports: 'WOW'
		}
	}

});

require(['jquery'], function($) {
	console.log('load finish!' + new Date());

	var media = document.createElement('style')
	media.innerHTML = ".cp{cursor: pointer;}";
	document.getElementsByTagName('head')[0].appendChild(media);
	$('body *[href]').addClass('cp');
	$('body *[href]').on('click', function() {
		if ($(this).attr('target')) {
			window.open($(this).attr('href'));
		} else {
			window.location.href = $(this).attr('href');
		}
	});
	//href

	$('.header .menu .target').on('mouseenter', function() {
		$(this).addClass('active on').parent('.item').siblings().find('.target').removeClass('active on');
	});
	$('.header .menu').on('mouseleave', function() {
		$(this).find('.target').removeClass('active on')
	});
	//pc 菜单

	$.each($('.header .mobile-menu .child-menu .target'), function(index, val) {
		if ($(val).siblings('.child-menu').length > 0) {
			$(val).addClass('children-menu');
		}
	});
	$('.header .mobile-menu .child-menu .target').on('click', function() {
		if ($(this).siblings('.child-menu').length > 0) {
			$(this).parents('.child-menu').addClass('moveout')
			$(this).siblings().addClass('moveoin');
		}
		if ($(this).hasClass('back')) {
			$(this).parents('.child-menu').eq(0).removeClass('moveoin')
			$(this).parents('.child-menu').eq(1).removeClass('moveout')
		}
	});
	$('.header .toggle-mobile-bottom').on('click', function() {
		$('body').addClass('mobile-menu-open');
		$(this).addClass('active')
	});
	$('.mobile-layout').on('click', function() {
		$('body').removeClass('mobile-menu-open');
		$('.header .toggle-mobile-bottom').removeClass('active')
	});
	// 手机菜单

	$('.header .nav span.share').on('mouseenter ', function() {
		$('.header .nav-layout .share-layout').addClass('active');
		$('.header .nav span.share').addClass('active');
	});
	$('.nav-layout-mouse-leave').on('mouseleave', function() {
		$('.header .nav-layout .share-layout').removeClass('active');
		$('.header .nav span.share').removeClass('active');
	});
	$('.header .nav .navigation').on('mouseenter', function() {
		$('.header .nav-layout .share-layout').removeClass('active');
		$('.header .nav span.share').removeClass('active');
	});
	//分享


	$('.header .nav .navigation').on('mouseenter', function() {
		$('.header .nav .navigation').addClass('active')
		$('.header .nav-layout .navigation-layout').addClass('active');

	});
	$('.nav-layout-mouse-leave').on('mouseleave', function() {
		$('.header .nav .navigation').removeClass('active')
		$('.header .nav-layout .navigation-layout').removeClass('active');
	});
	$('.header .nav span.share').on('mouseenter ', function() {
		$('.header .nav .navigation').removeClass('active')
		$('.header .nav-layout .navigation-layout').removeClass('active');
	});
	//网站导航

	$('.full').css({
		height: window.innerHeight,
		width: window.innerWidth
	});
	$(window).on('resize', function() {
		$('.full').css({
			height: window.innerHeight,
			width: window.innerWidth
		});
	});
	// .full
})
//public-js


require(['jquery', 'swiper', 'swiper-animation'], function($, swiper, swiper_animation) {
	console.log('load finish!' + new Date());
	var mySwiper = new swiper('.banner .swiper-container', {
		pagination: '.banner .swiper-pagination',
		nextButton: '.banner .swiper-button-next',
		prevButton: '.banner .swiper-button-prev',
		effect: 'fade',
		autoplay: 3000,
		onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper); //隐藏动画元素 
			swiperAnimate(swiper); //初始化完成开始动画
		},
		onSlideChangeEnd: function(swiper) {
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		},
	})
	var mySwiper = new swiper('.notice .swiper-container', {
		slidesPerView: 3,
		breakpoints: {
			//当宽度小于等于320
			992: {
				slidesPerView: 1,
			},
		},
		autoplay: 3000,
	})
	var mySwiper = new swiper('.index .swiper-container', {
		slidesPerView: 4,
		breakpoints: {
			//当宽度小于等于320
			1200: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 1,
			},
		},
		autoplay: 3000,
		loop: true,
		spaceBetween: 30,
		slidesPerView: 4,
		speed: 500,
		centeredSlides: true,
	})

})
