import React, { useState } from "react";
import "./Home.css";

function Home() {

  // JOB DATA

  const jobsData = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "Google",
      location: "Delhi",
      salary: "₹50,000",
      experience: "1 Year",
      type: "Full-time",
    },

    {
      id: 2,
      role: "Backend Developer",
      company: "Microsoft",
      location: "Noida",
      salary: "₹70,000",
      experience: "2 Years",
      type: "Remote",
    },

    {
      id: 3,
      role: "UI/UX Designer",
      company: "Amazon",
      location: "Gurgaon",
      salary: "₹45,000",
      experience: "3 Years",
      type: "Part-time",
    },

    {
      id: 4,
      role: "MERN Stack Developer",
      company: "Infosys",
      location: "Bangalore",
      salary: "₹80,000",
      experience: "2 Years",
      type: "Full-time",
    },

    {
      id: 5,
      role: "React Intern",
      company: "TCS",
      location: "Noida",
      salary: "₹20,000",
      experience: "Fresher",
      type: "Internship",
    },
  ];

  // STATES

  const [jobRole, setJobRole] = useState("");
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");

  const handleApply = (jobRole) => {
  alert(`Applied Successfully for ${jobRole}`);
};

  // FILTERED JOBS

  const filteredJobs = jobsData.filter((job) => {

    const matchRole =
      job.role.toLowerCase().includes(jobRole.toLowerCase());

    const matchLocation =
      job.location.toLowerCase().includes(location.toLowerCase());

    const matchType =
      job.type.toLowerCase().includes(jobType.toLowerCase());

    const matchExperience =
      job.experience.toLowerCase().includes(experience.toLowerCase());

    return (
      matchRole &&
      matchLocation &&
      matchType &&
      matchExperience
    );

  });

  return (

    <div className="home">

      {/* HERO */}

      <section className="hero">

        <div className="hero-overlay">

          <h1>
            Find Your Dream Job Today
          </h1>

          <p>
            Search thousands of jobs from top companies
          </p>

          {/* SEARCH BOX */}

          <div className="search-box">

            {/* JOB ROLE */}

            <select
              value={jobRole}
              onChange={(e) => setJobRole(e.target.value)}
              >

              <option value="">
                Job Role
              </option>

              <option value="Frontend Developer">
                Frontend Developer
              </option>

              <option value="Backend Developer">
                Backend Developer
              </option>

              <option value="UI/UX Designer">
                UI/UX Designer
              </option>

              <option value="MERN Stack Developer">
                MERN Stack Developer
              </option>

              <option value="React Intern">
                React Intern
              </option>

            </select>

            {/* JOB TYPE */}

            <select
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            >

              <option value="">
                Job Type
              </option>

              <option value="Internship">
                Internship
              </option>

              <option value="Full-time">
                Full-time
              </option>

              <option value="Remote">
                Remote
              </option>

              <option value="Part-time">
                Part-time
              </option>

            </select>

            {/* LOCATION */}

            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >

              <option value="">
                Location
              </option>

              <option value="Delhi">
                Delhi
              </option>

              <option value="Mumbai">
                Mumbai
              </option>

              <option value="Bangalore">
                Bangalore
              </option>

              <option value="Gurgaon">
                Gurgaon
              </option>

              <option value="Noida">
                Noida
              </option>

            </select>

            {/* EXPERIENCE */}

            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            >

              <option value="">
                Experience
              </option>

              <option value="Fresher">
                Fresher
              </option>

              <option value="1">
                1 Year
              </option>

              <option value="2">
                2 Years
              </option>

              <option value="3">
                3 Years
              </option>

            </select>

          </div>

        </div>

      </section>

      {/* JOBS */}

      <section className="jobs-section">

        <div className="section-title">

          <h2>
            Featured Jobs
          </h2>

        </div>

        <div className="jobs-grid">

          {filteredJobs.length > 0 ? (

            filteredJobs.map((job) => (

              <div className="job-card" key={job.id}>

                <div className="job-top">

                  <div className="company-logo">
                    {job.company.charAt(0)}
                  </div>

                  <div>

                    <h3>{job.role}</h3>

                    <span>{job.company}</span>

                  </div>

                </div>

                <div className="job-details">

                  <p>
                    📍 {job.location}
                  </p>

                  <p>
                    💼 {job.type}
                  </p>

                  <p>
                    ⏳ {job.experience}
                  </p>

                  <p>
                    💰 {job.salary}
                  </p>

                </div>

               <button
  className="apply-btn"
  onClick={() => handleApply(job.role)}
>
  Apply Now
</button>

              </div>

            ))

          ) : (

            <h2 className="no-job">
              No Jobs Found
            </h2>

          )}

        </div>

      </section>

    </div>

  );
}

export default Home;