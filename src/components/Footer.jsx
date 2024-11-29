import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

// 20241129 rewrite
// import { footerDate } from "../js/footerdate"; 


function Footer() {
  
  // 20241129 rewrite
  // useEffect(() => {footerDate();}, []);

  // 20241129 added
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  // 20241129 added 

  return (
    <>
    {/* <!-- footer --> */}
    <footer className="footer">
      <ul className="footer-links">
        <li><nav><Link to="/" className="footer-link">Home</Link></nav></li>
        <li><nav><Link to="/AboutUs" className="footer-link">About</Link></nav></li>
      </ul>
      <ul className="footer-icons">
        <li><a href="https://www.facebook.com" className="footer-icon">
            <i className="fa-brands fa-facebook"></i></a>
        </li>
        <li><a href="https://www.twitter.com" className="footer-icon">
            <i className="fa-brands fa-twitter"></i></a>
        </li>
        <li><a href="https://www.whatsapp.com" className="footer-icon">
            <i className="fa-brands fa-whatsapp"></i></a>
        </li>
      </ul>
      <p className="copyright">
        copyright &copy; Go Go ERB Company
        <span id="date">{currentYear}</span> all right reserved
      </p>
    </footer>
    </>
  )
}

export default Footer