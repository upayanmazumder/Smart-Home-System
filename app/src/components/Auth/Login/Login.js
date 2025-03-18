import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authStyles from "../Auth.module.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch("https://api.smart-home-system.upayan.dev/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                alert("Login successful!");
                navigate("/dashboard"); // Redirect after login
            } else {
                setError(data.message || "Login failed");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div className={authStyles.formContainer}>
            <h2 className={authStyles.formHeading}>Login</h2>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <br />
                {error && <p className={authStyles.error}>{error}</p>}
                <button type="submit">Login</button>
                <p>Don't have an account? <a href="/auth/signup">Sign up</a></p>
                <p><a href="/auth/forgot-password">Forgot Password?</a></p>
            </form>
        </div>
    );
};

export default Login;
