'use strict';

var expect = require('chai').expect;


describe('random-altitude: ', function () {

  var randomAltitude = require('../../');

  it('common', function () {
    expect(randomAltitude())
      .to.be.within(0, 8488)
      .and
      .to.be.match(/^\d+(\.\d{1,5})?$/);

    expect(randomAltitude({
      min: 1000,
      max: 2000,
      fixed: 7
    }))
      .to.be.within(1000, 2000)
      .and
      .to.be.match(/^\d+(\.\d{1,7})?$/);
  });
});
