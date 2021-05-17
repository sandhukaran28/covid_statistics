import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";

export const SidebarData=[
    {
        title:" Home",
        path:'/',
      icons: <AiIcons.AiFillHome/>,
      cName:'nav-text'
    },
    {
        title:" Vaccine",
        path:'/vaccine',
      icons: <FaIcons.FaSyringe/>,
      cName:'nav-text'
    },
    {
        title:" Resources",
        path:'/resources',
      icons: <BiIcons.BiPhone/>,
      cName:'nav-text'
    }
    ]
