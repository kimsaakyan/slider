// Получим кнопки "next" and "prev"
const buttonPrev = document.querySelector('.previous');
const buttonNext = document.querySelector('.next');
const buttonAuto = document.querySelector('.auto-slide');
const buttonStop = document.querySelector('.stop');

// Получим список наших фото.
const photoAlbum = document.querySelectorAll('.img');


// Повесим события на наши кнопки.
buttonNext.addEventListener('click', nextPicture);
buttonPrev.addEventListener('click', prevPicture);

buttonAuto.addEventListener('click', () => {
	let s = setInterval(nextPicture, 1000);
	buttonStop.addEventListener('click', (event) => {
		clearInterval(s);
	})
});


// Счетчик, будет показывать номер той картины, которая будет активна прямо в момент просмотра.
let count = 0;

function nextPicture() {
	if (count < photoAlbum.length - 1) {
		count++;
	}
	else {
		count = 0;
	}

	for (let i = 0; i < photoAlbum.length; i++) {
		photoAlbum[i].classList.add('hidden');
	}

	photoAlbum[count].classList.remove('hidden');

}

function prevPicture() {
	if (count === 0) {
		count = photoAlbum.length - 1;
	} else {
		count--;
	}

	for (let i = 0; i < photoAlbum.length; i++) {
		photoAlbum[i].classList.add('hidden');
	}

	photoAlbum[count].classList.remove('hidden');
}
