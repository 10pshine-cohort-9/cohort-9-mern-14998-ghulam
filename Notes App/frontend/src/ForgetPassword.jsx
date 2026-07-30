import { useState } from "react";
import { Link } from "react-router-dom";
import "./AuthForms.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email });
    setSubmitted(true);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo-wrap">
          <div className="auth-logo">📝</div>
        </div>

        <h1 className="auth-title">Forgot Password?</h1>
        <p className="auth-subtitle">
          Enter your email to reset your password
        </p>

        {submitted ? (
          <p className="auth-subtitle">
            If this email exists, a reset link has been sent.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="auth-form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="auth-input"
            />

            <button type="submit" className="auth-button">
              Send Reset Link
            </button>
          </form>
        )}

        <p className="auth-footer">
          Remembered your password?{" "}
          <Link to="/login" className="auth-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}