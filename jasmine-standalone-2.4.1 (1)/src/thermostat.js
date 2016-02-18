'use strict';

function Thermostat () { //creating a class
	this.DEFAULT_TEMP 			= 20;
	this.temperature 	 			= this.DEFAULT_TEMP; //adding a property or the attribute of the class
	this.MinimumTemp 	 			= 10;
	this.powerSave   	 			= true;
	this.maxTempSaveMode 		= 25;
	this.maxTempSaveModeOff	= 32;
}

Thermostat.prototype.getCurrentTemperature = function() { //ading a methd to a class
	return this.temperature; //the logic inside the method
};

Thermostat.prototype.upButton = function() {
 	if (this.ispowerSave ())
 		if (this.temperature < this.maxTempSaveMode){
 			this.temperature += 1;
 		}
 	if (this.ispowerSave() == false)
 		if	(this.temperature < this.maxTempSaveModeOff){
 			this.temperature +=1;
 		}	
 	return;
};

Thermostat.prototype.downButton = function() {
	if(this.isMinimumTemp()){
	return;
	}
	this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemp = function() {
	return this.MinimumTemp === this.temperature;
};

Thermostat.prototype.ispowerSave = function() {
	return this.powerSave === true;
};

Thermostat.prototype.powerSaveOff = function() {
	this.powerSave = false;
};

Thermostat.prototype.powerSaveOn = function() {
	this.powerSave = true;
};

Thermostat.prototype.resetTemp = function() {
	this.temperature = this.DEFAULT_TEMP;
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