//import { useState } from 'react'
import { Card, Button} from 'react-bootstrap'
import DBHPlaceholder from '../assets/DBHPlaceholder.png'
import "./HeroCards.css"
import StudyProgressBar from './ProgressBar'
import "./studyzot.types.ts"

export function HeroCard(props: {spaceInfo : StudySpaceInfo})
{
    return (
        <Card style={{width: "90%", height:"25rem", margin: "0% 5% 5% 5%", overflow: "hidden"}}>
            <img src={DBHPlaceholder} style={{width: "100%", height: "10rem", objectFit: "cover"}}/>
            <Card.Body style={{display: "flex", flexDirection: "row", margin: "0px 5px 15px 0px"}}>
                <div className='study-space-info'>
                    <div>
                        <div className='title'>
                            <Card.Title className='hero-title'>Donald Bren Hall</Card.Title>
                            <Card.Title style ={{fontWeight:"bold", fontSize: "44px"}}>{name}</Card.Title>
                            <div className='distance-info'>
                                <Card.Text style={{marginBottom: "0"}}>0.0 mi</Card.Text>
                                <Card.Text>0 min</Card.Text>
                            </div>
                        </div>
                        <Card.Text className='hero-description'>
                            Donald Bren Hall is renowned for its thoughtfully designed and versatile study spaces,
                            providing an ideal environment for academic pursuits. The hall boasts a variety of study
                            areas that cater to different preferences and learning styles.
                        </Card.Text>
                    </div>
                    <div className='bottom'>
                        <StudyProgressBar capacity={20}/>
                        <div style={{display: "flex", alignItems: "center", width: "35%", justifyContent: "end", columnGap: "10px"}}>
                            <div className='ratings'>
                                <Card.Text style={{color: "limegreen", fontWeight: "bold", marginBottom: "0", fontSize: "18px"}}>+67</Card.Text>
                                <Button style={{padding: "0px 5px"}} variant='success'>+</Button>
                                <Button style={{padding: "0px 7px"}} variant='danger'>-</Button>
                            </div>
                            <Button>
                                Directions
                            </Button>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )

}
