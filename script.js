let popup = document.getElementById('popupid'),
	popupToggle = document.getElementById('burger_open'),
	popupClose = document.querySelector('.close'),
	main = document.getElementById('main'),
	html = document.getElementById('html')

popupToggle.onclick = function () {
	popup.style.display = 'block'
	html.style.overflow = 'hidden'
}
popupClose.onclick = function () {
	popup.style.display = 'none'
	html.style.overflowY = 'visible'
}
window.onclick = function (event) {
	if (event.target == popup) {
		popup.style.display = 'none'
		html.style.overflowY = 'visible'
	}
}
