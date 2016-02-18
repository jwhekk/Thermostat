function Thermostat() {
  this.temp = 20;
};

Thermostat.prototype.increase = function() {
  this.temp += 1;
};

Thermostat.prototype.decrease = function() {
  if (this.temp == 10) {
    this.temp;
  }
  else {
    this.temp -= 1;
  };
};
