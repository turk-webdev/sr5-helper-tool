import React from 'react'
import Button from './Button'

const Register = () => {
    return (
        <div class="container aug" id="register-form-cntr"
        data-augmented-ui="tl-clip-x tr-clip br-2-clip-x bl-clip both">
            <h1>Register</h1>
            <form method="POST" action="/register" id="register-form">

            </form>
            <Button type="submit" onClick="" btnClass="aug" aug={['tl-clip', 'both', 'br-clip']} text="Register" />
        </div>
    )
}

export default Register
