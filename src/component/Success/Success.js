import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {

    return (
        <div className="container">
            <form className="form">
                <h2>Success</h2>
                <p className="sign-in">Go Back To <Link className="link" to="/">Sign In</Link></p>
            </form>
        </div>
    );
};

export default Success;
