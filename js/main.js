changeHeightAfterClick('bar__more', '100%');
changeHeightAfterClick('detailedBar__closeButton', '0');
function changeHeightAfterClick(className, height) {
	let classList = document.getElementsByClassName(className);

	for (let i = 0; i < classList.length; i++) {
		classList[i].addEventListener('click', function() {
			let overlay = document.getElementsByClassName('overlay');
			overlay[i].style.height = height;
			if (height == '100%') {
				document.getElementsByTagName('body')[0].style.overflow = 'hidden';
			} else {
				document.getElementsByTagName('body')[0].style.overflow = 'visible';
			}
		});
	}
}

let bonuses = document.getElementsByClassName('bonus__btn');
for (let i = 0; i < bonuses.length; i++) {
	bonuses[i].addEventListener('click', function() {
		this.classList.toggle('bonus__btn__active');
		let panel = this.previousElementSibling;
		if (panel.style.maxHeight) {
			panel.style.margin = 0;
			panel.style.maxHeight = null;
		} else {
			panel.style.margin = '10px auto 0 auto';
			panel.style.maxHeight = panel.scrollHeight + 'px';
		}
	});
}

let bartopItem = document.getElementsByClassName('bartop__item');
for (let i = 2; i < bartopItem.length; i++) {
	bartopItem[i].addEventListener('click', function() {
		let activeArrow = document.getElementsByClassName('bartop__arrow_active')[0];
		activeArrow.classList.remove('bartop__arrow_active');
		activeArrow.classList.add('bartop__arrow_hidden');
		let activeItem = document.getElementsByClassName('bartop__item_active')[0];
		activeItem.classList.remove('bartop__item_active');
		let arrow = this.getElementsByTagName('img')[0];
		if (arrow.classList.contains('bartop__arrow_hidden')) {
			arrow.classList.add('bartop__arrow_active');
			arrow.classList.remove('bartop__arrow_hidden');
			this.classList.add('bartop__item_active');
		}
	});
}
let bartop = document.getElementsByClassName('bartop')[0];
bartop.addEventListener('click', function() {
	if (bartop.style.maxHeight != '300px') {
		bartop.style.maxHeight = '300px';
	} else {
		bartop.style.maxHeight = '100px';
	}
});

let bartopItemActive = document.getElementsByClassName('bartop__item_active')[0];
bartopItemActive.addEventListener('click', function() {
	for (let i = 2; i < bartopItem.length; i++) {
		bartopItem[i].style.display = 'flex';
	}
});

let bar = document.getElementsByClassName('bar');
for (let i = 0; i < bar.length; i++) {
	bar[i].addEventListener('click', function() {
		if (document.body.clientWidth <= 768) {
			let overlay = this.nextElementSibling.nextElementSibling;
			if (overlay.className === 'overlay') {
				overlay.style.height = '100%';
			}
		}
	});
}

document.addEventListener('click', function(event) {
	let overlay = document.getElementsByClassName('overlay');
	for (let i = 0; i < overlay.length; i++) {
		if (event.target == overlay[i]) {
			overlay[i].style.height = 0;
			document.getElementsByTagName('body')[0].style.overflow = 'visible';
		}
	}
	let barWindow = document.getElementsByClassName('bar__window');
	let buttonToOpenBarWindow = document.getElementsByClassName('bar__moreIcons');
	for (let i = 0; i < barWindow.length; i++) {
		if (barWindow[i].style.display == 'flex') {
			if (!barWindow[i].contains(event.target) && event.target != buttonToOpenBarWindow[i]) {
				barWindow[i].style.display = 'none';
				buttonToOpenBarWindow[i].classList.remove('bar__moreIcons_active');
			}
		}
	}
	let barInfo = document.getElementsByClassName('detailedBar__window');
	let infoIcon = document.getElementsByClassName('detailedBar__infoIcon');
	for (let i = 0; i < barInfo.length; i++) {
		if (barInfo[i].style.display == 'flex') {
			document.addEventListener('click', function(event2) {
				if (barInfo[i].contains(event2.target)) {
					barInfo[i].style.display = 'flex';
					infoIcon[i].classList.add('detailedBar__infoIcon_active');
				} else if (!infoIcon[i].contains(event2.target)) {
					barInfo[i].style.display = 'none';
					infoIcon[i].classList.remove('detailedBar__infoIcon_active');
				}
			});
		}
	}
});

let infoIcon = document.getElementsByClassName('detailedBar__infoIcon');
for (let i = 0; i < infoIcon.length; i++) {
	infoIcon[i].addEventListener('click', function() {
		let hiddenWindow = document.getElementsByClassName('detailedBar__window');
		this.classList.toggle('detailedBar__infoIcon_active');
		if (hiddenWindow[i].style.display != 'flex') {
			hiddenWindow[i].style.display = 'flex';
		} else {
			hiddenWindow[i].style.display = 'none';
		}
	});
}

let moreButtons = document.getElementsByClassName('bar__moreIcons');
for (let i = 0; i < moreButtons.length; i++) {
	moreButtons[i].addEventListener('click', function() {
		if (document.body.clientWidth >= 769) {
			this.classList.toggle('bar__moreIcons_active');
			let hiddenWindow = document.getElementsByClassName('bar__window');
			if (hiddenWindow[i].style.display != 'flex') {
				hiddenWindow[i].style.display = 'flex';
			} else {
				hiddenWindow[i].style.display = 'none';
			}
		}
	});
}
