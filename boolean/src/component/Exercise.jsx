import React from 'react'
import Card from './Card'
import Card2 from './Card2'


export default function Exercise() {
  return (
    <>
      <div
    style={{
      backgroundImage: `url(${require("../assets/5.jpeg")})`,
      width:"100%",
    height:"500px",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      alignContent:"center",
      justifyContent:"center",
      display:"flex",
    
    }}>
      <h1 style={{
        color:"white"
      }}>Exercises</h1>

    </div>
    <div style={{display:"flex"}}>
    <Card/>
    <Card2/>

    </div>
   
    </>
  
  )
}
