import { useState } from 'react'
import EHPlaceHolder from '../assets/EHPlaceholder.png'
import { Card } from 'react-bootstrap'
import "./SpaceCards.css"

import StudyProgressBar from './ProgressBar'
import "./studyzot.types.ts"

export function BasicStudyCard(props: {spaceInfo : StudySpaceInfo})
{
    return (
        <Card style={{margin: "5% 5%", width: "90%", height: "200px"}}>
            <Card.Body style={{display: "flex", flexDirection: "row", margin: "0", padding: "0", overflow: "hidden"}}>
                <img variant="left" src={EHPlaceHolder} style={{height: "100vh", width: "200px", objectFit: "cover"}}/>
                <div className='study-space-info'>
                    <div style={{padding: "10px 10px 10px 0px"}}>
                        <Card.Title className='space-title'>Engineering Hall</Card.Title>
                        <Card.Text className='space-description'>
                        UCI Engineering Hall stands out for its well-designed and dynamic study spaces that cater specifically to the academic needs of engineering students.
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
