function daysUntil(year, month, day) {
	var now = new Date(),
		dateEnd = new Date(year, month - 1, day),
		days = (dateEnd - now) / 1000 / 60 / 60 / 24;
	return Math.round(days);
}
function isMobileDevice() {
	return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
function mobileCheck() {
	if (isMobileDevice() == true) {
		var mobileHide = document.getElementsByClassName('mobile-hide');
		var mobileShow = document.getElementsByClassName('mobile-show');
		var mobileChangeSize = document.getElementsByClassName('mobile-changeSize');
		for (var i = 0; i < mobileHide.length; i++ ) {
			mobileHide[i].style.display = "none";
		}
		for (var i = 0; i < mobileShow.length; i++ ) {
			mobileShow[i].style.display = "inline";
		}
		for (var i = 0; i < mobileChangeSize.length; i++ ) {
			mobileChangeSize[i].style.fontSize = "smaller";
		}
	}
}
function header(element) {
	document.getElementById(element).scrollIntoView();
	scrollBy(0,-5);
}