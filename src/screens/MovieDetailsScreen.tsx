import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { getMovieDetails } from '../actions/MovieActions'
import { RootStore } from '../store'
import Loading from '../components/Loading'
import styles from '../styles/details.module.css'

type TParams = { id: string }

const MovieDetailsScreen = ({ match }: RouteComponentProps<TParams>) => {
  const dispatch = useDispatch()

  const movieState = useSelector((state: RootStore) => state.movie)
  const { loading, movie, error } = movieState

  useEffect(() => {
    dispatch(getMovieDetails(match.params.id))
  }, [dispatch, match])

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        { error }
      ) : (
        movie && (
          <div className={styles.container}>
            <h2>{movie.original_title}</h2>
            <p>{movie.overview}</p>
            {movie.videos?.results[0] !== undefined ? (
              <div className={styles.videoWrapper}>
                <iframe
                  title={movie.original_title}
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  width='560'
                  height='349'
                  src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
                  frameBorder='0'
                />
              </div>
            ) : (
              <div>
                <img
                  src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`}
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

export default MovieDetailsScreen
