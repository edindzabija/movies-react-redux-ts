import {
  MovieDispatchTypes,
  MOVIE_LIST_LOADING,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAIL,
  MOVIE_DETAILS_LOADING,
  MOVIE_DETAILS_FAIL,
  MOVIE_DETAILS_SUCCESS,
  Movie,
} from '../actions/MovieActionTypes'

interface DefaultStateI {
  loading: boolean
  movies?: Movie[]
  error?: Error
}

const defaultState: DefaultStateI = {
  loading: false,
  movies: [],
}

interface DefaultDetailsStateI {
  loading?: boolean
  movie?: Movie
  error?: Error
}

const defaultDetailsState: DefaultDetailsStateI = {
  loading: false,
}

export const movieReducer = (
  state: DefaultStateI = defaultState,
  action: MovieDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case MOVIE_LIST_LOADING:
      return {
        loading: true,
        movies: [],
      }
    case MOVIE_LIST_SUCCESS:
      return {
        loading: false,
        movies: action.payload,
      }
    case MOVIE_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export const movieDetailsReducer = (
  state: DefaultDetailsStateI = defaultDetailsState,
  action: MovieDispatchTypes
): DefaultDetailsStateI => {
  switch (action.type) {
    case MOVIE_DETAILS_LOADING:
      return { loading: true, ...state }
    case MOVIE_DETAILS_SUCCESS:
      return { loading: false, movie: action.payload }
    case MOVIE_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
