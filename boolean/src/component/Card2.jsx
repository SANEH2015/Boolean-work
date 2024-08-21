import React from 'react'

export default function Card2() {
  return (
    <>
    <div className="w3-card-4" style={{width:"30%",margin:'10px',}}>
 <header className="w3-container w3-blue">
   <h1>Is this number odd or even </h1>
 </header>

 <div className="w3-container">
   <form>
     Number:<input style={{margin:"10px",height:"30px",borderRadius:"5px",borderColor:"blue"}} type='text'/><br></br>
    
     <button style={{margin:"10px",height:"30px",borderRadius:"5px",borderColor:"blue",marginLeft:"100px"}}>Check</button>
   </form>
 </div>

 <footer className="w3-container w3-gray" style={{marginTop:"50px"}}>
   <h5>output:The biggest number is</h5>
 </footer>
</div>
 </>
  )
}
