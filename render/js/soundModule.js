SoundModule = function(map) {
	var cameraPosition = new THREE.Vector2(0, 0, 0);
	var timestamps=[];	
	var feature;

	oscillator = new Oscillator(timestamps, map.getCoordinatesForStreet("Hermannplatz"));


	this.updateSpat = function(vector3) {
		oscillator.updateSpat(vector3);
	}

	this.play = function(){
		oscillator.start();
	}

	this.stop = function(){
		oscillator.stop();
	}
}
