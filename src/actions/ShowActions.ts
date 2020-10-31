import { Dispatch } from 'redux'
import axios from 'axios'
import api from '../utils/api'
import {
  ShowDispatchTypes,
  SHOW_LIST_LOADING,
  SHOW_LIST_FAIL,
  SHOW_LIST_SUCCESS,
  SHOW_DETAILS_LOADING,
  SHOW_DETAILS_FAIL,
  SHOW_DETAILS_SUCCESS,
} from './ShowActionTypes'

export const getShows = () => async (dispatch: Dispatch<ShowDispatchTypes>) => {
  try {
    dispatch({
      type: SHOW_LIST_LOADING,
    })

    const { data } = await axios.get(api.topRatedShows)

    dispatch({
      type: SHOW_LIST_SUCCESS,
      payload: data.results,
    })
  } catch (error) {
    dispatch({
      type: SHOW_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getShowDetails = (id: string) => async (
  dispatch: Dispatch<ShowDispatchTypes>
) => {
  try {
    dispatch({ type: SHOW_DETAILS_LOADING })

    const { data } = await axios.get(
      `${api.base}/tv/${id}?api_key=${api.key}&${api.language}`
    )

    dispatch({
      type: SHOW_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: SHOW_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const searchShows = (keyword: string) => async (
  dispatch: Dispatch<ShowDispatchTypes>
) => {
  try {
    dispatch({ type: SHOW_LIST_LOADING })

    const { data } = await axios.get(
      `${api.base}/search/tv?api_key=${api.key}&${api.language}&query=${keyword}&page=1&include_adult=false`
    )
    dispatch({
      type: SHOW_LIST_SUCCESS,
      payload: data.results,
    })
  } catch (error) {
    dispatch({
      type: SHOW_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
