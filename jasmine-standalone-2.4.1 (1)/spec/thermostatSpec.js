'use strict';

describe('Thermostat', function(){

	var thermostat;
	
	beforeEach(function(){
		thermostat = new Thermostat();
	});
	
	it('starts at 20 degrees', function(){
		expect(thermostat.getCurrentTemperature()).toEqual(20);
	});

	it('allows increase of temperature using up button', function(){
		thermostat.upButton();
		expect(thermostat.getCurrentTemperature()).toEqual(21);
	});
	
	it('allows decrease of temperature using down button', function(){
		thermostat.downButton();
		expect(thermostat.getCurrentTemperature()).toEqual(19);
	});

	it('allows us to set a minimum temperature 10º', function() {
		expect(thermostat.isMinimumTemp()).toEqual(10);
	});

	it('it will not reduce temperature under 10º', function() {
		for (var i=0; i<11; i++) {
			thermostat.downButton();};
			expect(thermostat.getCurrentTemperature()).toEqual(10);	
	});
});


