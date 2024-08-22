import React from 'react'
import movies from '../assets/movies'
export default function MovieVeiw() {
  return (
    <>
      <h1>  {movies[0].title} </h1>
     <div

    style={{
     
      width:"100%",
      height:"500px",
      backgroundImage:`url(${require(movies[0].imageUrl)})`,
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      alignContent:"center",
      justifyContent:"center",
      display:"flex",
     
    
    }}>
       
    
      
    </div>
   <div style={{margin:"20px",fontWeight:"bold"}}>
   <h3>Director:{movies[0].director}</h3>
    <h3>{movies[0].description}</h3>
    <h3>Genre:{movies[0].genre}</h3>
    <p>Year:{movies[0].year}</p>
    <p>Rating:{movies[0].rating}</p>
    
    </div> 
    </>
     
  )
}
