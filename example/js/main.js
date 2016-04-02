angular.module('myApp', ['ngCarousel'])
	.controller('indexController', function($scope) {
		$scope.options = {
			showThumbs: true
		}

		$scope.images = [{
			src: 'img/1.jpg',
			alt: 'Desktop'
		}, {
			src: 'img/2.jpg',
			alt: 'Macbook'
		}, {
			src: 'img/3.jpg',
			alt: 'Macbook'
		}, {
			src: 'img/4.jpg',
			alt: 'Macbook'
		}, {
			src: 'img/5.jpg',
			alt: 'Macbook'
		}, {
			src: 'img/1.jpg',
			alt: 'Desktop'
		}, {
			src: 'img/2.jpg',
			alt: 'Macbook'
		}, {
			src: 'img/3.jpg',
			alt: 'Macbook'
		}, {
			src: 'img/4.jpg',
			alt: 'Macbook'
		}, {
			src: 'img/5.jpg',
			alt: 'Macbook'
		}, {
			src: 'img/1.jpg',
			alt: 'Desktop'
		}, {
			src: 'img/2.jpg',
			alt: 'Macbook'
		}, {
			src: 'img/3.jpg',
			alt: 'Macbook'
		}, {
			src: 'img/4.jpg',
			alt: 'Macbook'
		}, {
			src: 'img/5.jpg',
			alt: 'Macbook'
		}, {
			src: 'img/1.jpg',
			alt: 'Desktop'
		}, {
			src: 'img/2.jpg',
			alt: 'Macbook'
		}, {
			src: 'img/3.jpg',
			alt: 'Macbook'
		}, {
			src: 'img/4.jpg',
			alt: 'Macbook'
		}, {
			src: 'img/5.jpg',
			alt: 'Macbook'
		}]


	})

angular.bootstrap(document, ['myApp'])
