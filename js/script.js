'use strict';

var imgSrc;

(function (root) {

	let parent = document.querySelector(root);
	let img = parent.firstElementChild;
	imgSrc = img.src;
	img.classList.add('hidden');

	parent.style.backgroundImage = `url(/img/block_1/1.jpg)`;
	parent.classList.add('imageFit');

})('.ibg')

//console.log(imgSrc);