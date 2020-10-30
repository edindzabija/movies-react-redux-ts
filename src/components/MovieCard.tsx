import React from 'react'
import { Link } from 'react-router-dom'
import { Movie } from '../actions/MovieActionTypes'

const MovieCard: React.FC<Movie> = ({ id, original_title, poster_path }) => {
  return (
    <li>
      <Link to={`/movie/${id}`}>
        {poster_path ? (
          <img
            className='image'
            src={`http://image.tmdb.org/t/p/w300/${poster_path}`}
            alt={original_title}
          ></img>
        ) : (
          <h2>NO IMAGE HERE BOI</h2>
        )}
      </Link>

      <Link to={`/movie/${id}`}>
        <strong>{original_title}</strong>
      </Link>
    </li>
  )
}

export default MovieCard
