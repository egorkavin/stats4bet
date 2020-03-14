let popupButton = document.getElementsByClassName('bar__more');
for (let i = 0; i < popupButton.length; i++) {
	popupButton[i].addEventListener('click', function() {
		let popupButton = document.getElementsByClassName('overlay');
		console.log(popupButton);
		popupButton[i].style.height = '100%';
	});
}

let closePopupButton = document.getElementsByClassName('detailedBar__closeButton');
for (let i = 0; i < closePopupButton.length; i++) {
	closePopupButton[i].addEventListener('click', function() {
		let closePopupButton = document.getElementsByClassName('overlay');
		console.log(closePopupButton);
		closePopupButton[i].style.height = '0';
	});
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
			panel.style.height = 'auto';
			panel.style.maxHeight = panel.scrollHeight + 'px';
		}
	});
}

let moreButtons = document.getElementsByClassName('wayGrid__moreButton');
for (let i = 0; i < moreButtons.length; i++) {
	moreButtons[i].addEventListener('click', function() {
		this.classList.toggle('wayGrid__moreButton_active');
		let hiddenWindow = this.nextElementSibling;
		if (hiddenWindow.style.display != 'grid') hiddenWindow.style.display = 'grid';
		else hiddenWindow.style.display = 'none';
	});
}
