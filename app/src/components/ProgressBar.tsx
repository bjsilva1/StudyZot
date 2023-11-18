import { useState, useEffect } from 'react'
import { ProgressBar } from 'react-bootstrap'
<<<<<<< HEAD
import "./ProgressBar.css"
=======
import './ProgressBar.css'
>>>>>>> c8787b5012e32d2ebc2752ba6161109c79239330

type OccuspaceData = {
    data: {
        percentage: number
    }
}

export default function StudyProgressBar(props: {occuspaceId: number})
{
    const [occuspaceData, setOccuspaceData] = useState<OccuspaceData | null>(null);

    const [capacity, setCapacity] = useState<number>(-1)
    const [barColor, setBarColor] = useState<string>("")

    useEffect(() => {
        if (props.occuspaceId != -1)
        {
            fetch('https://www.lib.uci.edu/sites/all/scripts/occuspace.php?id=' + props.occuspaceId)
            .then(response => response.json())
            .then(json => setOccuspaceData(JSON.parse(json)))
        }
    }, [])

    useEffect(() => {
        if (occuspaceData)
        {
            setCapacity(occuspaceData.data.percentage * 100)

            if (capacity < 35)
                setBarColor("LOW_OCCUPANCY")
            else if (capacity < 75)
                setBarColor("MED_OCCUPANCY")
            else
                setBarColor("HI_OCCUPANCY")
        }
        
    } )
    
        

    return (
        <>
            { props.occuspaceId != -1 ?
                <ProgressBar now={capacity + 2} variant={barColor} style={{height: "20px", width: "50%", borderRadius: "20px"}}/> 
                :
                <div style={{height: "20px", width: "50%"}}/>
            }
        </>
    )
}