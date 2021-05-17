import React from 'react'
import './StateRes.css'
function StateRes(props) {
    return (
        <div id="Statebox">
            <a style={{textDecoration:"none"}} href={props.resLink} target="blank">
                <div id="Statetitle">{props.title}</div>
                <div className="container-fluid" id="Statelink">{props.link}</div>
            </a>
        </div>
    )
}

export default StateRes
