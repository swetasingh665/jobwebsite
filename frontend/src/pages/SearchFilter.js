import React, { useState } from "react";
import "./SearchFilter.css";

function SearchFilter() {

  // JOB DATA

  const jobsData = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "Google",
      location: "Delhi",
      experience: "1 Year",
      type: "Full-time",
    },

    {
      id: 2,
      role: "Backend Developer",
      company: "Microsoft",
      location: "Noida",
      experience: "2 Years",
      type: "Remote",
    },

    {
      id: 3,
      role: "UI/UX Designer",
      company: "Amazon",
      location: "Gurgaon",
      experience: "3 Years",
      type: "Part-time",
    },
  ];

  // STATES

  const [jobRole, setJobRole] = useState("");
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");

  const [filteredJobs, setFilteredJobs] = useState(jobsData);

  // SEARCH FUNCTION

  const handleSearch = () => {

    const result = jobsData.filter((job) => {

      return (

        job.role.toLowerCase().includes(jobRole.toLowerCase()) &&

        job.location.toLowerCase().includes(location.toLowerCase()) &&

        job.type.toLowerCase().includes(jobType.toLowerCase()) &&

        job.experience.toLowerCase().includes(experience.toLowerCase())

      );

    });

    setFilteredJobs(result);
  };

  return (

    <div className="search-page">

      {/* SEARCH SECTION */}

      <div className="search-box">

        {/* JOB ROLE */}

        <input
          type="text"
          placeholder="Job Role"
          value={jobRole}
          onChange={(e) => setJobRole(e.target.value)}
        />

        {/* JOB TYPE */}

        <select
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
        >
          <option value="">Job Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Remote">Remote</option>
          <option value="Part-time">Part-time</option>
        </select>

        {/* LOCATION */}

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        {/* EXPERIENCE */}

        <select
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        >
          <option value="">Experience</option>
          <option value="1">1 Year</option>
          <option value="2">2 Years</option>
          <option value="3">3 Years</option>
        </select>

        {/* SEARCH BUTTON */}

        <button onClick={handleSearch}>
          Search
        </button>

      </div>

      {/* JOB CARDS */}

      <div className="jobs-container">

        {filteredJobs.length > 0 ? (

          filteredJobs.map((job) => (

            <div className="job-card" key={job.id}>

              <h2>{job.role}</h2>

              <p>
                <strong>Company:</strong> {job.company}
              </p>

              <p>
                <strong>Location:</strong> {job.location}
              </p>

              <p>
                <strong>Experience:</strong> {job.experience}
              </p>

              <p>
                <strong>Job Type:</strong> {job.type}
              </p>

              <button className="apply-btn">
                Apply Now
              </button>

            </div>

          ))

        ) : (

          <h2>No Jobs Found</h2>

        )}

      </div>

    </div>

  );
}

export default SearchFilter;