import React from 'react'
import "./login.css"


function Login() {
    return (

        <div>
            <div className="login">
                <div className="loginWrapper">
                    <div className="loginLeft">
                        <h3 className="loginLogo">Welcome to<span style={{ color: "orange" }}> Vikriti</span></h3>
                        <span className="loginDesc">
                        United in Faith, Boundless in Worship: Embracing the Divine Across Distances
                        </span>
                    </div>   
                    <div className="loginRight">
                        <div className="loginBox">
                            <input placeholder="Email" className="loginInput" />
                            <input placeholder="Password" className="loginInput" />
                            <button className="loginButton">Log In</button>
                            <span className="loginForgot">Forgot Password?</span>
                            <button className="loginRegisterButton">
                                Create a New Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login
