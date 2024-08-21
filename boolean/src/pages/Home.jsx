import React from 'react'
import Image from '../assets/avator-removebg-preview.png'

export default function Home() {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"200px"}}>
      <div>
      <p>-FREE 30 DAYS TRIAL</p>
      <h1 style={{fontSize:"80px",fontWeight:"bold"}}>The best way<br></br>to showase<br></br>your project</h1>
      <p>Here you can put a short description about your project</p>
      <button style={{backgroundColor:"rgb(4, 52, 80)"}}>Try for free</button>
      <button>See how it works</button>
      </div>
      
      <div>
 <img src={Image}></img>
      </div>

    </div>
  )
}
