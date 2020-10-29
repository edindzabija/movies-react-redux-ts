import { Dispatch } from 'redux'
import axios from 'axios'
import {
  MovieDispatchTypes,
  MOVIE_LIST_LOADING,
  MOVIE_LIST_FAIL,
  MOVIE_LIST_SUCCESS,
} from './MovieActionTypes'

export const GetMovies = () => async (
  dispatch: Dispatch<MovieDispatchTypes>
) => {
  try {
    dispatch({
      type: MOVIE_LIST_LOADING,
    })

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=e3142c91b926eb540f28dc5348443306&language=en-US&page=1`
    )

    dispatch({
      type: MOVIE_LIST_SUCCESS,
      payload: data.results,
    })
  } catch (error) {
    dispatch({
      type: MOVIE_LIST_FAIL,
    })
  }
}
