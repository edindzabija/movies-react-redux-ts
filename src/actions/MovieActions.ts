import { Dispatch } from 'redux'
import axios from 'axios'
import api from '../utils/api'
import {
  MovieDispatchTypes,
  MOVIE_LIST_LOADING,
  MOVIE_LIST_FAIL,
  MOVIE_LIST_SUCCESS,
  MOVIE_DETAILS_LOADING,
  MOVIE_DETAILS_FAIL,
  MOVIE_DETAILS_SUCCESS,
} from './MovieActionTypes'

export const getMovies = () => async (
  dispatch: Dispatch<MovieDispatchTypes>
) => {
  try {
    dispatch({
      type: MOVIE_LIST_LOADING,
    })

    const { data } = await axios.get(api.topRatedMovies)

    dispatch({
      type: MOVIE_LIST_SUCCESS,
      payload: data.results,
    })
  } catch (error) {
    dispatch({
      type: MOVIE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getMovieDetails = (id: string) => async (
  dispatch: Dispatch<MovieDispatchTypes>
) => {
  try {
    dispatch({ type: MOVIE_DETAILS_LOADING })

    const { data } = await axios.get(
      `${api.base}/movie/${id}?api_key=${api.key}&${api.language}`
    )

    dispatch({
      type: MOVIE_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: MOVIE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const searchMovies = (keyword: string) => async (
  dispatch: Dispatch<MovieDispatchTypes>
) => {
  try {
    dispatch({ type: MOVIE_LIST_LOADING })

    const { data } = await axios.get(
      `${api.base}/search/movie?api_key=${api.key}&${api.language}&query=${keyword}&page=1&include_adult=false`
    )

    dispatch({
      type: MOVIE_LIST_SUCCESS,
      payload: data.results,
    })
  } catch (error) {
    dispatch({
      type: MOVIE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
