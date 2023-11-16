const buildings = require("./assets/buildings.json")
const ALDRICH_LAT = 33.645948685532094
const ALDRICH_LON = -117.8427395818449
const RING_ROAD_RADIUS = 0.00246259

// calc raw distance (not normalized)
function getRawDistance (lat1: number, lon1: number, lat2: number, lon2: number): number {
  return Math.sqrt(Math.pow(lat1 - lat2, 2) + Math.pow(lon1 - lon2, 2))
}

// calc distance (thanks pythagoras), normalized s.t. outer ring road is one radius away
function getRadius(lat: number, lon: number): number {
  return getRawDistance(lat, lon, ALDRICH_LAT, ALDRICH_LON) / RING_ROAD_RADIUS
}

// calc angle in radians, from -pi to pi
function getAngle(lat:number, lon:number): number {
    let y = lat - ALDRICH_LAT
    let x = lon - ALDRICH_LON
    return Math.atan2(y, x)
}

// returns list of study spaces (ids) in specified quadrant, sorted by distance to specified lat/lon
function getStudySpaces(q: number, r: number, lat: number, lon: number) {
    let arr = []
    let chunk = "q" + q + "r" + r
    let currentChunk = buildings[chunk]

    for (let key in currentChunk) {
        let dist = getRawDistance(lat, lon, currentChunk[key]["lat"], currentChunk[key]["lon"])
        arr.push([dist, key])

    }

    arr.sort()

    for (let j = 0; j < arr.length; j++) {
        arr[j] = arr[j][1]
    }

    return arr

}
