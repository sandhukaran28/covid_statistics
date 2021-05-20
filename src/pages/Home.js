import React from 'react'
import Aditya from '../Aditya'
import Table from '../components/MainTable'
import './Home.css'
import MainCarousel from '../components/Carousel'
import Header from '../components/Header'
import {Link} from 'react-router-dom'
import * as BiIcons from "react-icons/bi"
import * as AiIcons from "react-icons/ai"
import Drawer from '../components/MiniDrawer'
import Swing from 'react-reveal/Swing';
import RubberBand from 'react-reveal/RubberBand';
function Home() {
    return (
        <div id="Homeback" className="container-fluid" >
          <div id="nav">
         <Drawer/>
         </div>
        <Header/>
        <div className="mainContent">
        <Swing>
        <div className="statHeadDiv">
    <h1 id="statsHead">Statistics (INDIA)</h1>
    </div>
    </Swing>
        <div>
           <Aditya className="container1"/>
           </div>
           <Link to="./Resources" className="menu-bars"  style={{ textDecoration: 'none' }}>
               <div className="linkRes">
                   <span id="linkResSpan"><BiIcons.BiHeart/>     Crowdsourced Resources</span>
               </div>
           </Link>
           <div className="vacDiv">
               <span className="vacDiv_span"><BiIcons.BiCheckShield/>18,98,20,164 vaccine doses administered</span>
           </div>
           <div>
           <Table/>
           </div>
           <RubberBand>
           <div id="slogan">
           <h2>WE'RE IN THIS TOGETHER  <BiIcons.BiHeart/>  </h2>
           </div>
           </RubberBand>
            <div id="carousel" className="d-md-none d-sm-none d-lg-none d-xl-block">
        <MainCarousel/>
        </div> 
        </div>
        <div className="outer_footer"> 
        <div className="home_footer">
            <h3 className="footer_head">COVID  STATS</h3>
            <h5 className="footer_body">We stand with everyone fighting on the frontlines</h5>
           <a target="blank" href="https://github.com/sandhukaran28/covid_statistics" ><h2 className="github"> <AiIcons.AiFillGithub/> </h2>
           </a>  </div>
          
        </div>
        </div>
    )
}

export default Home
