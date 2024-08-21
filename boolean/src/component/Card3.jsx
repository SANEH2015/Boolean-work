import React from 'react'

export default function Card3() {
  return (
    <>
    <div className="w3-card-4" style={{width:"30%",margin:'10px',}}>
 <header className="w3-container w3-blue">
   <h1>What day of the week is this number? </h1>
 </header>

 <div className="w3-container">
   <form>
     Number:<input style={{margin:"10px",height:"30px",borderRadius:"5px",borderColor:"blue"}} type='text'/><br></br>
    
     <button style={{margin:"10px",height:"30px",borderRadius:"5px",borderColor:"blue",marginLeft:"100px"}}>Check</button>
   </form>
 </div>

 <footer className="w3-container w3-gray" style={{marginTop:"50px"}}>
   <h5>output:The odd number is</h5>
 </footer>
</div>
 </>
  )
}
