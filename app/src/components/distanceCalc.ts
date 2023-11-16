const ALDRICH_LAT = 33.645948685532094
const ALDRICH_LON = -117.8427395818449
const RING_ROAD_RADIUS = 0.00246259

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
