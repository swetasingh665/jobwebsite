import React, { useState } from "react";
import { Link } from "react-router-dom";
/*import about from "../assets/about.png";*/

import {
  FaHome,
  FaBriefcase,
  FaBuilding,
  FaPlusSquare,
  FaBell,
  FaUser,
  FaSignInAlt,
  FaUserPlus
} from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LEFT */}
      <div className="nav-left">
        <h2 className="logo">Job Portal</h2>

        <input
          type="text"
          placeholder="Search jobs..."
          className="search"
        />
      </div>

      {/* MOBILE MENU BUTTON */}
      <div className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* RIGHT LINKS */}
      <div className={`nav-links ${open ? "active" : ""}`}>

        <Link to="/" className="nav-item">
          <FaHome />
          <span>Home</span>
        </Link>

        <Link to="/jobs" className="nav-item">
          <FaBriefcase />
          <span>Jobs</span>
        </Link>

        <Link to="/companies" className="nav-item">
          <FaBuilding />
          <span>Companies</span>
        </Link>

        <Link to="/post-job" className="nav-item">
          <FaPlusSquare />
          <span>Post Job</span>
        </Link>

        <Link to="/notifications" className="nav-item">
          <FaBell />
          <span>Notifications</span>
        </Link>

        <Link to="/profile" className="nav-item">
          <FaUser />
          <span>Profile</span>
        </Link>

        <Link to="/login" className="nav-item">
          <FaSignInAlt />
          <span>Login</span>
        </Link>

        <Link to="/signup" className="nav-item signup">
          <FaUserPlus />
          <span>Signup</span>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;