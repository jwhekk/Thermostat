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
		expect(thermostat.MinimumTemp).toEqual(10);
	});

	it('it will not reduce temperature under 10º', function() {
		for (var i=0; i<11; i++) {
			thermostat.downButton();};
			expect(thermostat.getCurrentTemperature()).toEqual(10);
	});

	it('power save is on by default', function(){
		expect(thermostat.ispowerSave()).toEqual(true);
	});

	it('power save can be turned off', function(){
		thermostat.powerSaveOff();
		expect(thermostat.ispowerSave()).toEqual(false);
	});

	it('power save can be turned on', function(){
		thermostat.powerSaveOff();
		thermostat.powerSaveOn();
		expect(thermostat.ispowerSave()).toEqual(true);
	});

	it('has a max temperature 25 when power save is on', function(){
		for (var i = 0; i<6; i++) {
			thermostat.upButton();};
		expect(thermostat.getCurrentTemperature()).toEqual(25);
	});

	it('has a max temperature 25 when power save is on', function(){
		thermostat.powerSaveOff();
		for (var i = 0; i<15; i++) {
			thermostat.upButton();};
		expect(thermostat.getCurrentTemperature()).toEqual(32);
	});

	it('can reset the temperature to default', function(){
		for (var i = 0; i<6; i++) {
			thermostat.upButton();};
			thermostat.resetTemp();
			expect(thermostat.getCurrentTemperature()).toEqual(20);
	});

	it('shows the high usage level', function() {
    thermostat.powerSaveOff();
		for (var i = 0; i<6; i++) {
			thermostat.upButton();};
		expect(thermostat.usageLevel()).toEqual("high-usage");
	});

	it('shows the medium usage level', function() {
		expect(thermostat.usageLevel()).toEqual("medium-usage");
	});

	it('shows the low usage level', function() {
    thermostat.powerSaveOff();
		for (var i = 0; i<6; i++) {
			thermostat.downButton();};
		expect(thermostat.usageLevel()).toEqual("low-usage");
	});

});
