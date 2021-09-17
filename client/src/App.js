import { useState, useEffect } from 'react'
import './App.css'

// Bootstrap component imports
import Container from 'react-bootstrap/Container'

// Custom component imports
import Test from './components/Test'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Button from './components/Button'

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  const loginRegister = (
    <div class="content" id="landing">
      <div />
      <LoginForm />
      <RegisterForm />
      <div />
    </div>
  )
  const body = userLoggedIn ? <Dashboard /> : loginRegister

  return (
    <>
    <Navbar />
    <Container>
      {body}
    </Container>
    </>
  )
}

export default App
