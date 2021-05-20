import React from 'react'
import image1 from '../pics/s1.svg'
import image2 from '../pics/s2.svg'
import image3 from '../pics/s3.svg'
import '../components/VaccineBottom.css'
import Buttons from "./Buttons";
import Roll from 'react-reveal/Roll';
import Bounce from 'react-reveal/Bounce';

function VaccineBottom() {
    return (
        <div >
        <h2 style={{justifyContent:"center",textAlign:'center',paddingBottom:"50px"}} className="vaccineheading">How It Works</h2>
        <div className="row" id="VaccineBottom" style={{paddingLeft:"10%",paddingRight:"10%",textAlign:"center",paddingTop:"2%"}}>
           <div className="col-md" id="vaccinebox">
           <Roll left>
           <img style={{justifyContent: 'center'}} width="200px" src={image1}></img></Roll>
           <h4 className="vaccineheading">REGISTER YOURSELF</h4>
           <p className="sectext">Register using your Mobile<br />no. or Aadhaar no. or any<br />other Identity docs.</p>
           </div> 

           <div className="col-md" id="vaccinebox">
           <Roll bottom>
           <img style={{justifyContent: 'center'}} width="200px" src ={image2}/></Roll>
           <h4 className="vaccineheading">CHOOSE VACCINE LOCATION</h4>
           <p className="sectext">Select your nearby Vaccine<br />Center for vaccination</p>
           </div> 
           <div  className="col-md" id="vaccinebox">
           <Roll right>
           <img width="200px" src ={image3}/></Roll>
           <h4 className="vaccineheading">CONFIRM YOUR SLOT</h4>
           <p className="sectext">Book your slot to Get<br />Vaccine</p>
           </div> 
           </div>
           <Bounce clear>
           <Buttons  /></Bounce>
        </div>
    )
}

export default VaccineBottom
