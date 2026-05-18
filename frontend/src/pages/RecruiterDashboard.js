import React from "react";
import "./RecruiterDashboard.css";

function RecruiterDashboard() {
  const jobs = [
    {
      id: 1,
      role: "Frontend Developer",
      applicants: 45,
      location: "Noida",
      status: "Active",
    },
    {
      id: 2,
      role: "Backend Developer",
      applicants: 30,
      location: "Delhi",
      status: "Pending",
    },
    {
      id: 3,
      role: "UI/UX Designer",
      applicants: 20,
      location: "Bangalore",
      status: "Active",
    },
  ];

  return (
    <div className="recruiter-container">

      {/* Sidebar */}
      <div className="recruiter-sidebar">
        <h2 className="recruiter-logo">Recruiter Panel</h2>

        <ul className="recruiter-menu">
          <li>Dashboard</li>
          <li>Post Jobs</li>
          <li>Manage Jobs</li>
          <li>Applications</li>
          <li>Company Profile</li>
          <li>Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="recruiter-main">

        {/* Header */}
        <div className="recruiter-header">
          <div>
            <h1>Recruiter Dashboard</h1>
            <p>Manage jobs and applicants</p>
          </div>

          <button className="post-job-btn">
            + Post New Job
          </button>
        </div>

        {/* Stats */}
        <div className="recruiter-stats">

          <div className="recruiter-card">
            <h3>Total Jobs</h3>
            <h1>24</h1>
          </div>

          <div className="recruiter-card">
            <h3>Total Applicants</h3>
            <h1>420</h1>
          </div>

          <div className="recruiter-card">
            <h3>Active Jobs</h3>
            <h1>18</h1>
          </div>

          <div className="recruiter-card">
            <h3>Shortlisted</h3>
            <h1>52</h1>
          </div>

        </div>

        {/* Jobs Table */}
        <div className="jobs-section">
          <h2>Posted Jobs</h2>

          <table className="recruiter-table">
            <thead>
              <tr>
                <th>Job Role</th>
                <th>Applicants</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td>{job.role}</td>
                  <td>{job.applicants}</td>
                  <td>{job.location}</td>
                  <td>
                    <span
                      className={
                        job.status === "Active"
                          ? "active-status"
                          : "pending-status"
                      }
                    >
                      {job.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}

export default RecruiterDashboard;