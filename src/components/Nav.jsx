import React from "react";

import logo from "../images/favicon.ico";
import sign2 from "../images/shop_sign2.png";

import { Link } from "react-router-dom";
// import PageLinks from "./PageLinks";
// import IconLinks from "./IconLinks";
// import { useState } from "react";

function Nav() {

    return (
        
        <>
            {/* <!-- nav bar --> */}
            <nav className="navbar">
                <div className="nav-logo">
                    {/* <a href="./index.html"><img src={logo} alt="logo" /></a> */}
                    <nav><Link to="/"><img src={logo} alt="logo" /></Link></nav>
                </div>  

                <div className="nav-sign">
                    <img src={sign2} alt="logo" style={{transform: 'scale(0.3)'}} /> 
                </div>  


                {/* <!-- desktop --> */}
                <div className="nav-links">
                    <ul className="nav-list" id="nav-list">
                        <li><a href="./index.html" className="nav-link">Home</a></li>
                        <li><a href="./content/aboutUs.html" className="nav-link">About</a></li>
                        <li><a href="./content/japan.html" className="mobile-nav-link">japan</a></li>
                        <li><a href="./content/korea.html" className="mobile-nav-link">korea</a></li>
                        <li><a href="./content/switzerland.html" className="mobile-nav-link">switzerland</a></li>
                        <li><a href="./content/thailand.html" className="mobile-nav-link">thailand</a></li>
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
                    <li><Link to="/" className="mobile-nav-link">Home</Link></li>
                    <li><Link to="AboutUs.html" className="mobile-nav-link">about</Link></li>
                    {/* <li><Link to="japan.html" className="mobile-nav-link">japan</Link></li> */}
                    {/* <li><Link to="korea.html" className="mobile-nav-link">korea</Link></li> */}
                    <li><Link to="Switzerland" className="mobile-nav-link">switzerland</Link></li>
                    <li><Link to="Thailand" className="mobile-nav-link">thailand</Link></li>
                </ul>
                </div>
            </nav>
        </>
    );
}

export default Nav