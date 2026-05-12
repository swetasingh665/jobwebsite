import React, { useState } from "react";
import "./ProfileWizard.css";

function ProfileWizard() {

  const [step, setStep] = useState(1);

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    headline: "",
    about: "",
    skills: [],
    education: "",
    experience: "",
    resume: null,
    photo: null,
    jobRole: "",
    jobLocation: "",
    salary: ""
  });

  const [skillInput, setSkillInput] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const addSkill = () => {
    if (skillInput.trim()) {
      setData({ ...data, skills: [...data.skills, skillInput] });
      setSkillInput("");
    }
  };

  const handleFile = (e) => {
    setData({ ...data, [e.target.name]: e.target.files[0] });
  };

  // ✅ STEP VALIDATION
  const next = () => {

    if (step === 1) {
      if (!data.name || !data.email || !data.phone) {
        alert("Fill all basic details ❌");
        return;
      }
    }

    if (step === 2) {
      if (!data.headline) {
        alert("Add headline ❌");
        return;
      }
    }

    if (step === 4) {
      if (data.skills.length === 0) {
        alert("Add at least 1 skill ❌");
        return;
      }
    }

    setStep(step + 1);
  };

  const prev = () => setStep(step - 1);

  // ✅ FINAL SUBMIT VALIDATION
  const submit = () => {
    if (!data.name || !data.email) {
      alert("Incomplete profile ❌");
      return;
    }

    if (data.skills.length === 0) {
      alert("Skills required ❌");
      return;
    }

    alert("Profile Created Successfully ✅");
    console.log(data);
  };

  return (
    <div className="wizard">

      <h2>Step {step} / 8</h2>

      {/* STEP 1 */}
      {step === 1 && (
        <div>
          <h3>Basic Info</h3>
          <input name="name" placeholder="Full Name" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="phone" placeholder="Phone" onChange={handleChange} />
          <input name="location" placeholder="Location" onChange={handleChange} />
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div>
          <h3>Headline</h3>
          <input name="headline" placeholder="e.g. Frontend Developer" onChange={handleChange} />
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div>
          <h3>About</h3>
          <textarea name="about" placeholder="Tell about yourself" onChange={handleChange}></textarea>
        </div>
      )}

      {/* STEP 4 */}
      {step === 4 && (
        <div>
          <h3>Skills</h3>
          <input
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            placeholder="Add skill"
          />
          <button onClick={addSkill}>Add</button>

          <div className="skills">
            {data.skills.map((s, i) => (
              <span key={i}>{s}</span>
            ))}
          </div>
        </div>
      )}

      {/* STEP 5 */}
      {step === 5 && (
        <div>
          <h3>Education</h3>
          <textarea name="education" onChange={handleChange}></textarea>
        </div>
      )}

      {/* STEP 6 */}
      {step === 6 && (
        <div>
          <h3>Experience</h3>
          <textarea name="experience" onChange={handleChange}></textarea>
        </div>
      )}

      {/* STEP 7 */}
      {step === 7 && (
        <div>
          <h3>Upload</h3>

          <label>Resume</label>
          <input type="file" name="resume" onChange={handleFile} />

          <label>Photo</label>
          <input type="file" name="photo" onChange={handleFile} />
        </div>
      )}

      {/* STEP 8 */}
      {step === 8 && (
        <div>
          <h3>Job Preferences</h3>
          <input name="jobRole" placeholder="Preferred Role" onChange={handleChange} />
          <input name="jobLocation" placeholder="Preferred Location" onChange={handleChange} />
          <input name="salary" placeholder="Expected Salary" onChange={handleChange} />
        </div>
      )}

      {/* BUTTONS */}
      <div className="buttons">
        {step > 1 && <button onClick={prev}>Back</button>}

        {step < 8 ? (
          <button onClick={next}>Next</button>
        ) : (
          <button onClick={submit}>Finish</button>
        )}
      </div>

    </div>
  );
}

export default ProfileWizard;