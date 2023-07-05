const iconMenu = document.querySelector('.menu__icon');
const listMenu = document.querySelector('.menu__list');
const body = document.body;
if (iconMenu) {
	iconMenu.addEventListener('click', function () {
		listMenu.classList.toggle('_active');
		body.classList.toggle('_active');
	})
}
// ==============
const nav = document.querySelector('.nav');
let heightDoc = body.clientHeight;
console.log(heightDoc);
nav.style.height = heightDoc + 'px';
if (nav) {
	body.addEventListener('mouseover', function () {
		let heightDoc = body.clientHeight;
		console.log(heightDoc);
		nav.style.height = heightDoc + 'px';
	});
}
