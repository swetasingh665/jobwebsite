import React, { useState } from "react";
import ApplyJob from "./ApplyJob";
import "./JobSearch.css";

const jobsData = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Google",
    location: "Delhi",
    salary: "6 LPA",
    experience: "1-3 years",
    type: "Full-time"
  },
  {
    id: 2,
    role: "Backend Developer",
    company: "Amazon",
    location: "Bangalore",
    salary: "10 LPA",
    experience: "2-5 years",
    type: "Remote"
  },
  {
    id: 3,
    role: "UI Designer",
    company: "Infosys",
    location: "Delhi",
    salary: "4 LPA",
    experience: "Fresher",
    type: "Full-time"
  }
];

function JobSearch() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  const filteredJobs = jobsData.filter((job) => {
    return (
      (job.role.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase())) &&
      (location ? job.location === location : true) &&
      (type ? job.type === type : true)
    );
  });

  return (
    <div className="job-page">

      {/* 🔍 SEARCH BAR */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search role or company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 🎯 FILTERS */}
      <div className="filters">

        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="">Location</option>
          <option value="Delhi">Delhi</option>
          <option value="Bangalore">Bangalore</option>
        </select>

        <select onChange={(e) => setType(e.target.value)}>
          <option value="">Job Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Remote">Remote</option>
        </select>

      </div>

      {/* 💼 JOB LIST */}
      <div className="jobs">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job.role}</h3>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <p>{job.salary}</p>
              <p>{job.experience}</p>
              <span className="type">{job.type}</span>
            </div>
          ))
        ) : (
          <p>No jobs found ❌</p>
        )}
      </div>

    </div>
  );
}

export default JobSearch;