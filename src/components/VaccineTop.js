import React from 'react'
import VaccineTopLeft from './vaccinetop/VaccineTopLeft'
import VaccineTopRight from './vaccinetop/VaccineTopRight'
import '../components/VaccineTop.css'

function Vaccinetop() {
    return (
        <div className="vaccinetop">
           <VaccineTopLeft /> 
           <div id="gap" />
           <VaccineTopRight />
        </div>
    )
}

export default Vaccinetop
