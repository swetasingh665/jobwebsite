import React, { useState } from "react";
import "./PostJob.css";

function PostJob() {

  // FORM STATE

  const [jobData, setJobData] = useState({
    role: "",
    company: "",
    location: "",
    salary: "",
    experience: "",
    type: "",
    skills: "",
    description: "",
  });

  // HANDLE CHANGE

  const handleChange = (e) => {
    setJobData({
      ...jobData,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT FUNCTION

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`
Job Posted Successfully!

Role: ${jobData.role}
Company: ${jobData.company}
    `);

    // RESET FORM

    setJobData({
      role: "",
      company: "",
      location: "",
      salary: "",
      experience: "",
      type: "",
      skills: "",
      description: "",
    });
  };

  return (

    <div className="postjob-page">

      {/* HEADER */}

      <div className="postjob-header">

        <h1>
          Post a New Job
        </h1>

        <p>
          Hire top talent for your company
        </p>

      </div>

      {/* FORM */}

      <form
        className="postjob-form"
        onSubmit={handleSubmit}
      >

        {/* JOB ROLE */}

        <input
          type="text"
          name="role"
          placeholder="Job Role"
          value={jobData.role}
          onChange={handleChange}
          required
        />

        {/* COMPANY NAME */}

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={jobData.company}
          onChange={handleChange}
          required
        />

        {/* LOCATION */}

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={jobData.location}
          onChange={handleChange}
          required
        />

        {/* SALARY */}

        <input
          type="text"
          name="salary"
          placeholder="Salary"
          value={jobData.salary}
          onChange={handleChange}
          required
        />

        {/* EXPERIENCE */}

        <select
          name="experience"
          value={jobData.experience}
          onChange={handleChange}
          required
        >

          <option value="">
            Experience
          </option>

          <option value="Fresher">
            Fresher
          </option>

          <option value="1 Year">
            1 Year
          </option>

          <option value="2 Years">
            2 Years
          </option>

          <option value="3 Years">
            3 Years
          </option>

        </select>

        {/* JOB TYPE */}

        <select
          name="type"
          value={jobData.type}
          onChange={handleChange}
          required
        >

          <option value="">
            Job Type
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

          <option value="Internship">
            Internship
          </option>

        </select>

        {/* SKILLS */}

        <input
          type="text"
          name="skills"
          placeholder="Skills Required"
          value={jobData.skills}
          onChange={handleChange}
          required
        />

        {/* DESCRIPTION */}

        <textarea
          name="description"
          placeholder="Job Description"
          rows="6"
          value={jobData.description}
          onChange={handleChange}
          required
        ></textarea>

        {/* SUBMIT BUTTON */}

        <button type="submit">
          Post Job
        </button>

      </form>

    </div>

  );
}

export default PostJob;