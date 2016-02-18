'use strict';

function Thermostat () { //creating a class
	this.temperature = 20; //adding a property or the attribute of the class
	this.MinimumTemp = 10;
}

Thermostat.prototype.getCurrentTemperature = function() { //ading a methd to a class
	return this.temperature; //the logic inside the method
};

Thermostat.prototype.upButton = function() {
 	 this.temperature += 1;
};

Thermostat.prototype.downButton = function() {
	if(this.temperature > this.MinimumTemp){
	this.temperature -= 1;}
};

Thermostat.prototype.isMinimumTemp = function() {
	return this.MinimumTemp;
};

// Thermostat starts at 20 degrees
// You can increase the temp with the up button
// You can decrease the temp with the down button
// The minimum temperature is 10 degrees
// If power saving mode is on, the maximum temperature is 25 degrees
// If power saving mode is off, the maximum temperature is 32 degrees
// Power saving mode is on by default
// You can reset the temperature to 20 by hitting the reset button
// The thermostat should color the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red