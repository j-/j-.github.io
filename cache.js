(function () {

var cache = window.applicationCache;

// application cache may not be available
if (!cache) {
	return;
}

// try and update
if (navigator.onLine) {
	cache.update();
}

cache.addEventListener('updateready', function () {
	cache.swapCache();
	location.refresh();
});

})();
