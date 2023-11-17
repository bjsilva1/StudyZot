type StudySpaceInfo = {
    name: string,
    description: string,
    locationLink: string,
    rating: number,
    id: number,
    hasFood: boolean
}

type chunkCoord = {
    q: number,
    r: number
}

type LocationInfo = {
    name: string,
    studySpaces: StudySpaceInfo[]
}