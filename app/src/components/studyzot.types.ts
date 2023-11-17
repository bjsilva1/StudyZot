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

type AboutProps = {
    onHide: any,
    show: any
}

type LocationInfo = {
    name: string,
    studySpaces: StudySpaceInfo[]
}

type SpaceCardInfo = {
    studySpace: StudySpaceInfo,
    buildingName: string,
    distance: number,
    imageUrl: string
}