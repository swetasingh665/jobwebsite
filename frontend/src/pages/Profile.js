import React, { useState } from "react";
import "./Profile.css";

function Profile() {

  // USER DATA

  const [user, setUser] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    location: "",
    skills: "",
    experience: "",
    education: "",
    about: "",
  });

  // RESUME

  const [resume, setResume] = useState(null);

  // MESSAGE

  const [message, setMessage] = useState("");

  // EDIT MODE

  const [isEditing, setIsEditing] = useState(true);

  // HANDLE INPUT CHANGE

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

  };

  // HANDLE RESUME

  const handleResumeChange = (e) => {

    setResume(e.target.files[0]);

    setMessage("");

  };

  // SAVE PROFILE

  const handleSave = () => {

    // CHECK EMPTY FIELDS

    if (
      !user.name ||
      !user.role ||
      !user.email ||
      !user.phone ||
      !user.location ||
      !user.skills ||
      !user.experience ||
      !user.education ||
      !user.about
    ) {

      alert("Please fill all profile details.");

      return;

    }

    // CHECK RESUME

    if (!resume) {

      alert("Please upload your resume.");

      return;

    }

    // SAVE PROFILE

    setIsEditing(false);

    setMessage("Profile & Resume Saved Successfully!");

  };

  // EDIT PROFILE

  const handleEdit = () => {

    setIsEditing(true);

    setMessage("");

  };

  return (

    <div className="profile-page">

      {/* PROFILE CARD */}

      <div className="profile-card">

        {/* PROFILE IMAGE */}

        <div className="profile-image">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="profile"
          />

        </div>

        {/* PROFILE INFO */}

        <div className="profile-info">

          {/* NAME */}

          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={user.name}
            onChange={handleChange}
            disabled={!isEditing}
          />

          {/* ROLE */}

          <input
            type="text"
            name="role"
            placeholder="Enter Your Role"
            value={user.role}
            onChange={handleChange}
            disabled={!isEditing}
          />

          {/* EMAIL */}

          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={user.email}
            onChange={handleChange}
            disabled={!isEditing}
          />

          {/* PHONE */}

          <input
            type="text"
            name="phone"
            placeholder="Enter Your Phone Number"
            value={user.phone}
            onChange={handleChange}
            disabled={!isEditing}
          />

          {/* LOCATION */}

          <input
            type="text"
            name="location"
            placeholder="Enter Your Location"
            value={user.location}
            onChange={handleChange}
            disabled={!isEditing}
          />

          {/* SKILLS */}

          <textarea
            name="skills"
            placeholder="Enter Your Skills"
            value={user.skills}
            onChange={handleChange}
            disabled={!isEditing}
          ></textarea>

          {/* EXPERIENCE */}

          <input
            type="text"
            name="experience"
            placeholder="Enter Your Experience"
            value={user.experience}
            onChange={handleChange}
            disabled={!isEditing}
          />

          {/* EDUCATION */}

          <input
            type="text"
            name="education"
            placeholder="Enter Your Education"
            value={user.education}
            onChange={handleChange}
            disabled={!isEditing}
          />

          {/* ABOUT */}

          <textarea
            name="about"
            placeholder="Write About Yourself"
            value={user.about}
            onChange={handleChange}
            disabled={!isEditing}
          ></textarea>

          {/*{/* RESUME SECTION */}

          <div className="resume-box">

            <h2>Upload Resume</h2>

            {/* HIDDEN INPUT */}

            <input
              type="file"
              id="resumeUpload"
              className="hidden-input"
              onChange={handleResumeChange}
              disabled={!isEditing}
            />

            {/* CUSTOM BUTTON */}

            <label
              htmlFor="resumeUpload"
              className="choose-btn"
            >
              Choose Resume
            </label>

            {/* FILE NAME */}

            {resume && (
              <p className="resume-name">
                {resume.name}
              </p>
            )}

          </div>

          {/* BUTTONS */}

          <div className="profile-buttons">

            {isEditing ? (

              <button
                className="save-btn"
                onClick={handleSave}
              >
                Save Profile
              </button>

            ) : (

              <button
                className="edit-btn"
                onClick={handleEdit}
              >
                Edit Profile
              </button>

            )}

          </div>

          {/* SUCCESS MESSAGE */}

          {message && (
            <p className="success-message">
              {message}
            </p>
          )}

        </div>

      </div>

    </div>

  );
}

export default Profile;