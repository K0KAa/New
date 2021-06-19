import React from 'react'
import "./register.css"
import { Link } from 'react-router-dom' 

const Login = () => {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <div className="registerForm">
            <label >Username</label>
                <input type="text" className="registerInput" placeholder="Enter you username"/>
                <label >Email</label>
                <input type="email" className="registerInput" placeholder="Enter you email"/>
                <label >Password</label>
                <input type="passwod" className="registerInput" placeholder="Enter your password"/>

                <button className="registerButton">Register</button>
            </div>
            <Link to="/login" className="loginRegisterButton">Login</Link>
        </div>
    )
}

export default Login
