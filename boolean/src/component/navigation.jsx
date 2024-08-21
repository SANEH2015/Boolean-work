import React from 'react'
import {  Link } from "react-router-dom";
export default function Navigation() {
  return (
    <div >
      <div className="w3-bar w3-blue">
      <Link className="w3-bar-item w3-button" to="/">Home</Link>
      <Link className="w3-bar-item w3-button" to="/TrafficLight">TrafficLight</Link>
      <Link className="w3-bar-item w3-button" to="/Exercise">Exercise</Link>
      <Link className="w3-bar-item w3-button" to="/Nopage">Nopage</Link>
 
</div>
    </div>
  )
}
