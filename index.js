const proj4 = require('proj4');

// ITM
proj4.defs('EPSG:2039', '+proj=tmerc +lat_0=31.73439361111111 +lon_0=35.20451694444445 +k=1.0000067 +x_0=219529.584 +y_0=626907.39 +ellps=GRS80 +towgs84=-48,55,52,0,0,0,0 +units=m +no_defs');
// WGS84
proj4.defs('EPSG:4326', '+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees');

function ITMtoWGS84 (x, y) {
  const [lng, lat] = proj4(proj4('EPSG:2039'), proj4('EPSG:4326'), [x, y]);
  return { lat, lng };
}

function WGS84toITM (lat, lng) {
  const [x, y] = proj4(proj4('EPSG:4326'), proj4('EPSG:2039'), [lng, lat]);
  return { x, y };
}

module.exports = { ITMtoWGS84, WGS84toITM };
