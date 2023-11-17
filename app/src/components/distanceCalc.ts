const ALDRICH_LAT = 33.645948685532094
const ALDRICH_LON = -117.8427395818449
const RING_ROAD_RADIUS = 0.00246259
const FIRST_BUILD_RADIUS = 0.00322162
import Quadrants from "../assets/quadrants.json"
import buildings from "../assets/buildings.json"

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

// Given the latitude and longitude, returns the chunk (quadrant + radius)
// of the coord.
export function getChunk(lat: number, lon: number): chunkCoord | null {
    var angle = getAngle(lat, lon)
    var dist = getRawDistance(lat, lon, ALDRICH_LAT, ALDRICH_LON)

    for (var key in Quadrants) {
        if (Number(key) > angle) {

            var radius = (dist < RING_ROAD_RADIUS) ? 1
                         : (dist > FIRST_BUILD_RADIUS) ? 3 : 2

            return {q: Quadrants[key]["quadrant"], r: radius}
        }
    }

    return null
}

// checks if chunkCoords are equal by value
function chunkCoordsAreEqual(c1: chunkCoord, c2: chunkCoord): boolean {
    return c1.q == c2.q && c1.r == c2.r
}

// returns list of study spaces (ids) in specified quadrant, sorted by distance to specified lat/lon
export function getStudySpaces(c: chunkCoord, lat: number, lon: number): string[] {
    let arr: [number, string][] = []
    let chunk = "q" + c.q + "r" + c.r
    let currentChunk = buildings[chunk]

    for (let key in currentChunk) {
        let dist = getRawDistance(lat, lon, currentChunk[key]["lat"], currentChunk[key]["lon"])
        arr.push([dist, key])

    }

    arr.sort()

    let spaceArr: string[] = []

    for (let j = 0; j < arr.length; j++) {
        spaceArr[j] = arr[j][1]
    }

    return spaceArr

}

// given the chunkCoord of a chunk, returns list of [q, r] for all neighboring chunks
function getNeighboringChunks(c: chunkCoord) {
    let output = []

    output.push(
        {
            q: (c.q + 1) % 10,
            r: c.r
        }
    )

    output.push(
        {
            q: (c.q + 9) % 10,
            r: c.r
        }
    )

    if (c.r < 3) {
        output.push(
            {
                q: c.q,
                r: c.r + 1
            }
        )
    }

    if (c.r > 1) {
        output.push(
            {
                q: c.q,
                r: c.r - 1
            }
        )
    }

    return output

}

//takes a chunkCoord list, returns a list containing all original chunks and their neighbors
export function expandNeighboringCoordinates(initialList: chunkCoord[]): chunkCoord[] {
  let output: chunkCoord[] = []

  for (let i = 0; i < initialList.length; i++) {
    output.push(initialList[i])
  }

  for (let coord of initialList) {
    for (let neighbor of getNeighboringChunks(coord)) {
        let isNeighborTracked = false

        for (let outputCoord of output) {
            if (chunkCoordsAreEqual(outputCoord, neighbor)) {
                isNeighborTracked = true
                break
            }
        }

        if (!isNeighborTracked) {
            output.push(neighbor)
        }
    }
  }

  return output

}
