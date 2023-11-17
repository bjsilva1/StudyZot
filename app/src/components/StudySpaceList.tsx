import { useEffect } from "react";

import { BasicStudyCard } from "./SpaceCards";
import { HeroCard } from "./HeroCards";

import Locations from "../assets/spaces.json"
import "./studyzot.types.ts"
import { getChunk, getStudySpaces } from "./distanceCalc.ts";


// Gets the current 
function getUserLatLon(): [number, number] | null {
    let coords: [number, number] | null = null

    function convertToChunk(position: GeolocationPosition){
        coords = [position.coords.latitude, position.coords.longitude]
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(convertToChunk);
    } else {
      return null
    }

    return coords
}


let userLat: number | null = null
let userLon: number | null = null
let visitedChunks: chunkCoord[] = []
let nearbyLocations: string[] = []
let studySpaces: StudySpaceInfo[] = []

function updateStudySpaces() {
    studySpaces = []
    for (let location in nearbyLocations) {
        for (let space in Locations[location].studySpaces) {
            studySpaces.push(space)
        }
    }
}

export default function StudySpaceList() {
    
    useEffect(() => {
        let userCoords = getUserLatLon()
        if (userCoords){
            userLat = userCoords[0]
            userLon = userCoords[1]
            let userChunk: chunkCoord | null = getChunk(userLat, userLon)
            if (userChunk){
                visitedChunks.push(userChunk)
                nearbyLocations = getStudySpaces(userChunk, userLat, userLon)
                console.log(userLat)
                console.log(userLon)
                console.log(userChunk)
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