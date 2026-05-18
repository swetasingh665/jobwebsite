import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

function Login() {

  const navigate = useNavigate();

  // FORM STATE

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // ERROR STATE

  const [error, setError] = useState("");

  // SHOW PASSWORD

  const [showPassword, setShowPassword] = useState(false);

  // HANDLE CHANGE

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // LOGIN FUNCTION

  const handleLogin = (e) => {

    e.preventDefault();

    // DEMO LOGIN

    const demoEmail = "admin@gmail.com";
    const demoPassword = "123456";

    // VALIDATION

    if (
      formData.email === demoEmail &&
      formData.password === demoPassword
    ) {

      alert("Login Successful!");

      navigate("/");

    } else {

      setError("Invalid Email or Password");

    }

  };

  return (

    <div className="auth-page">

      {/* LOGIN CARD */}

      <div className="auth-card">

        <h1>
          Welcome Back
        </h1>

        <p>
          Login to continue
        </p>

        {/* FORM */}

        <form onSubmit={handleLogin}>

          {/* EMAIL */}

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* PASSWORD */}

          <div className="password-box">

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
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

          {/* ERROR */}

          {error && (
            <p className="error-text">
              {error}
            </p>
          )}

          {/* BUTTON */}

          <button type="submit">
            Login
          </button>

        </form>

        {/* SIGNUP */}

        <div className="auth-footer">

          <p>
            Don't have an account?
          </p>

          <Link to="/signup">
            Signup
          </Link>

        </div>

      </div>

    </div>

  );
}

export default Login;