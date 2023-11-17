import EHPlaceHolder from '../assets/eh.png'
import { Card } from 'react-bootstrap'
import "./SpaceCards.css"

import StudyProgressBar from './ProgressBar'
import "./studyzot.types.ts"

export function BasicStudyCard(props : {spaceInfo : StudySpaceInfo})
{
    let studySpace = props.spaceInfo
    return (
        <Card style={{margin: "5% 5%", width: "90%", height: "200px"}}>
            <Card.Body style={{display: "flex", flexDirection: "row", margin: "0", padding: "0", overflow: "hidden"}}>
                <img src={EHPlaceHolder} style={{height: "100vh", width: "200px", objectFit: "cover"}}/>
                <div className='study-space-info'>
                    <div style={{padding: "10px 10px 10px 0px"}}>
                        <Card.Title className='space-title'>{studySpace.name}</Card.Title>
                        <Card.Text className='space-description'>
                        {studySpace.description}
                        </Card.Text>
                    </div>
                    <div style={{display: "flex", width: "90%"}}>
                        <StudyProgressBar capacity={40}/>
                        <div style={{display: "flex", width: "50%", justifyContent: "right", gap: "10%"}}>
                            <Card.Text>0.0 mi</Card.Text>
                            <Card.Text>0 min</Card.Text>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )

}
