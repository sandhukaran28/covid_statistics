import React from "react";
import { Bold } from "react-feather";
import "../VaccineTop.css";

function VaccineTopLeft() {
  return (
    <div className="VaccineTopLeft">
      <h1 style={{ color: "rgb(155,120,222)", fontWeight: "bold" }}>
        Vaccination
      </h1>
      <p style={{ color: "white", paddingTop: "15px", paddingBottom: "15px" }}>
        Vaccination is the administration of a vaccine to help the immune <br />{" "}
        system develop protection from a disease.
      </p>
      <div id="vaccinebutton">
        <li class="nav-item">
          <a
            href="https://selfregistration.cowin.gov.in/"
            target="_blank"
            class="yellowbtn"
          >
            Get Vaccinated
          </a>
        </li>
      </div>
    </div>
  );
}

export default VaccineTopLeft;
