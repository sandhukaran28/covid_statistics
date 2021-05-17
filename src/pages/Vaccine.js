import React from "react";
import Aditya from "../Aditya";
import Table from "../components/MainTable";
import "./Vaccine.css";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Bannerdown from "../components/Bannerdown";
import Buttons from "../components/Buttons";
import Vaccinetop from "../components/VaccineTop.js";
import VaccinationCell from "../components/VaccinationCell";
import '../pages/Vaccine.css'
import VaccineBottom from "../components/VaccineBottom";
import VaccineTable from "../components/VaccineTable";

function Vaccine() {
  return (
    <div id="back">
      <div id="nav">
        <Navbar />
      </div>
      <Vaccinetop />
      <div id="main">
           <VaccinationCell className="container1"/>
           </div>
      <VaccineTable />
      <VaccineBottom />
      {/* <div id="vaccinebutton">
        <li _ngcontent-gys-c25="" class="nav-item">
          <a
            _ngcontent-gys-c25=""
            href="https://selfregistration.cowin.gov.in/"
            target="_blank"
            class="yellowbtn"
          >
            Get Vaccinated
          </a>
        </li>
      </div>
      <div>
      
      </div>

      <div id="banner">
        <Banner />
      </div>


      <div id="banner">
        <Bannerdown />
      </div>
      <Buttons/> */}
    </div>
  );
}

export default Vaccine;
