import React from "react";
import aboutImg from "../assets/about.png";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-container">

      {/* 🔥 IMAGE SECTION */}
      <div className="about-image">
        <img src ={aboutImg} alt="About Job Portal" />
        
      </div>

      <h1>About Job Portal</h1>

      <p>
        Welcome to Job Portal, a modern platform that connects job seekers
        with top companies across the world.
      </p>

      <h2>Vision</h2>
      <p>
        Create employment opportunities for every individual globally.
      </p>

      <h2>Mission</h2>
      <p>
        Connect employers and job seekers to make hiring simple and fast.
      </p>

      <h2>Who We Are?</h2>
      <p>
        We help students and professionals find better career opportunities
        in IT, Marketing, Finance, Design and more.
      </p>

      <hr />

      {/* Services */}
      <div className="about-grid">

        <div className="card">
          <h3>Job Listings</h3>
          <p>Thousands of updated jobs daily.</p>
          <Link to="/jobs">Explore</Link>
        </div>

        <div className="card">
          <h3>Company Pages</h3>
          <p>Connect with hiring companies.</p>
          <Link to="/business">Explore</Link>
        </div>

        <div className="card">
          <h3>Career Help</h3>
          <p>Resume + Interview guidance.</p>
          <Link to="/help">Explore</Link>
        </div>

      </div>

      <p className="copyright">
        © 2026 JOB PORTAL
      </p>

    </div>
  );
}

export default About;