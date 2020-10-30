import React from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import MovieScreen from './screens/MovieScreen'
import MovieDetailsScreen from './screens/MovieDetailsScreen'
import Header from './components/Header'

const App = () => {
  return (
    <Router>
      <Header />
      <Route path='/movies' component={MovieScreen} exact />
      <Route path='/movie/:id' component={MovieDetailsScreen} />
      <Redirect from='/' to='/movies' exact />
    </Router>
  )
}

export default App
