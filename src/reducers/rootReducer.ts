import { combineReducers } from 'redux'
import movieReducer from './movieReducer'

const RootReducer = combineReducers({
  movies: movieReducer,
})

export default RootReducer
