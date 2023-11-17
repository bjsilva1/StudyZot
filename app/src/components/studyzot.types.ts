type StudySpaceInfo = {
    name: string,
    description: string,
    locationLink: string,
    rating: number,
    distance: number,
    occuspaceId: number
}

type chunkCoord = {
    q: number,
    r: number
}

type AboutProps = {
    onHide: any,
    show: any
}

type LocationInfo = {
    name: string,
    studySpaces: StudySpaceInfo[]
}