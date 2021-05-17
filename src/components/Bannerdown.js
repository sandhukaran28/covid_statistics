import React from "react";
import Image from 'react-bootstrap/Image'
import image from '../pics/BannerDown.png'
import "../pages/Vaccine.css";
function Bannerdown() {
  return (
    <div>
      <div id="banner">
        <div className="page-banner">
          <Image src={image} fluid />
        </div>
      </div>
    </div>
  );
}

export default Bannerdown;
