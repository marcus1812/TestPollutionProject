import { Injectable } from '@angular/core';

@Injectable()
export class MapService {

    constructor() { }

    /**
    * Generates number of random geolocation points given a center and a radius.
    * @param  {Object} center A JS object with lat and lng attributes.
    * @param  {number} radius Radius in meters.
    * @param {number} count Number of points to generate.
    * @return {array} Array of Objects with lat and lng attributes.
    */
    generateRandomPoints(center: any, radius: any, count: any) {
        var points = [];
        for (var i = 0; i < count; i++) {
            points.push(this.generateRandomPoint(center, radius));
        }
        return points;
    }

    /**
    * Generates number of random geolocation points given a center and a radius.
    * Reference URL: http://goo.gl/KWcPE.
    * @param  {Object} center A JS object with lat and lng attributes.
    * @param  {number} radius Radius in meters.
    * @return {Object} The generated random points as JS object with lat and lng attributes.
    */
    generateRandomPoint(center: any, radius: any) {
        var x0 = center.lng;
        var y0 = center.lat;
        // Convert Radius from meters to degrees.
        var rd = radius / 111300;

        var u = Math.random();
        var v = Math.random();

        var w = rd * Math.sqrt(u);
        var t = 2 * Math.PI * v;
        var x = w * Math.cos(t);
        var y = w * Math.sin(t);

        var xp = x / Math.cos(y0);

        // Resulting point.
        return { 'lat': y + y0, 'lng': xp + x0 };
    }
}
