import React from 'react'
import Button from './Button'

const Login = () => {
    return (
        <div 
            class="container aug" 
            id="login-form-cntr"
            data-augmented-ui="tl-clip-x tr-clip br-2-clip-x bl-clip both"
        >
            <h1>Login</h1>
            <form method="POST" action="/login" id="login-form">

            </form>
            <button class="cybr-btn" hidden />
            <button class="cybr-btn">
                SUBMIT
                <span aria-hidden class="cybr-btn__glitch">G.O.D. IS WATCHING</span>
                <span aria-hidden class="cybr-btn__tag">R25</span>
            </button>
        </div>
    )
}

export default Login
