import React, { useState } from "react";
import "./PostJob.css";

function PostJob() {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  // ✅ validation function
  const validate = () => {
    let newErrors = {};

    if (!job.title) newErrors.title = "Job title required";
    if (!job.company) newErrors.company = "Company required";
    if (!job.location) newErrors.location = "Location required";
    if (!job.type) newErrors.type = "Select job type";
    if (!job.description) newErrors.description = "Description required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    // 🔥 Save job
    const existingJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    localStorage.setItem("jobs", JSON.stringify([...existingJobs, job]));

    // 🔔 Save notification
    const existingNoti = JSON.parse(localStorage.getItem("notifications")) || [];
    const newNoti = {
      message: `New job: ${job.title} at ${job.company}`,
      time: new Date().toLocaleString(),
    };

    localStorage.setItem(
      "notifications",
      JSON.stringify([newNoti, ...existingNoti])
    );

    alert("Job Posted ✅");

    setJob({
      title: "",
      company: "",
      location: "",
      type: "",
      description: "",
    });
  };

  return (
    <div className="postjob-container">
      <form className="postjob-form" onSubmit={handleSubmit}>
        <h2>Post a Job</h2>

        <input name="title" placeholder="Job Title" value={job.title} onChange={handleChange} />
        {errors.title && <p className="error">{errors.title}</p>}

        <input name="company" placeholder="Company Name" value={job.company} onChange={handleChange} />
        {errors.company && <p className="error">{errors.company}</p>}

        <input name="location" placeholder="Location" value={job.location} onChange={handleChange} />
        {errors.location && <p className="error">{errors.location}</p>}

        <select name="type" value={job.type} onChange={handleChange}>
          <option value="">Select Job Type</option>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Internship</option>
        </select>
        {errors.type && <p className="error">{errors.type}</p>}

        <textarea
          name="description"
          placeholder="Description"
          value={job.description}
          onChange={handleChange}
        />
        {errors.description && <p className="error">{errors.description}</p>}

        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}

export default PostJob;