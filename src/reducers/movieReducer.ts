import {
  MovieDispatchTypes,
  MOVIE_LIST_LOADING,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAIL,
  Movie,
} from '../actions/MovieActionTypes'

interface DefaultStateI {
  loading: boolean
  movies: Movie[]
}

const defaultState: DefaultStateI = {
  loading: false,
  movies: [],
}

const movieReducer = (
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
        movies: [],
      }
    default:
      return state
  }
}

export default movieReducer
