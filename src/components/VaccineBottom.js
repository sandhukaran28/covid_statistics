import React from 'react'
import image1 from '../pics/s1.svg'
import image2 from '../pics/s2.svg'
import image3 from '../pics/s3.svg'
import '../components/VaccineBottom.css'
import Buttons from "./Buttons";

function VaccineBottom() {
    return (
        <div >
        <h2 style={{justifyContent:"center",textAlign:'center',paddingBottom:"50px"}} className="vaccineheading">How It Works</h2>
        <div className="VaccineBottom">
           <div className="vaccinebox">
           <img style={{justifyContent: 'center'}} width="200px" src={image1}></img>
           <h4 className="vaccineheading">REGISTER YOURSELF</h4>
           <p className="sectext">Register using your Mobile<br />no. or Aadhaar no. or any<br />other Identity docs.</p>
           </div> 


           <div className="box" />


           <div className="vaccinebox">
           <img style={{justifyContent: 'center'}} width="200px" src ={image2}/>
           <h4 className="vaccineheading">CHOOSE VACCINE LOCATION</h4>
           <p className="sectext">Select your nearby Vaccine<br />Center for vaccination</p>
           </div> 

           <div className="box" />

           <div className="vaccinebox">
           <img width="200px" src ={image3}/>
           <h4 className="vaccineheading">CONFIRM YOUR SLOT</h4>
           <p className="sectext">Book your slot to Get<br />Vaccine</p>
           </div> 
           </div>
           <Buttons />
        </div>
    )
}

export default VaccineBottom
