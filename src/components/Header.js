import React from 'react'
import svg1 from '../pics/svg1.svg'
import {Image} from 'react-bootstrap'
import './Header.css'
import Fade from 'react-reveal/Fade';
import Video from './videos/main.gif'
function Header() {
    return (
        <div className="row" id="headerDiv">
              <Fade left>
            <div className="col-md mt-5 p-5">
             <h1 id="covid" >COVID-19</h1>
             <p className="text-white">Coronavirus disease 2019 (COVID-19), also known as the coronavirus, or COVID,
              is a contagious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). 
              The first known case was identified in Wuhan, China, in December 2019.
              The disease has since spread worldwide, leading to an ongoing pandemic.</p>
            </div>
            </Fade>
            <Fade right>
            <div className="col-md">
            <Image fluid src={Video} />  
            </div>
            </Fade>
        </div>
    )
}

export default Header
