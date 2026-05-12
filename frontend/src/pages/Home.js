import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [search, setSearch] = useState("");

  const jobs = [
    { title: "Frontend Developer", company: "Google", location: "Delhi" },
    { title: "Backend Developer", company: "Amazon", location: "Noida" },
    { title: "Full Stack Developer", company: "Microsoft", location: "Gurgaon" }
  ];

  const handleApply = (job) => {
    alert(`Applied for ${job.title} at ${job.company} ✅`);
  };

  return (
    <div className="home">

      {/* LEFT SIDEBAR */}
      <div className="left">
        <div className="card profile">
          <h3>Sweta Singh</h3>
          <p>Frontend Developer</p>
          <hr />
          <p>Connections: 120</p>
          <p>Saved Jobs</p>
        </div>

        <div className="card">
          <h4>Quick Links</h4>
          <p>My Jobs</p>
          <p>Saved</p>
          <p>Applied</p>
        </div>
      </div>

      {/* CENTER */}
      <div className="center">

        {/* 🔍 SEARCH */}
        <div className="card search">
          <input
            value={search}   // 🔥 IMPORTANT
            placeholder="Search jobs, companies..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* 💼 JOB LIST */}
        {jobs
          .filter((job) =>
            job.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((job, i) => (
            <div className="card job" key={i}>
              <h4>{job.title}</h4>
              <p>{job.company} • {job.location}</p>
              <button onClick={() => handleApply(job)}>Apply</button>
            </div>
          ))}

        {/* 📰 FEED */}
        <div className="card post">
          <h4>Hiring Now 🚀</h4>
          <p>We are hiring React Developers</p>
        </div>

      </div>

      {/* RIGHT SIDEBAR */}
      <div className="right">
        <div className="card">
          <h3>Top Companies</h3>
          <p>Google</p>
          <p>Amazon</p>
          <p>Microsoft</p>
        </div>

        <div className="card">
          <h3>Notifications 🔔</h3>
          <p>You applied for a job</p>
          <p>New job match found</p>
        </div>

       
      </div>

    </div>
  );
}

export default Home;