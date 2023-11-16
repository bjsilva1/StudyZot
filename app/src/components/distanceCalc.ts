const ALDRICH_LAT = 33.645948685532094
const ALDRICH_LON = -117.8427395818449
const RING_ROAD_RADIUS = 0.00246259
const FIRST_BUILD_RADIUS = 0.00322162 
import Quadrants from "../assets/quadrants.json"

// calc raw distance (not normalized)
function getRawDistance (lat:number, lon:number): number {
    return Math.sqrt(Math.pow(lat - ALDRICH_LAT, 2) + Math.pow(lon - ALDRICH_LON, 2))
}

// calc distance (thanks pythagoras), normalized s.t. outer ring road is one radius away
function getRadius(lat:number, lon:number): number {
    return getRawDistance(lat, lon) / RING_ROAD_RADIUS
}

// calc angle in radians, from -pi to pi
function getAngle(lat:number, lon:number): number {
    let y = lat - ALDRICH_LAT
    let x = lon - ALDRICH_LON
    return Math.atan2(y, x)
}

// Given the latitude and longitude, returns the chunk (quadrant + radius)
// of the coord.
function getChunk(lat: number, lon:number): string {
    var angle = getAngle(lat, lon)
    var dist = getRawDistance(lat, lon)

    for (var key in Quadrants) {
        if (Number(key) > angle) {

            var radius = (dist < RING_ROAD_RADIUS) ? "r1" 
                         : (dist > FIRST_BUILD_RADIUS) ? "r3" : "r2"

            return "q" + Quadrants[key]["quadrant"] + radius
        }
    }

    return "err"
}