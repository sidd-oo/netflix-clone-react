import React from 'react'
import './Register.scss'

const Register = () => {
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                     <img 
                        className = "logo" 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
                        alt=""
                    />
                    <button className="loginButton">Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                Ready to watch? Enter your email to create or restart your membership.
                </p>
                <div className = "input">
                    <input type="email" placeholder="email address"/>
                    <button className="registerButton">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Register
