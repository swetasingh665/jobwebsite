import React from "react";
import "./Companies.css";

function Companies() {

  // COMPANY DATA

  const companies = [

    {
      id: 1,
      name: "Google",
      jobs: "120 Jobs Available",
      role: "Frontend Developer",
      location: "Delhi",
    },

    {
      id: 2,
      name: "Microsoft",
      jobs: "95 Jobs Available",
      role: "Backend Developer",
      location: "Noida",
    },

    {
      id: 3,
      name: "Amazon",
      jobs: "150 Jobs Available",
      role: "UI/UX Designer",
      location: "Gurgaon",
    },

    {
      id: 4,
      name: "Infosys",
      jobs: "80 Jobs Available",
      role: "MERN Stack Developer",
      location: "Bangalore",
    },

    {
      id: 5,
      name: "TCS",
      jobs: "110 Jobs Available",
      role: "React Intern",
      location: "Noida",
    },

    {
      id: 6,
      name: "Wipro",
      jobs: "70 Jobs Available",
      role: "Java Developer",
      location: "Pune",
    },

  ];

  // BUTTON FUNCTION

  const handleViewJobs = (companyName) => {
    alert(`Opening jobs for ${companyName}`);
  };

  return (

    <div className="companies">

      {/* TITLE */}

      <div className="companies-title">

        <h1>Top Companies</h1>

        <p>
          Explore jobs from top companies
        </p>

      </div>

      {/* COMPANY GRID */}

      <div className="companies-grid">

        {companies.map((company) => (

          <div className="company-card" key={company.id}>

            {/* COMPANY LOGO */}

            <div className="company-logo">
              {company.name.charAt(0)}
            </div>

            {/* COMPANY DETAILS */}

            <h2>{company.name}</h2>

            <p className="job-count">
              {company.jobs}
            </p>

            <div className="company-info">

              <p>
                💼 {company.role}
              </p>

              <p>
                📍 {company.location}
              </p>

            </div>

            {/* BUTTON */}

            <button
              className="view-btn"
              onClick={() => handleViewJobs(company.name)}
            >
              View Jobs
            </button>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Companies;