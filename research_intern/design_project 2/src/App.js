// src/App.js
import React from 'react';
import './App.css';
import { Providers } from './provider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './Main';
import Navbar from './Navbar';
import SignIn from './SignIn';
import SignOut from './SignOut';
import Contact from './Contact';
import AboutUs from './AboutUs';
import Home from './Home'; // Import the Home component

function App() {
    return (
        <Providers>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/home" element={<Home />} /> 
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signout" element={<SignOut />} />
                    <Route path="/dashboard" element={<Main />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<AboutUs />} />
                </Routes>
            </Router>
        </Providers>
    );
}

export default App;
