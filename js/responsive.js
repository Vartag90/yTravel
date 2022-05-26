
window.addEventListener('resize', function (event) {
	adaptive_function();
})

function adaptive_header(w, h) {
	var headerTop = document.querySelector('.header-top');
	var headerMenu = document.querySelector('.header-menu');
	var headerLang = document.querySelector('.header-top-lang');
	var headerMenuIcon = document.querySelector('.header-menu__icon');
	var headerBottomMenu1 = document.querySelector('.header-bottom-menu-1');
	var headerBottomMenu2 = document.querySelector('.header-bottom-menu-2');
	var headerBottomColumn1 = document.querySelector('.header-bottom__column-1');
	var headerBottomColumn2 = document.querySelector('.header-bottom__column-2');

	if (w <= 768) {
		if (!headerBottomMenu2.classList.contains('done')) {
			headerBottomMenu2.classList.add('done');
			headerMenu.insertAdjacentElement('afterbegin', headerBottomMenu2);
		}
		if (!headerBottomMenu1.classList.contains('done')) {
			headerBottomMenu1.classList.add('done');
			headerMenu.insertAdjacentElement('afterbegin', headerBottomMenu1);
		}
		if (!headerLang.classList.contains('done')) {
			headerLang.classList.add('done');
			headerMenu.insertAdjacentElement('afterbegin', headerLang);
		}
	} else {
		if (headerLang.classList.contains('done')) {
			headerLang.classList.remove('done');
			headerTop.insertAdjacentElement('afterbegin', headerLang);
		}
		if (headerBottomMenu1.classList.contains('done')) {
			headerBottomMenu1.classList.remove('done');
			headerBottomColumn1.insertAdjacentElement('afterbegin', headerBottomMenu1);
		}
		if (headerBottomMenu2.classList.contains('done')) {
			headerBottomMenu2.classList.remove('done');
			headerBottomColumn2.insertAdjacentElement('afterbegin', headerBottomMenu2);
		}
	}

	headerMenuIcon.addEventListener('click', function () {
		headerMenu.classList.toggle('active');
		headerMenuIcon.classList.toggle('active');
	})

}




function adaptive_function() {
	var w = window.innerWidth;
	var h = window.innerHeight;
	adaptive_header(w, h);
}

adaptive_function();