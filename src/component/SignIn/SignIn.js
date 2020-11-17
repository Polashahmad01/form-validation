import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';

import './SignIn.css';

const validateUserName = (value) => {
    let error;
    if(value === '') {
        error = "username required";
    }
    return  error;
};


const validatePassword = (value) => {
    let error;
    if(value === '') {
        error = "password required";
    }
    return error;
};

const SignIn = () => {
    
    return (
        <div className="container">
            <div className="form">
                <h2>SIGN IN</h2>
                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                    }}
                    onSubmit = { values => {
                        console.log('Hello')
                    }}
                >
                    {({errors, touched}) => (
                        <Form autoComplete="off">
                            <div className="form-control">
                                <label htmlFor="username">Username</label>
                                <Field name="username" validate={validateUserName} />
                                {errors.username && touched.username && <div>{errors.username}</div>}
                            </div>
                            <div className="form-control">
                                <label htmlFor="password">Password</label>
                                <Field type="password" name="password" validate={validatePassword} />
                                {errors.password && touched.password && <div>{errors.password}</div>}
                            </div>
                            <button type="submit">Sign in</button>
                            <p className="sign-in">Already registered? <Link className="link" to="/signup">Sign Up</Link></p>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default SignIn;