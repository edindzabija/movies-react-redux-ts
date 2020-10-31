import { combineReducers } from 'redux'
import { movieReducer, movieDetailsReducer } from './movieReducer'
import { showReducer, showDetailsReducer } from './showReducer'

const RootReducer = combineReducers({
  movies: movieReducer,
  movie: movieDetailsReducer,
  shows: showReducer,
  show: showDetailsReducer,
})

export default RootReducer
