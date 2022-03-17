import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";
import About from "./pages/about";

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path='/' exact element={<Home/>}/>
                <Route path='/about' element={<About />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/signup' element={<SignUp />}/>
            </Routes>
        </Router>
    );
}

export default App;
