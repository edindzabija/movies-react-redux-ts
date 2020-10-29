import {
  MovieDispatchTypes,
  MovieType,
  MOVIE_LIST_LOADING,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAIL,
} from '../actions/MovieActionTypes'

interface DefaultStateI {
  loading: boolean
  movies?: MovieType
}

const defaultState: DefaultStateI = {
  loading: false,
}

const movieReducer = (
  state: DefaultStateI = defaultState,
  action: MovieDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case MOVIE_LIST_FAIL:
      return {
        loading: false,
      }
    case MOVIE_LIST_LOADING:
      return {
        loading: true,
      }
    case MOVIE_LIST_SUCCESS:
      return {
        loading: false,
        movies: action.payload,
      }
    default:
      return state
  }
}

export default movieReducer
