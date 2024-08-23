import React from 'react'
import {  Link } from "react-router-dom";
export default function Navigation() {
  return (
    <div >
      <div className="w3-bar " style={{backgroundColor:"rgb(86, 182, 201)",color:"white"}}>
      <Link className="w3-bar-item w3-button" to="/">Home</Link>
      <Link className="w3-bar-item w3-button" to="/TrafficLight">TrafficLight</Link>
      <Link className="w3-bar-item w3-button" to="/Exercise">Exercise</Link>
      <Link className="w3-bar-item w3-button" to="/Contact">Contact</Link>
      <Link className="w3-bar-item w3-button" to="/Movies">Movies</Link>
     
      
 
</div>
    </div>
  )
}
