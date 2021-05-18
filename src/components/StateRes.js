import React from 'react'
import './StateRes.css'
function StateRes(props) {
    return (
        <div id="StateboxCom">
            <a style={{textDecoration:"none"}} href={props.resLink} target="blank">
                <div id="StatetitleCom">{props.title}</div>
                <div className="container-fluid p-0" id="StatelinkCom">{props.link}</div>
            </a>
        </div>
    )
}

export default StateRes
