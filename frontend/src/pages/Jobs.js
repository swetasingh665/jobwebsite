import React, { useState } from "react";
import "./Jobs.css";

const jobsData = [
  { id: 1, title: "Frontend Developer", company: "Google", location: "Delhi", category: "IT" },
  { id: 2, title: "Backend Developer", company: "Amazon", location: "Bangalore", category: "IT" },
  { id: 3, title: "UI/UX Designer", company: "Adobe", location: "Mumbai", category: "Design" },
  { id: 4, title: "HR Executive", company: "Reliance", location: "Mumbai", category: "HR" },
  { id: 5, title: "Data Analyst", company: "Accenture", location: "Delhi", category: "Data" },
  { id: 6, title: "React Developer", company: "Infosys", location: "Chennai", category: "IT" },
  { id: 7, title: "Java Developer", company: "HCL", location: "Gurgaon", category: "IT" },
  { id: 8, title: "Marketing Manager", company: "Zomato", location: "Delhi", category: "Marketing" },
  { id: 9, title: "DevOps Engineer", company: "IBM", location: "Bangalore", category: "IT" },
  { id: 10, title: "Product Manager", company: "Flipkart", location: "Bangalore", category: "Management" },
  { id: 11, title: "Cloud Engineer", company: "Oracle", location: "Mumbai", category: "IT" },
  { id: 12, title: "Cyber Security", company: "Deloitte", location: "Delhi", category: "Security" },
  { id: 13, title: "AI Engineer", company: "Nvidia", location: "Pune", category: "AI" },
  { id: 14, title: "ML Engineer", company: "Meta", location: "Remote", category: "AI" },
  { id: 15, title: "QA Tester", company: "Cognizant", location: "Hyderabad", category: "Testing" },
  { id: 16, title: "Angular Dev", company: "Paytm", location: "Noida", category: "IT" },
  { id: 17, title: "Mobile Dev", company: "Swiggy", location: "Bangalore", category: "IT" },
  { id: 18, title: "Finance Analyst", company: "TCS", location: "Pune", category: "Finance" },
  { id: 19, title: "Graphic Designer", company: "Canva", location: "Remote", category: "Design" },
  { id: 20, title: "Support Executive", company: "Wipro", location: "Noida", category: "Support" }
];

function Jobs() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [appliedJobs, setAppliedJobs] = useState([]);

  // 🔥 Apply function
  const handleApply = (job) => {
    setAppliedJobs([...appliedJobs, job.id]);
    alert(`You applied for ${job.title}`);
  };

  const filteredJobs = jobsData.filter((job) => {
    return (
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || job.category === category)
    );
  });

  return (
    <div className="jobs-container">

      <h1>Find Your Dream Job</h1>

      {/* 🔍 Search + Filter */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setCategory(e.target.value)}>
          <option>All</option>
          <option>IT</option>
          <option>Design</option>
          <option>HR</option>
          <option>Marketing</option>
          <option>Finance</option>
          <option>AI</option>
        </select>
      </div>

      {/* 🧾 Job Cards */}
      <div className="jobs-grid">
        {filteredJobs.map((job) => (
          <div key={job.id} className="job-card">

            <h3>{job.title}</h3>
            <p className="company">{job.company}</p>
            <p className="location">{job.location}</p>
            <span className="tag">{job.category}</span>

            {/* 🔥 UPDATED BUTTON */}
            <button
              className="apply-btn"
              onClick={() => handleApply(job)}
              disabled={appliedJobs.includes(job.id)}
            >
              {appliedJobs.includes(job.id) ? "Applied" : "Apply"}
            </button>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Jobs;