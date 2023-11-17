import { useEffect, useState } from "react";

import { BasicStudyCard } from "./SpaceCards";
import { HeroCard } from "./HeroCards";

import LocationData from "../assets/spaces.json"
import "./studyzot.types.ts"
import { getChunk, getStudySpaces, expandNeighboringCoordinates} from "./distanceCalc.ts";

interface LocationType {
    [key: string]: {
        name: string
        studySpaces: StudySpaceInfo[]
    };
}

const Locations : LocationType = LocationData

function nearbyStudySpaces(locations: [number, string][]) : StudySpaceInfo[] {
    let studySpaceList: StudySpaceInfo[] = []
    for (let location of locations) {
        for (let space of Locations[location[1]].studySpaces) {
            studySpaceList.push(space)
        }
    }
    return studySpaceList
}

export function StudySpaceList() {
    const [userCoords, setUserCoords] = useState<GeolocationCoordinates | null>(null)
    const [visitedChunks, setVisitedChunks] = useState<chunkCoord[]>([])
    const [nearbyLocations, setNearbyLocations] = useState<[number, string][]>([])
    const [studySpaces, setStudySpaces] = useState<StudySpaceInfo[]>([])

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
                console.log(nearbyLocations)
                let currStudySpaces = nearbyStudySpaces(nearbyLocations)
                console.log(currStudySpaces)

                for (let i = 0; currStudySpaces.length < 10 && i < 5; i++) {
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

                console.log(nearbyLocations)
                console.log(currStudySpaces)

                setVisitedChunks(currSeenChunks)
                setNearbyLocations(nearbyLocations)
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

function SlidingList(props: {spaceList: StudySpaceInfo[]}) {
    let firstSpace : StudySpaceInfo | undefined = props.spaceList.shift()

    return (
        <>
            {firstSpace ? <HeroCard spaceInfo={firstSpace}/> : null}
            { props.spaceList.forEach((space : StudySpaceInfo) => <BasicStudyCard spaceInfo={space}/> ) }
        </>
    )
}