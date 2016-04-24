'use strict';

var clamp       = require('clamp');
var assign      = require('object-assign');
var randomFloat = require('random-floating');

module.exports = function (options) {

  options = assign({
    fixed: 5,
    min: 0,
    max: 8848
  }, options);

  options.min = clamp(options.min, 0, 8488);
  options.max = clamp(options.max, 0, 8488);

  return randomFloat(options);
};

