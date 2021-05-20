
import React from "react";
import "./Vaccine.css";
import Vaccinetop from "../components/VaccineTop.js";
import VaccinationCell from "../components/VaccinationCell";
import '../pages/Vaccine.css'
import './Home.css'
import VaccineBottom from "../components/VaccineBottom";
import VaccineTable from "../components/VaccineTable";
import Drawer from '../components/MiniDrawer'
import * as AiIcons from "react-icons/ai"
function Vaccine() {
  return (
    <div id="Vacback">
      <div id="nav">
        <Drawer/>
      </div>
      <Vaccinetop />
      <div id="main">
           <VaccinationCell className="container1"/>
           </div>
      <VaccineTable />
      <VaccineBottom />
      <div className="outer_footer"> 
      <div className="home_footer">
            <h3 className="footer_head">COVID  STATS</h3>
            <h5 className="footer_body">We stand with everyone fighting on the frontlines</h5>
           <a target="blank" href="https://github.com/sandhukaran28/covid_statistics" ><h2 className="github"> <AiIcons.AiFillGithub/> </h2>
           </a>  </div>
           </div>
    </div>
  );

}

export default Vaccine;
