import React from "react";
import "../components/Buttons.css"

function Buttons() {
  return (
    <div className="buttons">
      <div className="manual-link">
        <a
          href="https://prod-cdn.preprod.co-vin.in/assets/pdf/User_Guide_Citizen%20registration_18+.pdf"
          download=""
          target="_blank"
          class="user-manual-link"
        >
          Know how to book your appointment{" "}
        </a>
      </div>
      <div className="gap"/>
      <div  className="manual-link cm-dos-link">
        <a
          href="https://prod-cdn.preprod.co-vin.in/assets/pdf/Dos_and_Donts_for_Citizens.pdf"
          download=""
          target="_blank"
          class="user-manual-link"
        >
          Dos and Don'ts{" "}
        </a>
      </div>
    </div>
  );
}

export default Buttons;
