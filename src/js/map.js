var styles = [{
		"featureType": "administrative",
		"elementType": "labels.text.fill",
		"stylers": [{
			"color": "#444444"
		}]
	},
	{
		"featureType": "landscape",
		"elementType": "all",
		"stylers": [{
			"color": "#f2f2f2"
		}]
	},
	{
		"featureType": "poi",
		"elementType": "all",
		"stylers": [{
			"visibility": "off"
		}]
	},
	{
		"featureType": "road",
		"elementType": "all",
		"stylers": [{
				"saturation": -100
			},
			{
				"lightness": 45
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "all",
		"stylers": [{
			"visibility": "simplified"
		}]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#ffffff"
		}]
	},
	{
		"featureType": "road.arterial",
		"elementType": "labels.icon",
		"stylers": [{
			"visibility": "off"
		}]
	},
	{
		"featureType": "transit",
		"elementType": "all",
		"stylers": [{
			"visibility": "off"
		}]
	},
	{
		"featureType": "water",
		"elementType": "all",
		"stylers": [{
				"color": "#dde6e8"
			},
			{
				"visibility": "on"
			}
		]
	}
]

function initMap(id) {
	var map = new google.maps.Map(document.getElementById(id), {
		zoom: 15,
		center: {
			lat: 50.474081,
			lng: 30.5128866
		},
		styles: styles
	});

	var image = {
		url: 'images/marker.png',
		// size: new google.maps.Size(20, 20),
		origin: new google.maps.Point(0, 0),
	}

	var marker = new google.maps.Marker({
		position: {
			lat: 50.474081,
			lng: 30.5128866
		},
		map: map,
		// title: 'heh',
		icon: image
	});
}

$(document).ready(function () {
	/* -------------- выдает ошибку при загрузке карты -------------- */
	// initMap('map');
});