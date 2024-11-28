import React, { useEffect } from 'react';
import logo from "../images/favicon.ico";

import { humBurger } from "../js/humburger";

// import PageLinks from "./PageLinks";
// import IconLinks from "./IconLinks";
// import { useState } from "react";

import { Link } from "react-router-dom";

function NavCountry() {

    useEffect(() => {humBurger();}, []);

    return (
        
        <>
            {/* <!-- nav bar --> */}
            <nav className="navbar country">
                <div className="nav-logo">
                    {/* <a href="./index.html"><img src={logo} alt="logo" /></a> */}
                    <nav><Link to="/"><img src={logo} alt="logo" /></Link></nav>
                </div>  

                {/* <!-- desktop --> */}
                <div className="nav-links">
                    <ul className="nav-list" id="nav-list">
                        <li><nav><Link to="./" className="nav-link">Home</Link></nav></li>
                        <li><nav><Link to="./AboutUs" className="nav-link">About</Link></nav></li>
                        <li><nav><Link to="./Japan" className="mobile-nav-link">japan</Link></nav></li>
                        <li><nav><Link to="./Korea" className="mobile-nav-link">korea</Link></nav></li>
                        <li><nav><Link to="./Switzerland" className="mobile-nav-link">switzerland</Link></nav></li>
                        <li><nav><Link to="./Thailand" className="mobile-nav-link">thailand</Link></nav></li>
                    </ul>
                </div>  

                <div className="nav-icons">
                <ul className="nav-icons-list">
                    <li><a href="https://www.facebook.com" className="nav-icon">
                        <i className="fa-brands fa-facebook"></i></a>   
                    </li>
                    <li><a href="https://www.twitter.com" className="nav-icon">
                        <i className="fa-brands fa-twitter"></i></a>   
                    </li>
                    <li><a href="https://www.whatsapp.com/" className="nav-icon">
                        <i className="fa-brands fa-whatsapp"></i></a>   
                    </li>  
                </ul>
                </div>  

                {/* <!-- mobile hamburger --> */}
                <div className="nav-mobile">
                <button type="button" className="nav-mobile-toggle" id="nav-mobile-toggle">
                    <i className="fa-solid fa-bars"></i>
                </button>
                <ul className="mobile-nav-list" id="mobile-nav-list">
                    <li><nav><Link to="/" className="mobile-nav-link">Home</Link></nav></li>
                    <li><nav><Link to="/AboutUs" className="mobile-nav-link">about</Link></nav></li>
                    <li><nav><Link to="/Japan" className="mobile-nav-link">japan</Link></nav></li>
                    <li><nav><Link to="/Korea" className="mobile-nav-link">korea</Link></nav></li>
                    <li><nav><Link to="/Switzerland" className="mobile-nav-link">switzerland</Link></nav></li>
                    <li><nav><Link to="/Thailand" className="mobile-nav-link">thailand</Link></nav></li>
                </ul>
                </div>
            </nav>
        </>
    );
}

export default NavCountry