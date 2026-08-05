import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Registration.css";

function Registration() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!formData.fullName || !formData.email || !formData.password) {
            setError("Please fill in all fields.");
            return;
        }

        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }
        navigate("/home");
        return;
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Registration failed.");
            }

            // Registration success — send user to login
            navigate("/login");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <div className="auth-icon">📝</div>

                <h1 className="auth-title">Create Account ✨</h1>
                <p className="auth-subtitle">Register to get started</p>

                {error && <div className="auth-error">{error}</div>}

                <form onSubmit={handleSubmit} noValidate>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        className="auth-input"
                        value={formData.fullName}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="auth-input"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="auth-input"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <button type="submit" className="auth-button" disabled={loading}>
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>

                <p className="auth-footer">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Registration;
