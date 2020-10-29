import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootStore } from '../store'
import { GetMovies } from '../actions/MovieActions'
import { Movie } from '../actions/MovieActionTypes'

const MovieScreen = () => {
  const dispatch = useDispatch()

  const movieState = useSelector((state: RootStore) => state.movies)
  const { loading, movies } = movieState

  useEffect(() => {
    dispatch(GetMovies())
  }, [dispatch])
  console.log('movies', movies)
  return (
    <div>
      {loading ? (
        <h1>LOADING BOIIIIIIII</h1>
      ) : (
        movies &&
        movies.slice(0, 10).map((movie: Movie) => (
          <div key={movie.id}>
            <img
              src={`http://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.original_title}
            ></img>
            <h3>{movie.original_title}</h3>
          </div>
        ))
      )}
    </div>
  )
}

export default MovieScreen
