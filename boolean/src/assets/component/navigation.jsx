import React from 'react'
import {  Link } from "react-router-dom";
export default function Navigation() {
  return (
    <div >
      <div class="w3-bar w3-blue">
      <Link class="w3-bar-item w3-button" to="/">Home</Link>
      <Link class="w3-bar-item w3-button" to="/TrafficLight">TrafficLight</Link>
      <Link class="w3-bar-item w3-button" to="/Exercise">Exercise</Link>
      <Link class="w3-bar-item w3-button" to="/Nopage">Nopage</Link>
 
</div>
    </div>
  )
}
