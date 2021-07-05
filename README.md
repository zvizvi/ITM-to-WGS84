# ITM to WGS84
Convert easily between ITM ([Israel Transverse Mercator](https://en.wikipedia.org/wiki/Israeli_Transverse_Mercator)) coordinates to WGS84 ([World geodetic system](https://en.wikipedia.org/wiki/WGS84)) and vice versa.


## Installation
```
npm install itm-wgs84
```


## Usage

```
const { ITMtoWGS84, WGS84toITM } = require('itm-wgs84');

ITMtoWGS84 (x, y);
// return: { lat: 26.0623100, lng: 33.0120379 }

WGS84toITM (lat, lng);
// return: { x: 31.7777692, y: 35.2350114 }

```
