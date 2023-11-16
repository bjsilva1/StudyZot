import { BasicStudyCard } from "./SpaceCards";
import { HeroCard } from "./HeroCards";

import "./studyzot.types.ts"

export default function StudySpaceList(props: {spaceList: StudySpaceInfo[]}) {
    
    let firstSpace: StudySpaceInfo | undefined = undefined
    firstSpace = props.spaceList.shift()
    
    return (
        <>
            {firstSpace ? <HeroCard spaceInfo={firstSpace}/> : null}
            { props.spaceList.forEach((space : StudySpaceInfo) => <BasicStudyCard spaceInfo={space}/> ) }
        </>
    )
}