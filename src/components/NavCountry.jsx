import React from "react";
import logo from "../images/logo.svg";
// import PageLinks from "./PageLinks";
// import IconLinks from "./IconLinks";
// import { useState } from "react";

function NavCountry() {

    return (
        
        <>
            {/* <!-- nav bar --> */}
            <nav className="navbar country">
                <div className="nav-logo">
                    <a href="./index.html"><img src={logo} alt="logo" /></a>
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
                    <li><a href="./index.html" className="mobile-nav-link">Home</a></li>
                    <li><a href="./content/aboutUs.html" className="mobile-nav-link">about</a></li>
                    <li><a href="./content/japan.html" className="mobile-nav-link">japan</a></li>
                    <li><a href="./content/korea.html" className="mobile-nav-link">korea</a></li>
                    <li><a href="./content/switzerland.html" className="mobile-nav-link">switzerland</a></li>
                    <li><a href="./content/thailand.html" className="mobile-nav-link">thailand</a></li>
                </ul>
                </div>
            </nav>
        </>
    );
}

export default NavCountry