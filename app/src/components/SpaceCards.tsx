import { useState } from 'react'
import { Card } from 'react-bootstrap'
import studyZotIcon from '../assets/StudyZotIcon_Circle.svg'
import "./SpaceCards.css"

import StudyProgressBar from './ProgressBar'
import "./studyzot.types.ts"

export function BasicStudyCard(props: {spaceInfo : StudySpaceInfo})
{
    return (
        <Card style={{margin: "5% 5%"}}>
            <Card.Body style={{display: "flex", flexDirection: "row", margin: "15px 5px"}}>
                <img src={studyZotIcon} style={{width: "200px", height: "200px"}}/>
                <div className='study-space-info'>
                    <div>
                        <Card.Title>Study Space Name</Card.Title>
                        <Card.Text>
                        Information on this study space goes here. Wow what an interesting study space!
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