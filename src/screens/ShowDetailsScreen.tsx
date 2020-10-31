import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { getShowDetails } from '../actions/ShowActions'
import { RootStore } from '../store'

type TParams = { id: string }

const ShowDetailsScreen = ({ match }: RouteComponentProps<TParams>) => {
  const dispatch = useDispatch()

  const showState = useSelector((state: RootStore) => state.show)
  const { loading, show, error } = showState

  useEffect(() => {
    dispatch(getShowDetails(match.params.id))
  }, [dispatch, match])
  console.log('show', show)

  return (
    <>
      {loading ? (
        <h1>LOADING....</h1>
      ) : error ? (
        { error }
      ) : (
        <h1>{show && show.name}</h1>
      )}
    </>
  )
}

export default ShowDetailsScreen
