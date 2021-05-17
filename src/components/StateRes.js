import React from 'react'
import './StateRes.css'
function StateRes(props) {
    return (
        <div id="box">
            <a style={{textDecoration:"none"}} href={props.resLink} target="blank">
                <div id="title">{props.title}</div>
                <div id="link">{props.link}</div>
            </a>
        </div>
    )
}

export default StateRes
