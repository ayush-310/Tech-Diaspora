import React from 'react'
import "./register.css"

function Register() {
    return (


        <div className="loginRight">
            <div className="loginBox">
                <input placeholder="Username" className="loginInput" />
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Password" className="loginInput" />
                <input placeholder="Password Again" className="loginInput" />
                <button className="loginButton">Sign Up</button>
                <button className="loginRegisterButton">
                    Log into Account
                </button>
            </div>
        </div>

    )
}

export default Register
