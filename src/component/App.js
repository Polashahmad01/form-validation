import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import Success from './Success/Success';


const App = () => {

    return (
        <BrowserRouter>
            <Route path="/" exact component={SignIn}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/success" component={Success}></Route>
        </BrowserRouter>
    );
};


export default App;