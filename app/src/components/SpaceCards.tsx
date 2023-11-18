import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import "./SpaceCards.css"

import StudyProgressBar from './ProgressBar'
import "./studyzot.types.ts"

export function BasicStudyCard(props : {spaceInfo : SpaceCardInfo})
{
    let studySpace = props.spaceInfo.studySpace
    let buildingName = props.spaceInfo.buildingName
    let imageUrl = props.spaceInfo.imageUrl
    let distance_miles = props.spaceInfo.distance
    let distance_minutes = distance_miles * 20
    let occuspaceId = studySpace.id

    let locationUrl = "https://www.google.com/maps/dir//"
    if (buildingName != "")
    {
        locationUrl += buildingName + ",+Irvine+CA+92617"
    }
    else
    {
        locationUrl += studySpace.name + ",+Irvine+CA+92617"
    }

    distance_miles = Math.round(distance_miles * 10) / 10
    distance_minutes = Math.round(distance_minutes)

    return (
        <Card className="spaceCard" style={{margin: "5% 5%", width: "90%", height: "200px"}}>
            <Card.Body style={{display: "flex", flexDirection: "row", margin: "0", padding: "0", overflow: "hidden"}}>
                <img src={imageUrl} style={{ width: "200px", objectFit: "cover"}}/>
                <div className='study-space-info'>
                    <div style={{padding: "10px 10px 10px 0px"}}>
                        <Card.Title className='space-title'>
                            {buildingName == "" ? studySpace.name : buildingName + ": " + studySpace.name}
                        </Card.Title>
                        <Card.Text className='space-description'>
                        {studySpace.description}
                        </Card.Text>
                    </div>
                    <div style={{display: "flex", width: "98%", alignItems: "center", gap: "5%"}}>
                        <StudyProgressBar occuspaceId={occuspaceId}/>
                        <div style={{display: "flex", width: "50%",  justifyContent: "right", gap: "10%"}}>
                            <Card.Text>{distance_miles} mi</Card.Text>
                            <Card.Text>{distance_minutes} min</Card.Text>

                        </div>
                        <Button style={{marginBottom: "0.7rem"} href={locationUrl} target="_blank"}>
                            Directions
                        </Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )

}
