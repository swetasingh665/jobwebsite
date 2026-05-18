import React from "react";
import "./Companies.css";

function Companies() {

  // COMPANIES DATA

  const companiesData = [

    {
      id: 1,
      name: "Google",
      logo: "https://logo.clearbit.com/google.com",
      industry: "Technology",
      location: "Delhi",
      jobs: 25,
      rating: "4.8",
    },

    {
      id: 2,
      name: "Microsoft",
      logo: "https://logo.clearbit.com/microsoft.com",
      industry: "Software",
      location: "Noida",
      jobs: 18,
      rating: "4.7",
    },

    {
      id: 3,
      name: "Amazon",
      logo: "https://logo.clearbit.com/amazon.com",
      industry: "E-Commerce",
      location: "Gurgaon",
      jobs: 30,
      rating: "4.6",
    },

    {
      id: 4,
      name: "Infosys",
      logo: "https://logo.clearbit.com/infosys.com",
      industry: "IT Services",
      location: "Bangalore",
      jobs: 15,
      rating: "4.5",
    },

    {
      id: 5,
      name: "TCS",
      logo: "https://logo.clearbit.com/tcs.com",
      industry: "Technology",
      location: "Mumbai",
      jobs: 20,
      rating: "4.4",
    },

    {
      id: 6,
      name: "Wipro",
      logo: "https://logo.clearbit.com/wipro.com",
      industry: "IT Company",
      location: "Hyderabad",
      jobs: 12,
      rating: "4.3",
    },

    {
      id: 7,
      name: "Apple",
      logo: "https://logo.clearbit.com/apple.com",
      industry: "Technology",
      location: "Pune",
      jobs: 10,
      rating: "4.9",
    },

    {
      id: 8,
      name: "Netflix",
      logo: "https://logo.clearbit.com/netflix.com",
      industry: "Entertainment",
      location: "Mumbai",
      jobs: 8,
      rating: "4.7",
    },

    {
      id: 9,
      name: "Adobe",
      logo: "https://logo.clearbit.com/adobe.com",
      industry: "Software",
      location: "Noida",
      jobs: 14,
      rating: "4.6",
    },

    {
      id: 10,
      name: "Meta",
      logo: "https://logo.clearbit.com/meta.com",
      industry: "Social Media",
      location: "Bangalore",
      jobs: 22,
      rating: "4.8",
    },

    {
      id: 11,
      name: "IBM",
      logo: "https://logo.clearbit.com/ibm.com",
      industry: "IT Services",
      location: "Delhi",
      jobs: 16,
      rating: "4.4",
    },

    {
      id: 12,
      name: "Accenture",
      logo: "https://logo.clearbit.com/accenture.com",
      industry: "Consulting",
      location: "Hyderabad",
      jobs: 28,
      rating: "4.5",
    },

  ];

  // VIEW JOBS FUNCTION

  const handleViewJobs = (companyName) => {
    alert(`Viewing jobs for ${companyName}`);
  };

  // FOLLOW FUNCTION

  const handleFollow = (companyName) => {
    alert(`You followed ${companyName}`);
  };

  return (

    <div className="companies-page">

      {/* HEADER */}

      <div className="companies-header">

        <h1>
          Top Hiring Companies
        </h1>

        <p>
          Explore companies hiring now
        </p>

      </div>

      {/* COMPANIES GRID */}

      <div className="companies-grid">

        {companiesData.map((company) => (

          <div className="company-card" key={company.id}>

            {/* COMPANY LOGO */}

            <img
              src={company.logo}
              alt={company.name}
              className="company-logo"
            />

            {/* COMPANY DETAILS */}

            <h2>
              {company.name}
            </h2>

            <p>
              🏢 {company.industry}
            </p>

            <p>
              📍 {company.location}
            </p>

            <p>
              💼 {company.jobs} Open Jobs
            </p>

            <p>
              ⭐ {company.rating} Rating
            </p>

            {/* VIEW JOBS BUTTON */}

            <button
              className="view-btn"
              onClick={() => handleViewJobs(company.name)}
            >
              View Jobs
            </button>

            {/* FOLLOW BUTTON */}

            <button
              className="follow-btn"
              onClick={() => handleFollow(company.name)}
            >
              Follow
            </button>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Companies;