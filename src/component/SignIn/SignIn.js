import React from 'react';
import { Link } from 'react-router-dom';

import './SignIn.css'

const SignIn = () => {
    
    return (
        <div className="container">
            <form className="form">
                <h2>SIGN IN</h2>
                <div className="form-control">
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Enter Your Username"/>
                    <small>Error Message</small>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Your Password"/>
                    <small>Error Message</small>
                </div>
                <button>Sign in</button>
                <p className="sign-in">Already registered? <Link className="link" to="/signup">Sign Up</Link></p>
            </form>
        </div>
    );
};

export default SignIn;