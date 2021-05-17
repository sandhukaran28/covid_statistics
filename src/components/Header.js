import React from 'react'
import svg1 from '../pics/svg1.svg'
import {Image} from 'react-bootstrap'
import './Header.css'
function Header() {
    return (
        <div className="row" id="headerDiv">
            <div className="col mt-5 p-5">
             <h1 id="covid" >COVID-19</h1>
             <p className="text-white">Coronavirus disease 2019 (COVID-19), also known as the coronavirus, or COVID,
              is a contagious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). 
              The first known case was identified in Wuhan, China, in December 2019.
              The disease has since spread worldwide, leading to an ongoing pandemic.</p>
            </div>
            <div className="col">
           <Image className="w-75" src={svg1} />
            </div>
        </div>
    )
}

export default Header
