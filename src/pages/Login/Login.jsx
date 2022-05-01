import React from 'react'
import { useLocation } from 'react-router-dom'

const Login = () => {
    console.log(useLocation().state);
    return (
        <div>
            <h1>Login Page</h1>
        </div>
    )
}

export default Login
