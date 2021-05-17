import React from 'react'
import Navbar from '../components/Navbar'
import './Resources.css'
import StateRes from '../components/StateRes'
import resources from '../data/StateData'
import svg2 from '../pics/svg2.svg'
import {Image} from 'react-bootstrap'
import Drawer from '../components/MiniDrawer'
import Tada from 'react-reveal/Tada';
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
function Resources() {
    return (
        <div className="resources" id="back">
        <div className="navDiv">
             <Drawer/>
             </div>
             <div  className="ResInner">
             <div className="Resmain">
             <Tada>   
                     <h1 id="Reshead">Resources</h1>
                     </Tada>
          <div  id="info" >
          <Pulse>
          <p>
          The objective of this page is to help people gain access to vital resources by sharing information only. However, we request the beneficiaries to use their discretion and verify the leads on their own before taking any action. If you find inaccurate information or any lead engaging in illegal practices, kindly inform us at hello@covid19india.org. We will take it down as soon as possible. We will not be responsible for the actions you take using the information on this page. We are just mediating information and are no way responsible for what is being shared.
           Please avoid sharing and contacting black market resources.
            We strongly encourage to AVOID black market.
          </p>
          </Pulse>
          </div>
          
 
          <div id="downDiv"   className="row">
          <Fade left>
          <div className="col" id="stateRes">
          {resources
          .filter((resource) => resource.shoulddisplay === 'Yes')
          .map((resource, index) => (
            <StateRes
              key={index}
              resLink={resource.link}
              className="resource"
              title={resource.description || 'Independent Aggregator'}
              link={resource.link}
            />
          ))}
          </div>
          </Fade>
          <Fade right>
          <div className="col">
          <Image id="svgRes" className="w-80" src={svg2} />
          </div>
          </Fade>
            </div>
            
            </div>
            </div>
        </div>
    )
}

export default Resources
