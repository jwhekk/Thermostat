describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });


  it('starts at 20 degrees', function() {
    expect(thermostat.temp).toEqual(20);
  });

  it('increases temperature by 1 when upButton is pressed', function() {
    thermostat.increase();
    expect(thermostat.temp).toEqual(21);
  });

  it('decreases the temperature by 1 when downButton is pressed', function() {
    thermostat.decrease();
    expect(thermostat.temp).toEqual(19);
  });

  it('minimal temperature is 10 degrees', function() {
    for(i=1; i <= 15; i ++) {
      thermostat.decrease();
    };
    expect(thermostat.temp).toEqual(10)
  });

});
