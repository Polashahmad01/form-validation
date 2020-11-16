import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import './SignUp.css';

const SignUp = () => {
    const userName = useRef();
    const email = useRef();
    const password = useRef();
    const password2 = useRef();

    const formSubmitHandle = () => {
        console.log('submited');
    };

    return (
        <div className="container">
            <form onSubmit={formSubmitHandle} className="form">
                <h2>SIGN UP</h2>
                <div className="form-control">
                    <label htmlFor="username">Username</label>
                    <input ref={userName} type="text" placeholder="Enter Your Username"/>
                    <small>Error Message</small>
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input ref={email} type="text" placeholder="Enter Your Email"/>
                    <small>Error Message</small>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input ref={password} type="password" placeholder="Enter Your Password"/>
                    <small>Error Message</small>
                </div>
                <div className="form-control">
                    <label htmlFor="password2">Confirm Password</label>
                    <input ref={password2} type="password" placeholder="Enter Your Password Again"/>
                    <small>Error Message</small>
                </div>
                <button>Sign in</button>
                <p className="sign-in">Already registered? <Link className="link">Sign In</Link></p>
            </form>
        </div>
    );
};

export default SignUp;