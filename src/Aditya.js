import React, { Component } from 'react'
import MainCell from './components/MainCell'
import './App.css';
import './Stats.css'
 class Aditya extends Component {
    render() {
        return (
        <div className="StatDiv">
           <MainCell name="Confirmed" ins="+5632" total="5624" color="rgb(248,7,58)"/>
           <MainCell name="Active" ins="+5632" total="5624" color="rgb(0,122,253)"/>
           <MainCell name="Recovered" ins="+5632" total="5624" color="rgb(39,161,68)"/>
           <MainCell name="Deceased" ins="+5632" total="5624" color="rgb(108,117,125)"/>
    </div>
        )
    }
}

export default Aditya
