import React,{useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from 'react-router-dom'
import {SidebarData} from './SidebarData'
import './Navbar.css'
import {IconContext} from 'react-icons'
function Navbar() {
    const[sidebar,setSidebar]=useState(false);
    const showSidebar=()=>setSidebar(!sidebar)
    return (
        <>
       
        <div id="outerDiv">
            <div className="navbar" id="mainNav">
            <IconContext.Provider value={{color:'#fff'}}>
                <Link to="#" className="menu-bars">
              <FaIcons.FaBars className="hamburgur" onClick={showSidebar}/>
                </Link>
                 </IconContext.Provider>
            </div>
            </div>
            <nav className={sidebar ? 'nav-menu active':
            'nav-menu'}>
                 <ul className="nav-menu-items" onClick={showSidebar}>
                 <li className="navbar-toggle">
                 <IconContext.Provider value={{color:'#fff'}}>
                     <Link to="#" className="menu-bars">
                         <AiIcons.AiOutlineClose/>
                     </Link>
                     </IconContext.Provider>
                 </li>  
                 {SidebarData.map((item,index)=>{
                     return (
                         <li key={index} className={item.cName}>
                         <Link to={item.path}>
                           {item.icons} &nbsp;
                             <span style={{marginLeft:"10px"}}>
                             {item.title}
                             </span>
                         </Link>
                         </li>
                     )
                 })}
                 </ul>
            </nav>
            
        </>
    )
}

export default Navbar
