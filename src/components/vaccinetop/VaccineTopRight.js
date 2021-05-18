import React from 'react'
import Video from '../videos/Vaccine.gif'
import {Image} from 'react-bootstrap'
function VaccineTopRight() {
    return (
        <div style={{paddingLeft:"5%"}}>
            <Image  src={Video} />  
        </div>
    )
}

export default VaccineTopRight
