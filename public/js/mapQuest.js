function initMap() {
	// add your code here
	L.mapquest.key = 'B7zF9ocrBTnwdRlpZh9oupjfrboTKEyC';

	var map = L.mapquest.map('map', {
		center: [32.879017, -117.235940],
		layers: L.mapquest.tileLayer('map'),
		zoom: 14,
		zoomControl: false
	});

	L.marker([32.879017,-117.235940]).addTo(map);
}