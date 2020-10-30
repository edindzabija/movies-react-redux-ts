import { combineReducers } from 'redux'
import { movieReducer, movieDetailsReducer } from './movieReducer'

const RootReducer = combineReducers({
  movies: movieReducer,
  movie: movieDetailsReducer,
})

export default RootReducer
