
window.addEventListener('resize', function (event) {
	//adaptive_function();
})

function adaptive_header(w, h) {
	var headerMenuIcon = document.querySelector('.icon-menu');
	var menuBody = document.querySelector('.menu__body');

	if (w <= 768) {
		headerMenuIcon.addEventListener('click', function () {
			menuBody.classList.toggle('active');
			headerMenuIcon.classList.toggle('active');
		});
	}
}

function adaptive_function() {
	var w = window.innerWidth;
	var h = window.innerHeight;
	adaptive_header(w, h);
}

adaptive_function();