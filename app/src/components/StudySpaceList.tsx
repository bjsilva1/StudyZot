import { useEffect } from "react";

import { BasicStudyCard } from "./SpaceCards";
import { HeroCard } from "./HeroCards";

import Locations from "../assets/spaces.json"
import "./studyzot.types.ts"
import { getChunk, getStudySpaces, expandNeighboringCoordinates} from "./distanceCalc.ts";


// Gets the current 
function getUserLatLon(): {lat: number, lon: number} {
    let coords: {lat: number, lon: number} = {lat: 0, lon: 0}

    function convertToChunk(position: GeolocationPosition){
        coords.lat = (position.coords.latitude)
        coords.lon = (position.coords.longitude)
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(convertToChunk);
      return coords
    } else {
      return null
    }
}

var userCoords: {lat: number, lon: number} = {lat: 0, lon: 0}
var visitedChunks: chunkCoord[] = []
var nearbyLocations: string[] = []
var studySpaces: StudySpaceInfo[] = []

function updateStudySpaces() {
    studySpaces = []
    for (let location in nearbyLocations) {
        for (let space in Locations[location].studySpaces) {
            studySpaces.push(space)
        }
    }
}

export function StudySpaceList() {

    useEffect(() => {
        userCoords = getUserLatLon()
        console.log("hello")
        console.log(userCoords)
        console.log(userCoords.lat)

        if (userCoords.lat){
            let userChunk: chunkCoord | null = getChunk(userCoords.lat, userCoords.lon)
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
