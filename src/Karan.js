import React from 'react'
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from "./pages/Home"
import Vaccine from './pages/Vaccine'
import Resources from './pages/Resources'
import ScrollToTop from './components/ScrollToTop'
function Karan() {
    return (
        <div>
    <Router>
  <Switch>
    <Route path='/' exact component={Home} />   
    <Route path='/vaccine' component={Vaccine} />
    <Route path='/resources'  component={Resources} />
     </Switch>
     <ScrollToTop/>
   </Router>
        </div>
    )
}

export default Karan
