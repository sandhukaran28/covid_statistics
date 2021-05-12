import React from 'react'
import Aditya from '../Aditya'
import Table from '../components/MainTable'
import './Home.css'
import MainCarousel from '../components/Carousel'
import Navbar from '../components/Navbar'
function Home() {
    return (
        <div id="back" >
        <div id="nav">
        <Navbar/>
        </div> 
        <div id="carousel">
        <MainCarousel/>
        </div>
        <div id="mainDiv">
           <Aditya className="container1"/>
           </div>
           <div id="mainDiv">
           <Table/>
           </div>
        </div>
    )
}

export default Home
