import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootStore } from '../store'
import { getShows, searchShows } from '../actions/ShowActions'
import { Show } from '../actions/ShowActionTypes'
import ShowCard from '../components/ShowCard'
import Search from '../components/Search'
import Loading from '../components/Loading'
import styles from '../styles/container.module.css'

const ShowScreen = () => {
  const dispatch = useDispatch()

  const showState = useSelector((state: RootStore) => state.shows)
  const { loading, shows, error } = showState

  // search
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
      ? dispatch(searchShows(debouncedQuery))
      : dispatch(getShows())
  }, [dispatch, debouncedQuery, debouncedQuery.length])
  return (
    <>
      <Search query={query} onSearch={searchQueryHandler} />
      {loading ? (
        <Loading />
      ) : error ? (
        <div className={styles.message}>
          <h3>{error}</h3>
        </div>
      ) : shows?.length ? (
        <ul className={styles.container}>
          {shows.slice(0, 10).map((show: Show) => (
            <ShowCard
              key={show.id}
              id={show.id}
              name={show.name}
              overview={show.overview}
              first_air_date={show.first_air_date}
              poster_path={show.poster_path}
              backdrop_path={show.backdrop_path}
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

export default ShowScreen
