import React, { useState, useEffect } from 'react'
import {Route} from 'react-router-dom'
import './App.css'
import './index.css'

// Bootstrap component imports
import Container from 'react-bootstrap/Container'

// Custom component imports
import Test from './components/Test'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Button from './components/Button'
import LandingPage from './pages/LandingPage'

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  return (
    <div>
      <Route exact path="/" render={() => (
        <LandingPage userLoggedIn={userLoggedIn} />
      )} />
    </div>
  )
}

export default App
