import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootStore } from '../store'
import { getShows, searchShows } from '../actions/ShowActions'
import { Show } from '../actions/ShowActionTypes'
import ShowCard from '../components/ShowCard'
import Search from '../components/Search'
// import { useDebounce } from '../utils/useDebounce'

const ShowScreen = () => {
  const dispatch = useDispatch()

  const showState = useSelector((state: RootStore) => state.shows)
  const { loading, shows, error } = showState

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
      ? dispatch(searchShows(query))
      : dispatch(getShows())
  }, [dispatch, query, query.length])
  // search logic

  return (
    <>
      <Search query={query} onSearch={searchQueryHandler} />
      <div className='show-list'>
        {loading ? (
          <h1>LOADING BOIIIIIIII</h1>
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          shows &&
          shows
            .slice(0, 10)
            .map((show: Show) => (
              <ShowCard
                key={show.id}
                id={show.id}
                name={show.name}
                overview={show.overview}
                release_date={show.release_date}
                poster_path={show.poster_path}
                backdrop_path={show.backdrop_path}
              />
            ))
        )}
      </div>
    </>
  )
}

export default ShowScreen
