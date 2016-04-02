(function() {
	angular.module('ngCarousel', [])
		.directive('ngCarousel', ['$timeout', '$compile', '$interval',
			function($timeout, $compile, $interval) {
				return {
					restrict: 'AE',
					replace: false,
					scope: {
						options: '=ngCarouselOptions',
						images: '=ngCarouselImages'
					},
					template: '<div class="pCarousel"><div class="mainWrapper"><div class="carouselWrapper"><ul></ul><div class="left navigationBtn" ng-click="prev()">&#12296;</div><div class="right navigationBtn" ng-click="next()">&#12297;</div></div>' +
						'<div class="thumbsWrapper" ng-if="options.showThumbs"><ul></ul></div>' +
						'</div></div>',
					compile: function($el, $attrs) {

						if (!window.jQuery)
							throw new Error('Please install jquery to use ngCarousel');

						$ul = $el.find('.carouselWrapper ul');
						$carouselWrapper = $el.find('.carouselWrapper');
						$thumbsWrapper = $el.find('.thumbsWrapper');
                        $mainWrapper = $el.find('.mainWrapper');

						$carouselWrapper.css({
							width: $attrs.width + 'px',
							height: $attrs.height + 'px'
						});

						$mainWrapper.css({
							width: $attrs.width + 'px'
						});

						return function($scope, $el, $attrs) {
							$timeout(function() {
								$el.find('.carouselWrapper ul').append($compile('<li ng-repeat="image in images"><img ng-src="{{image.src}}" alt="{{image.alt}}" width="' + $attrs.width + ' height="' + $attrs.height + '"></li>')($scope));

								$ul.css({
									width: ($attrs.width * $scope.images.length) + 'px',
									height: $attrs.height + 'px'
								});

								$ul.find('li').css({
									width: $attrs.width + 'px'
								});

								if (!!$scope.options.autoSlide) {
									var rotationInterval = $interval(function() {
										rotateCarousel(true);
									}, ($scope.options.slideDelay || 5000))
								}

								if ($scope.options.showThumbs) {
									$el.find('.thumbsWrapper ul').append($compile('<li ng-repeat="image in images"><img ng-src="{{image.src}}" alt="{{image.alt}}"></li>')($scope));
								}

								function rotateCarousel(forward) {
									if (forward) {
										$ul.animate({
											left: '-' + $attrs.width + 'px'
										}, ($scope.options.slideDuration || 1000), function() {
											$(this).find("li:last").after($(this).find("li:first"));
											$(this).css({
												left: 0
											});
										})
									} else {
										$ul.find("li:first").before($ul.find("li:last"));
										$ul.css({
											left: '-' + $attrs.width + 'px'
										})
										$ul.animate({
											left: 0
										}, ($scope.options.slideDuration || 1000), function() {


										})
									}
								}

								$scope.next = function() {
									rotateCarousel(true);
								}


								$scope.prev = function() {
									rotateCarousel(false);
								}

							})
						}
					}
				}
			}
		])

})();
