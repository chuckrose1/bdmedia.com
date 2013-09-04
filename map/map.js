var map = null;

jQuery(document).ready(function(){


	//L.mapbox.auto('map', 'examples.map-vyofok3q', function(map) {
        //	map.eventHandlers[3].remove();
    	//});

	// SETUP THE MAP
	// Create map
	map = L.mapbox.map('box', 'buzztownproduct.map-4ev2zqdp');
	
	
	var mapCenter = { lat: 36.118602, lon: -108.193359 }

	// TO USE THE BUZZTOWN BASE MAP HERE: 'buzztownproduct.map-o4te30yb'
	//map.addLayer(mapbox.layer().id('buzztownproduct.map-gg9qeq4a'));

	// Create and add marker layer
	//var markerLayer = mapbox.markers.layer().features(features);
	//var interaction = mapbox.markers.interaction(markerLayer);
	//map.addLayer(markerLayer);

	// Set iniital center and zoom
	// map.centerzoom(mapCenter, 5 );
	// map.ui.zoomer.add();
	// map.ui.zoombox.add();
	
	// Attribute map
	//map.ui.attribution.add()
	//	.content('<a href="http://www.buzztown.com/policies/#terms">Terms of Use</a>');

	// END SETUP THE MAP
	
	
	// WIREUP A RECENTER WHEN THE WINDOW SIZE CHANGES
	jQuery(window).resize(function(){
		map.centerzoom(mapCenter, 5 );
	});
	
	// WIREUP LINKS TO ACTIVATE THE MAP
	// This won't actually do anything until you make a link on the page, and
	// modify the linkID to match the ID attribute of the link.  This is here
	// for structural purposes only.  Also, the lat, lon and zoom should be
	// adjusted to create the desired effect.
	jQuery('#linkID').click(function(evt){
		evt.preventDefault();
	   // map.ease.location({ lat: 37.811941, lon: -107.664506 }).zoom(16).optimal();
	});
});	
