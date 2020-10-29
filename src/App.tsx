import React from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import MovieScreen from './screens/MovieScreen'
import Header from './components/Header'

const App = () => {
  return (
    <Router>
      <Header />
      <Route path='/movies' component={MovieScreen} exact />
      <Redirect from='/' to='/movies' />
    </Router>
  )
}

export default App
