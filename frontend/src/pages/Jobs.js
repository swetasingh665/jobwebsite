import React from "react";
import "./Jobs.css";

function Jobs() {

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
      skills: "React, JavaScript, CSS",
    },

    {
      id: 2,
      role: "Backend Developer",
      company: "Microsoft",
      location: "Noida",
      salary: "₹70,000",
      experience: "2 Years",
      type: "Remote",
      skills: "Node.js, Express, MongoDB",
    },

    {
      id: 3,
      role: "UI/UX Designer",
      company: "Amazon",
      location: "Gurgaon",
      salary: "₹45,000",
      experience: "3 Years",
      type: "Part-time",
      skills: "Figma, Adobe XD",
    },

    {
      id: 4,
      role: "MERN Stack Developer",
      company: "Infosys",
      location: "Bangalore",
      salary: "₹80,000",
      experience: "2 Years",
      type: "Full-time",
      skills: "MongoDB, Express, React, Node",
    },

    {
      id: 5,
      role: "React Intern",
      company: "TCS",
      location: "Noida",
      salary: "₹20,000",
      experience: "Fresher",
      type: "Internship",
      skills: "HTML, CSS, React",
    },

  ];

  // APPLY FUNCTION

  const handleApply = (role) => {
    alert(`Applied Successfully for ${role}`);
  };

  // SAVE JOB FUNCTION

  const handleSaveJob = (role) => {
    alert(`${role} saved successfully`);
  };

  return (

    <div className="jobs-page">

      {/* HEADER */}

      <div className="jobs-header">

        <h1>
          Latest Jobs
        </h1>

        <p>
          Find your dream job today
        </p>

      </div>

      {/* JOB GRID */}

      <div className="jobs-grid">

        {jobsData.map((job) => (

          <div className="job-card" key={job.id}>

            {/* TOP SECTION */}

            <div className="job-top">

              <div className="company-logo">
                {job.company.charAt(0)}
              </div>

              <div>

                <h2>
                  {job.role}
                </h2>

                <span>
                  {job.company}
                </span>

              </div>

            </div>

            {/* JOB DETAILS */}

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

              <p>
                🛠 {job.skills}
              </p>

            </div>

            {/* APPLY BUTTON */}

            <button
              className="apply-btn"
              onClick={() => handleApply(job.role)}
            >
              Apply Now
            </button>

            {/* SAVE BUTTON */}

            <button
              className="save-btn"
              onClick={() => handleSaveJob(job.role)}
            >
              Save Job
            </button>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Jobs;