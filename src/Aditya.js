import React, { Component } from 'react'
import MainCell from './components/MainCell'
import './App.css';

 class Aditya extends Component {
    render() {
        return (
        <div>
           <MainCell name="Confirmed" ins="5632" total="5624" color="red"/>
           <MainCell name="Active" ins="5632" total="5624" color="blue"/>
           <MainCell name="Recovered" ins="5632" total="5624" color="green"/>
           <MainCell name="Deceased" ins="5632" total="5624" color="grey"/>
    </div>
        )
    }
}

export default Aditya
