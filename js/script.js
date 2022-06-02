'use strict';


(function (root) {

	let parents = document.querySelectorAll(root);

	for (const elem of parents) {
		let imgSrc = elem.firstElementChild.getAttribute('src');
		elem.firstElementChild.classList.add('hidden');

		elem.style.backgroundImage = `url('${imgSrc}')`;
		elem.classList.add('imageFit');
	}

})('.ibg')

