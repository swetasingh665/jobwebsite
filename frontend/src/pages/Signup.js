import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Signup() {

  const navigate = useNavigate();

  // FORM STATE

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // ERROR STATE

  const [error, setError] = useState("");

  // SUCCESS MESSAGE

  const [success, setSuccess] = useState("");

  // SHOW PASSWORD

  const [showPassword, setShowPassword] = useState(false);

  // HANDLE INPUT CHANGE

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // SIGNUP FUNCTION

  const handleSignup = (e) => {

    e.preventDefault();

    // EMPTY CHECK

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {

      setError("Please fill all fields");
      setSuccess("");

      return;
    }

    // EMAIL VALIDATION

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(formData.email)) {

      setError("Invalid Email Address");
      setSuccess("");

      return;
    }

    // PASSWORD LENGTH

    if (formData.password.length < 6) {

      setError(
        "Password must be at least 6 characters"
      );

      setSuccess("");

      return;
    }

    // PASSWORD MATCH

    if (
      formData.password !==
      formData.confirmPassword
    ) {

      setError("Passwords do not match");
      setSuccess("");

      return;
    }

    // SAVE USER

    localStorage.setItem(
      "user",
      JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      })
    );

    // SUCCESS

    setError("");

    setSuccess(
      "Account Created Successfully!"
    );

    // RESET FORM

    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    // REDIRECT LOGIN

    setTimeout(() => {

      navigate("/login");

    }, 2000);

  };

  return (

    <div className="auth-page">

      {/* SIGNUP CARD */}

      <div className="auth-card">

        <h1>
          Create Account
        </h1>

        <p>
          Signup to continue
        </p>

        {/* FORM */}

        <form onSubmit={handleSignup}>

          {/* FULL NAME */}

          <input
            type="text"
            name="fullName"
            placeholder="Enter Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />

          {/* EMAIL */}

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />

          {/* PASSWORD */}

          <div className="password-box">

            <input
              type={
                showPassword ? "text" : "password"
              }
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
            />

            <span
              className="show-btn"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? "Hide" : "Show"}
            </span>

          </div>

          {/* CONFIRM PASSWORD */}

          <input
            type={
              showPassword ? "text" : "password"
            }
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          {/* ERROR */}

          {error && (
            <p className="error-text">
              {error}
            </p>
          )}

          {/* SUCCESS */}

          {success && (
            <p className="success-text">
              {success}
            </p>
          )}

          {/* BUTTON */}

          <button type="submit">
            Create Account
          </button>

        </form>

        {/* LOGIN */}

        <div className="auth-footer">

          <p>
            Already have an account?
          </p>

          <Link to="/login">
            Login
          </Link>

        </div>

      </div>

    </div>

  );
}

export default Signup;