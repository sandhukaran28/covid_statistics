import React from 'react'
import Navbar from '../components/Navbar'
import './Resources.css'
import StateRes from '../components/StateRes'
import resources from '../data/StateData'
function Resources() {
    return (
        <div className="resources" id="back">
             <Navbar/>
             <div className="main">
            <h1 id="head">Resources</h1>
          <div  id="info" >
          <p>
          The objective of this page is to help people gain access to vital resources by sharing information only. However, we request the beneficiaries to use their discretion and verify the leads on their own before taking any action. If you find inaccurate information or any lead engaging in illegal practices, kindly inform us at hello@covid19india.org. We will take it down as soon as possible. We will not be responsible for the actions you take using the information on this page. We are just mediating information and are no way responsible for what is being shared.
           Please avoid sharing and contacting black market resources.
            We strongly encourage to AVOID black market.
          </p>
          </div>
          <div id="stateRes">
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
            </div>
        </div>
    )
}

export default Resources
