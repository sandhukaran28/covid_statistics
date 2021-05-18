import React from 'react'
import './Maincell.css';

  function MainCell(props){


    
        return (
            <div id="maincell" >
                   <h2 id="heading" style={{color: props.color}}>{props.name}</h2>
                   <h2 id="middle" style={{color: props.color}}>{props.ins}</h2>
                   <h2 id="end" style={{color: props.color}}>{props.total}</h2> 
               </div> 
           
        )
}

export default MainCell


