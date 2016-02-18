$(document).ready(function() {
	var thermostat = new Thermostat();
	updateTemp();

	$('#upButton').on('click', function(){
		thermostat.upButton();
		updateTemp();
	})

	$('#downButton').on('click', function(){
		thermostat.downButton();
		updateTemp();
	})

	$('#resetTemp').on('click', function(){
		thermostat.resetTemp();
		updateTemp();
	})

	$('#powerSaveOn').on('click', function(){
		thermostat.powerSaveOn();
		$('#ispowerSave').text('on');
			updateTemp();
	})

	$('#powerSaveOff').on('click', function(){
		thermostat.powerSaveOff();
		$('#ispowerSave').text('off');
			updateTemp();
	})

	function updateTemp() {
		$('#temperature').text(thermostat.temperature);
		$('#temperature').attr('class', thermostat.usageLevel());
	};
});



