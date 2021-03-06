import React from 'react';
import { Link } from 'react-router-dom';

import './SignUp.css';

const SignUp = () => {

    return (
        <div className="container">
            <form className="form">
                <h2>SIGN UP</h2>
                <div className="form-control">
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Enter Your Username"/>
                    <small>Error Message</small>
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="Enter Your Email"/>
                    <small>Error Message</small>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Your Password"/>
                    <small>Error Message</small>
                </div>
                <div className="form-control">
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password" placeholder="Enter Your Password Again"/>
                    <small>Error Message</small>
                </div>
                <button>Sign in</button>
                <p className="sign-in">Already registered? <Link className="link" to="/">Sign In</Link></p>
            </form>
        </div>
    );
};

export default SignUp;