import React from 'react'
import VaccineTopLeft from './vaccinetop/VaccineTopLeft'
import VaccineTopRight from './vaccinetop/VaccineTopRight'
import '../components/VaccineTop.css'

function Vaccinetop() {
    return (
        <div className="vaccinetop row">
        <div className='col-md'>
           <VaccineTopLeft /> </div>
           <div className='col-md'>
           <VaccineTopRight /> </div>
        </div>
    )
}

export default Vaccinetop
