import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootStore } from '../store'
import { GetMovies } from '../actions/MovieActions'
import { Movie } from '../actions/MovieActionTypes'
import MovieCard from '../components/MovieCard'

const MovieScreen = () => {
  const dispatch = useDispatch()

  const movieState = useSelector((state: RootStore) => state.movies)
  const { loading, movies, error } = movieState

  useEffect(() => {
    dispatch(GetMovies())
  }, [dispatch])
  console.log('movies', movies)
  return (
    <div>
      {loading ? (
        <h1>LOADING BOIIIIIIII</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        movies &&
        movies
          .slice(0, 10)
          .map((movie: Movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              original_title={movie.original_title}
              overview={movie.overview}
              release_date={movie.release_date}
              poster_path={movie.poster_path}
              backdrop_path={movie.backdrop_path}
            />
          ))
      )}
    </div>
  )
}

export default MovieScreen
