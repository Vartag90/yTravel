'use strict';

(function (root) {

	let parent = document.querySelector(root);
	let inputs = parent.querySelectorAll('.input');

	for (const elem of inputs) {
		elem.placeholder = elem.dataset.value;
		elem.addEventListener('focus', function () {
			elem.placeholder = '';
		})
		elem.addEventListener('blur', function () {
			elem.placeholder = elem.dataset.value;
		})
	}
})('.contacts-content-form')

