import React, { Component } from 'react'
import './Maincell.css';

  function MainCell(props){
    
        return (
            <div id="maincell">
            <div>
               <div id="confirmed">
                   <h4 style={{color: props.color}}>{props.name}</h4>
                   <h5 style={{color: props.color}}>{props.ins}</h5>
                   <h2 style={{color: props.color}}>{props.total}</h2>
               </div> 
               </div>
            </div>
        )
}

export default MainCell


