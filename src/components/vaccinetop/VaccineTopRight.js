import React from 'react'
import Video from '../videos/Vaccine.gif'
import {Image} from 'react-bootstrap'
function VaccineTopRight() {
    return (
        <div>
            <Image className="animated" src={Video} />  
        </div>
    )
}

export default VaccineTopRight
