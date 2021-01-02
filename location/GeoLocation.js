import { getDistance } from "geolib";

export const feetInLatitude = 364000;
export const feetInLongitude = 288200;
export const feetInMile = 5280;
export const feetInMeter = 3.28084;
export function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

export default class GeoLocation {
  constructor(latitude, longitude, timestamp) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.timestamp = timestamp;
  }

  /**
   *
   * @param {GeoLocation} externalGeoLocation
   */
  getDistanceFromInMeters(externalGeoLocation) {
    return getDistance(this, externalGeoLocation, 0.01);
    // The radius of the planet earth in meters
    let R = 6378137;
    let dLat = degreesToRadians(externalGeoLocation.latitude - this.latitude);
    let dLong = degreesToRadians(
      externalGeoLocation.longitude - this.longitude
    );
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degreesToRadians(this.latitude)) *
        Math.cos(degreesToRadians(this.latitude)) *
        Math.sin(dLong / 2) *
        Math.sin(dLong / 2);

    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let distance = R * c;
    return distance;
  }

  getDifferenctFromLocationInFeet(externalGeoLocation) {
    return this.getDistanceFromInMeters(externalGeoLocation) * feetInMeter;
  }
}
