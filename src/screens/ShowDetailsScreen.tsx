import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { getShowDetails } from '../actions/ShowActions'
import { RootStore } from '../store'
import Loading from '../components/Loading'
import styles from '../styles/details.module.css'

type TParams = { id: string }

const ShowDetailsScreen = ({ match }: RouteComponentProps<TParams>) => {
  const dispatch = useDispatch()

  const showState = useSelector((state: RootStore) => state.show)
  const { loading, show, error } = showState

  useEffect(() => {
    dispatch(getShowDetails(match.params.id))
  }, [dispatch, match])
 
  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        { error }
      ) : (
        show && (
          <div className={styles.container}>
            <h2>{show.name}</h2>
            <p>{show.overview}</p>
            {show.videos?.results[0] !== undefined ? (
              <div className={styles.videoWrapper}>
                <iframe
                  title={show.name}
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  width='560'
                  height='349'
                  src={`https://www.youtube.com/embed/${show.videos.results[0].key}`}
                  frameBorder='0'
                />
              </div>
            ) : (
              <div>
                <img
                  src={`http://image.tmdb.org/t/p/w300${show.poster_path}`}
                  alt=''
                />
              </div>
            )}
          </div>
        )
      )}
    </>
  )
}

export default ShowDetailsScreen
