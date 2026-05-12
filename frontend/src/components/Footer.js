import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-links">

        <Link to="/about">About</Link>
        <Link to="/help">Help Center</Link>
        <Link to="/privacy">Privacy & Terms</Link>
        <Link to="/advertising">Advertising</Link>
        <Link to="/business">Business Services</Link>
        <Link to="/app">Get App</Link>
        <Link to="/more">More</Link>

      </div>

      <p>© 2026 JOB PORTAL</p>

    </footer>
  );
}

export default Footer;