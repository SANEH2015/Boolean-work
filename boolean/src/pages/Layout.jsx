import React from 'react'
import { Outlet,  } from "react-router-dom";
import Navigation from '../component/navigation';
import Footer from '../component/footer';

export default function Layout() {
  return (
    <div>
      <>
      <Navigation/>
      
     <Footer/>
      <Outlet />
    </> 
    </div>
  )
}
