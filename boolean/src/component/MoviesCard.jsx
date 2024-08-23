import React from 'react';
import { Link } from 'react-router-dom';

export default function MoviesCard({movie}) {
  return (
    <div
      style={{
        width: '250px',
        margin: '20px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <img
        src={movie.imageUrl}
        alt="Movie Poster"
        style={{
          width: '100%',
          height: '150px',
          borderRadius: '10px 10px 0 0',
          objectFit: 'cover',
        }}
      />
      <h2 style={{ fontSize: '20px', margin: '10px 0',fontWeight:"bold" }}>{movie.title}</h2>
      <h4 style={{ fontSize: '14px', margin: '10px 0' }}>{movie.director}</h4>
      <p style={{ fontSize: '14px', margin: '10px 0' }}>{movie.description}</p>

       <Link to={`${movie.id}`}><button>veiw more</button></Link>
    </div>
  );
}