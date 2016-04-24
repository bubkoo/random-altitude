# random-altitude

> Generate a random altitude, in meters.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-altitude/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-altitude/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-altitude)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-altitude/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-altitude)


## Install

```
$ npm install --save random-altitude 
```

## Usage

```js
var randomAltitude = require('random-altitude');

// API
// - randomAltitude();
// - randomAltitude(options);

// options:
// - min  : default 0
// - max  : default 8488
// - fixed: default 5

randomAltitude();
// => 1863.21417
```

By default, includes 5 digits of accuracy after the decimal. Can override with the `fixed` option.

```js
randomAltitude({ fixed: 7 })
// => 6897.8978386
```

By default, max of `8848m` (height of Mount Everest), but this can be overridden with the max option.

```js
randomAltitude({ max: 1000 })
=> 890.20665
```

## Related

- [random-depth](https://github.com/mock-end/random-depth) - Generate a random depth, in meters. Depths are always negative.
- [random-coordinates](https://github.com/mock-end/random-coordinates) - Generate a random coordinates, which are latitude and longitude, comma separated.
- [random-latitude](https://github.com/mock-end/random-latitude) - Generate a random latitude.
- [random-longitude](https://github.com/mock-end/random-longitude) - Generate a random longitude.
- [random-geohash](https://github.com/mock-end/random-geohash) - Generate a random geohash.
- [random-geojson](https://github.com/mock-end/random-geojson) - Generate a random geojson.
- [random-country](https://github.com/mock-end/random-country) - Return a random country. 
- [random-lang](https://github.com/mock-end/random-lang) - Return a random language name.

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-altitude/issues/new).
