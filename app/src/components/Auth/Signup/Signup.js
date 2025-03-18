import { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation after signup
import authStyles from "../Auth.module.css";

const Signup = () => {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });
    const [message, setMessage] = useState(""); // Success/error message
    const navigate = useNavigate();

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(""); // Reset messages

        try {
            const response = await fetch("https://api.smart-home-system.upayan.dev/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.username,
                    email: formData.email,
                    password: formData.password
                })
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("Signup successful! Redirecting...");
                setTimeout(() => navigate("/auth/login"), 1500); // Redirect after success
            } else {
                setMessage(data.message || "Signup failed.");
            }
        } catch (error) {
            setMessage("Network error. Please try again.");
        }
    };

    return (
        <div className={authStyles.formContainer}>
            <h2 className={authStyles.formHeading}>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                <br />
                <button type="submit">Signup</button>
                <p>Already have an account? <a href="/auth/login">Sign in</a></p>
            </form>
            {message && <p className={authStyles.message}>{message}</p>}
        </div>
    );
};

export default Signup;
