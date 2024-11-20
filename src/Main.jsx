import React from 'react'
<<<<<<< HEAD
import './css/index.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
// import About from './components/About';
// import Services from './components/Services';
// import Tours from './components/Tours';
// import Footer from './components/Footer';
=======

import './index.css';
import Homepage from './components/Homepage.jsx';
import AboutUs from './components/AboutUs.jsx'
import Thailand from './components/Thailand.jsx'
import Switzerland from './components/Switzerland.jsx'
import Japan from './components/Japan.jsx'
import Korea from './components/Korea.jsx'
import { Routes, Route } from "react-router-dom";
>>>>>>> 6e21f047b9379e9e81a7a6ac8e60194126608061

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