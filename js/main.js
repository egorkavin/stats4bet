document.addEventListener('click', function(event) {
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

function changeOverlayHeightAfterClick(className, height) {
	let classList = document.getElementsByClassName(className);
	for (let i = 0; i < classList.length; i++) {
		classList[i].addEventListener('click', function() {
			changeOverlayHeight(height, i);
		});
	}
}

function changeOverlayHeight(height, i) {
	let overlay = document.getElementsByClassName('overlay');
	overlay[i].style.height = height;
	document.getElementsByTagName('body')[0].style.overflow = height == '100%' ? 'hidden' : '';
}

function openWindow(buttonName, hiddenWindowName) {
	let button = document.getElementsByClassName(buttonName);
	for (let i = 0; i < button.length; i++) {
		button[i].addEventListener('click', function() {
			this.classList.toggle(buttonName + '_active');
			let hiddenWindow = document.getElementsByClassName(hiddenWindowName);
			if (hiddenWindow[i].style.display != 'flex') {
				hiddenWindow[i].style.display = 'flex';
			} else {
				hiddenWindow[i].style.display = 'none';
			}
		});
	}
}

function changeBartopHeight() {
	let bartop = document.getElementsByClassName('bartop')[0];
	let bartopTextMobile = document.getElementsByClassName('bartop__text_mobile')[0];
	bartop.addEventListener('click', function() {
		if (document.body.clientWidth <= 768) {
			bartop.style.height = bartop.style.height == 'auto' ? '' : 'auto';
			bartopTextMobile.style.display = bartop.style.height == 'auto' ? 'none' : '';
		}
	});
}

function openOverlayAfterClickOnMainItem() {
	let mainItemWithBonus = document.getElementsByClassName('main__item_withBonus');
	for (let i = 0; i < mainItemWithBonus.length; i++) {
		mainItemWithBonus[i].children[0].addEventListener('click', function() {
			if (document.body.clientWidth <= 768) {
				changeOverlayHeight('100%', i);
			}
		});
	}
}

function openBonus() {
	let bonuses = document.getElementsByClassName('bonus__btn');
	for (let i = 0; i < bonuses.length; i++) {
		bonuses[i].addEventListener('click', function() {
			if (document.body.clientWidth <= 576) {
				changeOverlayHeight('100%', i);
			} else {
				this.classList.toggle('bonus__btn__active');
				let panel = this.previousElementSibling;
				if (panel.style.maxHeight) {
					panel.style.margin = 0;
					panel.style.maxHeight = null;
				} else {
					panel.style.margin = '10px auto 0 auto';
					panel.style.maxHeight = panel.scrollHeight + 'px';
				}
			}
		});
	}
}

function changeActiveBartopItem() {
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
}

function closeOverlayIfClickOutside() {
	let overlay = document.getElementsByClassName('overlay');
	let detailedBar = document.getElementsByClassName('detailedBar');
	for (let i = 0; i < detailedBar.length; i++) {
		overlay[i].addEventListener('click', function(event) {
			if (overlay[i].style.height == '100%') {
				if (!detailedBar[i].contains(event.target)) {
					overlay[i].style.height = 0;
					document.getElementsByTagName('body')[0].style.overflow = 'visible';
				}
			}
		});
	}
}

openWindow('detailedBar__infoIcon', 'detailedBar__window');
openWindow('bar__moreIcons', 'bar__window');
changeOverlayHeightAfterClick('bar__more', '100%');
changeOverlayHeightAfterClick('detailedBar__closeButton', '0');
changeBartopHeight();
openOverlayAfterClickOnMainItem();
openBonus();
changeActiveBartopItem();
closeOverlayIfClickOutside();
