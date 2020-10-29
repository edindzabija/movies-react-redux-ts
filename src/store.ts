import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import RootReducer from './reducers/rootReducer'

const middleware = [thunk]

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export type RootStore = ReturnType<typeof RootReducer>

export default store
