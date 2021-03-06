import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootStore } from '../store'

import { getMovies, searchMovies } from '../actions/MovieActions'
import { Movie } from '../actions/MovieActionTypes'

import MovieCard from '../components/MovieCard'
import Search from '../components/Search'
import Loading from '../components/Loading'

import styles from '../styles/container.module.css'

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
  //debounce search
  const [debouncedQuery, setDebouncedQuery] = useState(query)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query)
    }, 1000)

    return () => {
      clearTimeout(handler)
    }
  }, [query])
  // search

  useEffect(() => {
    debouncedQuery !== null && debouncedQuery.length > 2
      ? dispatch(searchMovies(debouncedQuery))
      : dispatch(getMovies())
  }, [dispatch, debouncedQuery, debouncedQuery.length])
  // search logic

  return (
    <>
      <Search query={query} onSearch={searchQueryHandler} />
      {loading ? (
        <Loading />
      ) : error ? (
        <div className={styles.message}>
          <h3>{error}</h3>
        </div>
      ) : movies?.length ? (
        <ul className={styles.container}>
          {movies.slice(0, 10).map((movie: Movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              original_title={movie.original_title}
              overview={movie.overview}
              release_date={movie.release_date}
              poster_path={movie.poster_path}
              backdrop_path={movie.backdrop_path}
            />
          ))}
        </ul>
      ) : (
        <div className={styles.message}>
          <h3>No results...</h3>
        </div>
      )}
    </>
  )
}

export default MovieScreen
