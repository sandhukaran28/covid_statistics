import React from 'react'
import Aditya from '../Aditya'
import Table from '../components/MainTable'
import './Home.css'
function Home() {
    return (
        <div >
        <div id="mainDiv">
           <Aditya className="container1"/>
           </div>
           <div id="mainDiv">
           <Table/>
           </div>
        </div>
    )
}

export default Home
