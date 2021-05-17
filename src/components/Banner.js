import React from 'react'
import image from '../pics/largest-vaccine-banner.jpg'
import "../pages/Vaccine.css";
import Image from 'react-bootstrap/Image'

function Banner() {
    return (
        <div id="banner">

            <div className="page-banner">
            <Image src={image} fluid />

            </div>
        </div>
    )
}

export default Banner
