import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import SignUp from './SignUp/SignUp';


const App = () => {

    return (
        <BrowserRouter>
            <Route to="/" component={SignUp}></Route>
        </BrowserRouter>
    );
};


export default App;