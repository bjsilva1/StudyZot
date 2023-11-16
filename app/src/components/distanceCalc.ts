const ALDRICH_LAT = 33.645948685532094
const ALDRICH_LON = -117.8427395818449
const RING_ROAD_RADIUS = 0.00246259

// calc distance (thanks pythagoras), normalized s.t. outer ring road is one radius away
function getRadius(lat:number, lon:number): number {
	let rawDistance = Math.sqrt(Math.pow(lat - ALDRICH_LAT, 2) + Math.pow(lon - ALDRICH_LON, 2))
    return rawDistance / RING_ROAD_RADIUS
}
