import React from 'react'

import './css/index.css';
import Homepage from './components/Homepage.jsx';
import AboutUs from './components/AboutUs.jsx'
import Thailand from './components/Thailand.jsx'
import Switzerland from './components/Switzerland.jsx'
import Japan from './components/Japan.jsx'
import Korea from './components/Korea.jsx'
import { Routes, Route } from "react-router-dom";

function Main() {
    return (      
        <>
        {/* <AboutUs /> */}
        {/* <AboutUs /> */}
        {/* <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
        </nav> */}
        {/* <BrowserRouter>      */}
        <Routes>    
            {/* <Route index element={<Homepage />} /> */}
            <Route path="/" element={<Homepage />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Thailand" element={<Thailand />} />
            <Route path="/Switzerland" element={<Switzerland />} />
            <Route path="/Japan" element={<Japan />} />
            <Route path="/Korea" element={<Korea />} />
            <Route path="*" element={<Homepage />} />
        </Routes>
        {/* </BrowserRouter>  */}
        </>
    );
}

export default Main