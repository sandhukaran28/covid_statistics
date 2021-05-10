import React from 'react'
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from "./pages/Home"
import Vaccine from './pages/Vaccine'
import Resources from './pages/Resources'
import Team from './pages/Team'

function Karan() {
    return (
        <div>
    <Router>
<Navbar
        /> 
  <Switch>
    <Route path='/' exact component={Home} />   
    <Route path='/vaccine' component={Vaccine} />
    <Route path='/resources'  component={Resources} />
    <Route path='/team'  component={Team} />
     </Switch>
</Router>
        </div>
    )
}

export default Karan
