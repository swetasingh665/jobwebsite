import React from "react";

function ViewProfile() {
  const profile = JSON.parse(localStorage.getItem("profile"));

  return (
    <div>
      <h2>My Profile</h2>

      <p>Name: {profile?.name}</p>
      <p>Phone: {profile?.phone}</p>
      <p>Skills: {profile?.skills}</p>
      <p>Education: {profile?.education}</p>
      <p>Experience: {profile?.experience}</p>
    </div>
  );
}

export default ViewProfile;