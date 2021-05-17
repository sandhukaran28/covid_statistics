import React from 'react'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import pic1 from '../pics/pic1.jpg'
import pic2 from '../pics/pic2.jpg'
import pic3 from '../pics/pic3.jpg'
import pic4 from '../pics/pic4.jpg'
import './Carousel.css'
function MainCarousel() {
    return (
      <div className="carDiv">
      <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          style={{height:"500px"}}
          src={pic1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          style={{height:"500px"}}
          src={pic2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          style={{height:"500px"}}
          src={pic3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          style={{height:"500px"}}
          src={pic4}
          alt="Fouth slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    )
}

export default MainCarousel
