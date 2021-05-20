import React from 'react'
import VaccineTopLeft from './vaccinetop/VaccineTopLeft'
import VaccineTopRight from './vaccinetop/VaccineTopRight'
import '../components/VaccineTop.css'
import Fade from 'react-reveal/Fade';

function Vaccinetop() {
    return (
        <div className="vaccinetop row">
        <div className='col-md'>
           <Fade left>
           <VaccineTopLeft /> </Fade> 
           </div>
           <Fade right>
           <div className='col-md'>
           <VaccineTopRight /> </div>
           </Fade>
        </div>
        
    )
}

export default Vaccinetop
