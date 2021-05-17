import React, { Component } from 'react'
import MainCell from './components/MainCell'
import './App.css';
import './Stats.css'
import Jump from 'react-reveal/Jump';
 class Aditya extends Component {
    render() {
        return (
        <div className="row">
        <Jump>
        <div className="col-sm StatDiv">
           <MainCell name="Confirmed" ins="+5632" total="5624" color="rgb(248,7,58)"/>
           </div>
           </Jump>
           <Jump>
           <div className="col-sm StatDiv">
           <MainCell name="Active" ins="+5632" total="5624" color="rgb(0,122,253)"/>
           </div>
           </Jump>
           <Jump>
           <div className="col-sm StatDiv">
           <MainCell name="Recovered" ins="+5632" total="5624" color="rgb(39,161,68)"/>
           </div>
           </Jump>
           <Jump>
           <div className="col-sm StatDiv">
           <MainCell name="Deceased" ins="+5632" total="5624" color="rgb(108,117,125)"/>
           </div>
           </Jump>
    </div>
        )
    }
}

export default Aditya
