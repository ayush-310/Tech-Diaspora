import React from 'react'
import "./home.css"

function Home() {
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

export default Home







// <div>
// <div className="login">
//     <div className="loginWrapper">
//         <div className="loginLeft">
//             <h3 className="loginLogo">
//                 Welcome to <span style={{ color: "orange" }}>Vikriti</span>
//             </h3>
//             <span className="loginDesc">
//                 Connect with friends and the world around you on Lamasocial.
//             </span>
//         </div>

//         <div className="loginRight">
//             <div className="loginLogo">
//                 Are you a <span onClick={() => handler("Login")} style={{ color: "orange", cursor: "pointer" }}>Buyer</span> or <span onClick={() => handler("Register")} style={{ color: "orange", cursor: "pointer" }}>Seller</span>?
//             </div>

           
//             {option === "Login" ? <Login /> : <Register />}
//         </div>
//     </div>
// </div>
// </div>
