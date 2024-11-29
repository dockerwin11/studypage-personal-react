import React, { useState } from 'react';
import { Link } from "react-router-dom";

import logo from "../images/favicon.ico";
import sign2 from "../images/shop_sign2.png";

// 20241129 rewrite
// import { humBurger } from "../js/humburger";

function Nav() {

    // 20241129 rewrite
    // useEffect(() => {humBurger();}, []);

    // 20241129 added
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    };
    // 20241129 added

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
                        <li><nav><Link to="/" className="nav-link">Home</Link></nav></li>
                        <li><nav><Link to="/AboutUs" className="nav-link">About</Link></nav></li>
                        <li><nav><Link to="/Japan" className="mobile-nav-link">japan</Link></nav></li>
                        <li><nav><Link to="/Korea" className="mobile-nav-link">korea</Link></nav></li>
                        <li><nav><Link to="/Switzerland" className="mobile-nav-link">switzerland</Link></nav></li>
                        <li><nav><Link to="/Thailand" className="mobile-nav-link">thailand</Link></nav></li>
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
                    {/* 20241129 rewrite */}
                    {/* <button type="button" className="nav-mobile-toggle" id="nav-mobile-toggle"> */}
                    <button type="button" className="nav-mobile-toggle" id="nav-mobile-toggle" onClick={toggleNav}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    {/* 20241129 rewrite */}
                    {/* <ul className="mobile-nav-list" id="mobile-nav-list"> */}
                    <ul className={navActive ? 'mobile-nav-list active' : 'mobile-nav-list'} id="mobile-nav-list">
                        <li><nav><Link to="/" className="mobile-nav-link">Home</Link></nav></li>
                        <li><nav><Link to="/AboutUs" className="mobile-nav-link">about</Link></nav></li>
                        <li><nav><Link to="/japan" className="mobile-nav-link">japan</Link></nav></li>
                        <li><nav><Link to="/korea" className="mobile-nav-link">korea</Link></nav></li>
                        <li><nav><Link to="/Switzerland" className="mobile-nav-link">switzerland</Link></nav></li>
                        <li><nav><Link to="/Thailand" className="mobile-nav-link">thailand</Link></nav></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Nav