import React from 'react'
import Movies from "../assets/movies"
import MoviesCard from '../component/MoviesCard'
export default function MoviesPage() {
 
  
     
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,0fr)",justifyContent:"center"}}>
    { Movies.map((movie)=>(<MoviesCard key={movie.id} movie={movie}/>))}
    </div>
  )
}
