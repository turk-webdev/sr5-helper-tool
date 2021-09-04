import { useState, useEffect } from 'react'
import './App.css'

// Component imports
import Test from './components/Test'

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  if (userLoggedIn) {
    return 
  }
}

export default App
