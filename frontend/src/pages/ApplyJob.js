import React, { useState } from "react";
import "./ApplyJob.css";

function ApplyJob({ job }) {
  const [show, setShow] = useState(false);
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState("");

  const handleApply = () => {
    if (!resume) {
      alert("Please upload resume ❌");
      return;
    }

    // backend send (later)
    console.log({
      jobId: job.id,
      resume,
      coverLetter
    });

    alert("Applied Successfully ✅");
    setShow(false);
  };

  return (
    <div>

      {/* APPLY BUTTON */}
      <button className="apply-btn" onClick={() => setShow(true)}>
        Apply
      </button>

      {/* POPUP */}
      {show && (
        <div className="popup">
          <div className="popup-content">

            <h3>Apply for {job.role}</h3>

            {/* Resume Upload */}
            <label>Upload Resume (PDF)</label>
            <input
              type="file"
              onChange={(e) => setResume(e.target.files[0])}
            />

            {/* Cover Letter */}
            <label>Cover Letter</label>
            <textarea
              placeholder="Write your cover letter..."
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
            />

            {/* Buttons */}
            <div className="actions">
              <button onClick={handleApply}>Submit</button>
              <button onClick={() => setShow(false)}>Cancel</button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default ApplyJob;