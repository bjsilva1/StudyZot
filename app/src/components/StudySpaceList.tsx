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

var visitedChunks: chunkCoord[] = []
var nearbyLocations: string[] = []
var studySpaces: StudySpaceInfo[] = []

function updateStudySpaces() {
    studySpaces = []
    for (let location in nearbyLocations) {
        for (let space of Locations[location].studySpaces) {
            studySpaces.push(space)
        }
    }
}

export function StudySpaceList() {

    const [userCoords, setUserCoords] = useState<number[]>([])

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setUserCoords([latitude, longitude]);
            console.log(userCoords)
            });
        }
    

        if (userCoords){
            let userLat = userCoords[0]
            let userLon = userCoords[1]
            let userChunk: chunkCoord | null = getChunk(userLat, userLon)
            if (userChunk){
                visitedChunks.push(userChunk)
                nearbyLocations = getStudySpaces(userChunk, userLat, userLon)
                console.log(userChunk)
                updateStudySpaces()

                for (let i = 0; studySpaces.length < 10 && i < 5; i++) {
                    visitedChunks = expandNeighboringCoordinates(visitedChunks)
                    nearbyLocations = getStudySpaces(userChunk, userLat, userLon)
                    updateStudySpaces()
                }

                console.log(visitedChunks)
                console.log(studySpaces)
            }
        }
    }, [])

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