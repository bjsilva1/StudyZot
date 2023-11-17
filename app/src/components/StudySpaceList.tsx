import { useEffect, useState } from "react";

import { BasicStudyCard } from "./SpaceCards";
import { HeroCard } from "./HeroCards";

import LocationData from "../assets/spaces.json"
import "./studyzot.types.ts"
import { getChunk, getStudySpaces, expandNeighboringCoordinates} from "./distanceCalc.ts";

interface LocationType {
    [key: string]: {
        name: string,
        studySpaces: StudySpaceInfo[]
    };
}

const Locations : LocationType = LocationData
const DISTANCE_CONVERSION = 0.16572 / 0.00246259

function nearbyStudySpaces(locations: [number, string][]) : SpaceCardInfo[] {
    let studySpaceList: SpaceCardInfo[] = []
    for (let location of locations) {
        for (let space of Locations[location[1]].studySpaces) {
            let distance_miles = location[0] * DISTANCE_CONVERSION
            let image_url = "../assests/" + location[1] + ".png"
            let building_name = Locations[location[1]].name

            studySpaceList.push({studySpace: space, buildingName: building_name, imageUrl: image_url, distance: distance_miles})
        }
    }
    return studySpaceList
}

export function StudySpaceList() {
    const [userCoords, setUserCoords] = useState<GeolocationCoordinates | null>(null)
    //const [visitedChunks, setVisitedChunks] = useState<chunkCoord[]>([])
    //const [nearbyLocations, setNearbyLocations] = useState<[number, string][]>([])
    const [studySpaces, setStudySpaces] = useState<SpaceCardInfo[]>([])

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setUserCoords(position.coords); 
            });
        }
    }, [])

    useEffect(() => {
        if (userCoords){
            let userLat = userCoords.latitude
            let userLon = userCoords.longitude
            let userChunk: chunkCoord | null = getChunk(userLat, userLon)
            if (userChunk){
                let currSeenChunks = []
                currSeenChunks.push(userChunk)
                let nearbyLocations = getStudySpaces(userChunk, userLat, userLon)
                let currStudySpaces = nearbyStudySpaces(nearbyLocations)

                for (let i = 0; currStudySpaces.length < 9 && i < 5; i++) {
                    currSeenChunks = expandNeighboringCoordinates(currSeenChunks)
                    nearbyLocations = []
                    for (let chunk of currSeenChunks)
                    {
                        for (let location of getStudySpaces(chunk, userLat, userLon))
                        {
                            nearbyLocations.push(location)
                        }
                    }
                        
                    currStudySpaces = nearbyStudySpaces(nearbyLocations)
                }

                //setVisitedChunks(currSeenChunks)
                //setNearbyLocations(nearbyLocations)
                setStudySpaces(currStudySpaces)
            }
        }
    }, [userCoords])

    return (
        <>
            <SlidingList spaceList={studySpaces}/>
        </>
    )

}

function SlidingList(props: {spaceList: SpaceCardInfo[]}) {
    let spaceListCopy = props.spaceList.slice()
    let firstSpace : SpaceCardInfo | undefined = spaceListCopy.shift()

    return (
        <>
            {firstSpace ? <HeroCard spaceInfo={firstSpace}/> : null}
            { spaceListCopy.map((space : SpaceCardInfo) => {
                return <BasicStudyCard key={space.studySpace.name} spaceInfo={space}/>
            } ) }
        </>
    )
}