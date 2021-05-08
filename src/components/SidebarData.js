import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData=[
    {
        title:"Home",
        path:'/',
      icons: <AiIcons.AiFillHome/>,
      cName:'nav-text'
    },
    {
        title:"Vaccine",
        path:'/vaccine',
      icons: <IoIcons.IoIosPaper/>,
      cName:'nav-text'
    },
    {
        title:"Resources",
        path:'/resources',
      icons: <FaIcons.FaCartPlus/>,
      cName:'nav-text'
    },
    {
        title:"Team",
        path:'/team',
      icons: <IoIcons.IoMdPeople/>,
      cName:'nav-text'
    }
    ]
