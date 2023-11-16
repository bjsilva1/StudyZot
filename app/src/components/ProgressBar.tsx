import { ProgressBar } from 'react-bootstrap'

export default function StudyProgressBar(props: {capacity: number})
{
    let barColor = "";
    if (props.capacity < 35)
        barColor = "LOW_OCCUPANCY"
    else if (props.capacity < 75)
        barColor = "MED_OCCUPANCY"
    else
        barColor = "HI_OCCUPANCY"

    return (
        <>
            <ProgressBar now={props.capacity} variant={barColor} style={{height: "20px", width: "50%", borderRadius: "20px"}}/>
        </>
    )
}