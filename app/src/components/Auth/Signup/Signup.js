import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import authStyles from "../Auth.module.css";
import API_URL from "../../../data/api";

const Signup = () => {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });
    const [message, setMessage] = useState(""); 
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(""); 

        try {
            const response = await fetch(`${API_URL}/auth/signup`, {
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
                setTimeout(() => navigate("/auth/login"), 1500); 
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
            <   label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                <br />
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
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
