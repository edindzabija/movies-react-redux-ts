import React from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import Header from './components/Header'
import MovieScreen from './screens/MovieScreen'
import MovieDetailsScreen from './screens/MovieDetailsScreen'
import ShowScreen from './screens/ShowScreen'
import ShowDetailsScreen from './screens/ShowDetailsScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <Route path='/movies' component={MovieScreen} />
      <Route path='/movie/:id' component={MovieDetailsScreen} />
      <Route path='/shows' component={ShowScreen} />
      <Route path='/show/:id' component={ShowDetailsScreen} />
      <Redirect from='/' to='/shows' exact />
    </Router>
  )
}

export default App
