import React from 'react'
import LandingButton from '../components/LandingButton'
import Navbar from '../components/Navbar'

const login = (e) => {
    e.preventDefault()
    alert('login')
}


const register = (e) => {
    e.preventDefault()
    alert('register')
}

const LandingPage = ({userLoggedIn}) => {
    if (userLoggedIn) {
        return (
            <div></div>
        )
    } else {
        return (
            <div>
                <Navbar links={{'Connect': '/'}} />
                <div className="login-container">
                    <LandingButton label="Login" onClick={login} />
                    <LandingButton label="Register" onClick={register} />
                </div>
            </div>
        )
    }
}

export default LandingPage
