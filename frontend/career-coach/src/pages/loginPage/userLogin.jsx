import React, { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      // Registration logic here
      alert("Registration submitted! (Demo only)");
    } else {
      // Login logic here
      alert("Login submitted! (Demo only)");
    }
  };

  return (
    <>
      <h1 className={styles["login-header"]}>Compass Career Coaching</h1>
      <div className={styles["login-container"]}>
        <div className={styles["login-title"]}>
          {isRegister ? "Register" : "Login"}
        </div>
        <form className={styles["login-form"]} onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <div className={styles["password-input-wrapper"]}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className={styles["password-input"]}
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className={styles["password-toggle-btn"]}
              tabIndex={-1}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                // Eye open SVG
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#222"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <ellipse cx="12" cy="12" rx="8" ry="5" />
                  <circle cx="12" cy="12" r="2.5" fill="#222" />
                </svg>
              ) : (
                // Eye with slash SVG
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#222"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <ellipse cx="12" cy="12" rx="8" ry="5" />
                  <circle cx="12" cy="12" r="2.5" fill="#222" />
                  <line
                    x1="4"
                    y1="20"
                    x2="20"
                    y2="4"
                    stroke="#222"
                    strokeWidth="2.2"
                  />
                </svg>
              )}
            </button>
          </div>
          <button className={styles["login-btn"]} type="submit">
            {isRegister ? "Register" : "Login"}
          </button>
        </form>
        <div className={styles["login-register"]}>
          {isRegister ? (
            <>
              Already have an account?
              <span onClick={() => setIsRegister(false)}>Login</span>
            </>
          ) : (
            <>
              Don't have an account?
              <span onClick={() => setIsRegister(true)}>Register</span>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
