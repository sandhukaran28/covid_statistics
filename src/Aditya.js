import React, { Component,useState } from 'react'
import MainCell from './components/MainCell'
import './App.css';
import './Stats.css'
import Jump from 'react-reveal/Jump';
import Axios from 'axios'
 
 function Aditya() {
    const[conf,changeConf]=useState('0');
    const[active,changeActive]=useState('32,39,799');
    const[recovered,changereovered]=useState('0');
    const[deceased,changedeceased]=useState('0');
    const[inconf,inchangeConf]=useState('0');
    const[inactive,inchangeActive]=useState('2,36,045');
    const[inrecovered,inchangereovered]=useState('0');
    const[indeceased,inchangedeceased]=useState('0');
    const apiCall =()=>{
        Axios.get("https://api.covid19india.org/v4/min/data.min.json").then((response)=>{
            changeConf(response.data.TT.total.confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            changedeceased(response.data.TT.total.deceased.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            changereovered(response.data.TT.total.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            changeActive((response.data.TT.total.confirmed-response.data.TT.total.deceased-response.data.TT.total.recovered).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            inchangeConf(response.data.TT.delta.confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            inchangedeceased(response.data.TT.delta.deceased.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            inchangereovered(response.data.TT.delta.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        })
    }
        apiCall();
        return (
        <div className="row">
        <Jump>
        <div className="col-sm StatDiv">
           <MainCell name="Confirmed" ins={inconf} total={conf} color="rgb(248,7,58)"/>
           </div>
           </Jump>
           <Jump>
           <div className="col-sm StatDiv">
           <MainCell name="Active" ins={inactive} total={active} color="rgb(0,122,253)"/>
           </div>
           </Jump>
           <Jump>
           <div className="col-sm StatDiv">
           <MainCell name="Recovered" ins={inrecovered} total={recovered} color="rgb(39,161,68)"/>
           </div>
           </Jump>
           <Jump>
           <div className="col-sm StatDiv">
           <MainCell name="Deceased" ins={indeceased} total={deceased} color="rgb(108,117,125)"/>
           </div>
           </Jump>
    </div>
        )
    
}

export default Aditya
