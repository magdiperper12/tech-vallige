window.addEventListener('scroll', function () {
	let elementToHide = document.getElementById('elementToHide');
	let header = document.getElementById('sticky-header');
	if (window.scrollY > 0) {
		elementToHide.style.display = 'none';
		header.style.padding = '0px';
	} else {
		elementToHide.style.display = 'block';
		header.style.padding = '10px 0px';
	}
});

window.addEventListener('scroll', function () {
	let arrow = document.getElementById('arrow');
	if (window.scrollY > 100) {
		arrow.style.display = 'block';
	} else {
		arrow.style.display = 'none';
	}
});

let magdi = document.querySelector('.magdi'),
	prev = document.querySelector('.prev'),
	text = document.querySelector('.text'),
	text_1 = document.querySelector('.text_1');

prev.addEventListener('click', () => {
	magdi.style.transform += 'translateX(100%)';
});
setInterval(function () {
	magdi.style.transform += 'translateX(-100%)';
}, 5000);

setInterval(function () {
	text.style.transform = 'translate(0px)';
	text_1.style.transform = 'translate(0px)';
}, 1000);

let mego = document.querySelector('#mego'),
	fego = document.querySelector('#fego');
if (mego.style.display == 'block') {
	setInterval(function () {
		mego.style.display = 'none';
		fego.style.display = 'block';
	}, 5000);
}

let carousel = document.querySelector('.carousel'),
	to = document.querySelector('.to'),
	from = document.querySelector('.from');

to.addEventListener('click', () => {
	carousel.style.transform += 'translateX(-300px)';
});

from.addEventListener('click', () => {
	carousel.style.transform += 'translateX(300px)';
});

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const sliderTrack = document.querySelector('.slider-track');

document.querySelector('.prev').addEventListener('click', () => {
	currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
	sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
});

document.querySelector('.next').addEventListener('click', () => {
	currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
	sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
});
