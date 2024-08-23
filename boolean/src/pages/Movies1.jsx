import React from 'react'
import movies from '../assets/movies'
import { Link, useParams } from 'react-router-dom'



export default function MovieVeiw() {
  const{id}=useParams()
console.log("moviesView",id)
  return (
    <>
    
      <div
      style={{
        width: '100%',
        height:"800px",
        margin: '20px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        display:"flex"
      }}
    >
      <div>
      <img
        src={movies[id].imageUrl}
        alt="Movie Poster"
        style={{
          width: '100%',
          height: '700px',
          borderRadius: '10px 10px 0 0',
          objectFit: 'cover',
        }}
      />
      </div>
    <div style={{margin:"20px"}}>
    <h2 style={{ fontSize: '20px', margin: '10px 0',fontWeight:"bold" }}>{movies[id].title}</h2>
      <h4 style={{ fontSize: '14px', margin: '10px 0',fontWeight:"bold" }}>Director:  {movies[id].director}</h4>
      <p style={{ fontSize: '14px', margin: '10px 0' }}>{movies[id].description}</p>
      <h4 style={{ fontSize: '14px', margin: '10px 0',fontWeight:"bold" }}>Year:  {movies[id].year}</h4>
      <h4 style={{ fontSize: '14px', margin: '10px 0',fontWeight:"bold" }}>Genre:  {movies[id].genre}</h4>
      <h4 style={{ fontSize: '14px', margin: '10px 0',fontWeight:"bold" }}>Rating:  {movies[id].rating}</h4>

     <Link to={".."} > <button style={{padding:"10px"}}>back to movies</button></Link>
    </div>
     
    </div>
    </>
     
  )
}
