import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootStore } from '../store'
import { getMovies, searchMovies } from '../actions/MovieActions'
import { Movie } from '../actions/MovieActionTypes'
import MovieCard from '../components/MovieCard'
import Search from '../components/Search'
// import { useDebounce } from '../utils/useDebounce'

const MovieScreen = () => {
  const dispatch = useDispatch()

  const movieState = useSelector((state: RootStore) => state.movies)
  const { loading, movies, error } = movieState

  // search logic
  const [query, setQuery] = useState(
    sessionStorage.getItem('queryInSessionStorage') || ''
  )
  useEffect(() => {
    sessionStorage.setItem('queryInSessionStorage', query)
  }, [query])

  const searchQueryHandler = (query: string) => {
    setQuery(query)
  }
  // const debouncedQuery = useDebounce(query, 1000)

  useEffect(() => {
    query !== null && query.length > 2
      ? dispatch(searchMovies(query))
      : dispatch(getMovies())
  }, [dispatch, query, query.length])
  // search logic

  return (
    <>
      <Search query={query} onSearch={searchQueryHandler} />
      <div className='movie-list'>
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
    </>
  )
}

export default MovieScreen
