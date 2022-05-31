'use strict';


(function (root) {

	let parents = document.querySelectorAll(root);

	for (const elem of parents) {
		let img = elem.firstElementChild;
		let imgSrc = img.src.startsWith('http') ? img.src.slice(-18) : img.src;
		img.classList.add('hidden');

		elem.style.backgroundImage = `url('${imgSrc}')`;
		elem.classList.add('imageFit');
	}

})('.ibg')

