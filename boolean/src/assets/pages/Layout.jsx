import React from 'react'
import { Outlet,  } from "react-router-dom";
import Navigation from '../component/navigation';
import Fotter from '../component/fotter';

export default function Layout() {
  return (
    <div>
      <>
      <Navigation/>
      
     <Fotter/>
      <Outlet />
    </> 
    </div>
  )
}
