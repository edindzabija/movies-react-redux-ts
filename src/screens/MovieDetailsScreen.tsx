import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { GetMovieDetails } from '../actions/MovieActions'
import { RootStore } from '../store'

type TParams = { id: string }

const MovieDetailsScreen = ({ match }: RouteComponentProps<TParams>) => {
  const dispatch = useDispatch()

  const movieState = useSelector((state: RootStore) => state.movie)
  const { loading, movie, error } = movieState

  useEffect(() => {
    dispatch(GetMovieDetails(match.params.id))
  }, [dispatch, match])

  return (
    <>
      {loading ? (
        <h1>LOADING....</h1>
      ) : error ? (
        { error }
      ) : (
        <h1>{movie && movie.original_title}</h1>
      )}
    </>
  )
}

export default MovieDetailsScreen
