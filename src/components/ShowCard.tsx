import React from 'react'
import { Link } from 'react-router-dom'
import { Show } from '../actions/ShowActionTypes'

const ShowCard: React.FC<Show> = ({ id, name, poster_path }) => {
  return (
    <li>
      <Link to={`/show/${id}`}>
        {poster_path ? (
          <img
            className='image'
            src={`http://image.tmdb.org/t/p/w200/${poster_path}`}
            alt={name}
          ></img>
        ) : (
          <h2>NO IMAGE HERE BOI</h2>
        )}
      </Link>

      <Link to={`/show/${id}`}>
        <strong>{name}</strong>
      </Link>
    </li>
  )
}

export default ShowCard
