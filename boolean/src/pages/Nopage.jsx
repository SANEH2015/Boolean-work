import React from 'react'


export default function Nopage() {
  return (
    <div style={{ display:'flex',
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column"}}>
      <h1>nopages</h1>
      <img style={{
        width:'300px',
        height:"300px",
       
      }} src={require("../assets/shutterstock_479042983.jpg")} alt='404notfound'/>
    </div>
  )
}
