import { useState } from 'react'
import { Card, Button, ProgressBar } from 'react-bootstrap'
import DBHPlaceholder from '../assets/DBHPlaceholder.png'
import "./HeroCards.css"
import StudyProgressBar from './ProgressBar'

export function HeroCard(props: {spaceInfo : Object})
{
    return (
        <Card style={{width: "800px", height:"450px", margin: "5% 5%", overflow: "hidden"}}>
            <img src={DBHPlaceholder} style={{width: "100%", height: "200px", objectFit: "cover"}}/>
            <Card.Body style={{display: "flex", flexDirection: "row", margin: "0px 5px 15px 0px"}}>
                <div className='study-space-info'>
                    <div>
                        <div className='title'>
                            <Card.Title style ={{fontWeight:"bold", fontSize: "44px"}}>Donald Bren Hall</Card.Title>
                            <div className='distance-info'>
                                <Card.Text style={{marginBottom: "0"}}>0.0 mi</Card.Text>
                                <Card.Text>0 min</Card.Text>
                            </div>
                        </div>
                        <Card.Text>
                            Donald Bren Hall is renowned for its thoughtfully designed and versatile study spaces,<br></br>
                            providing an ideal environment for academic pursuits. The hall boasts a variety of study<br></br>
                            areas that cater to different preferences and learning styles.
                        </Card.Text>
                    </div>
                    <div className='bottom'>
                        <StudyProgressBar capacity={20}/>
                        <div style={{display: "flex", alignItems: "center", width: "30%", justifyContent: "space-between"}}>
                            <Card.Text style={{color: "limegreen", fontWeight: "bold", marginBottom: "0", fontSize: "18px"}}>+67</Card.Text>
                            <Button style={{padding: "0px 5px"}} variant='success'>+</Button>
                            <Button style={{padding: "0px 7px"}} variant='danger'>-</Button>
                            <Button>
                                Get Directions
                            </Button>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )

}
