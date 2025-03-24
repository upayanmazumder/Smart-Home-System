import { useState, useEffect } from "react";
import contactStyles from "./Contact.module.css";
import API_URL from "../../data/api";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setFormData((prev) => ({
                ...prev,
                name: user.name || "",
                email: user.email || "",
            }));
        }
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Submitting...");

        try {
            const response = await fetch(`${API_URL}/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                setStatus("Message sent successfully!");
                setFormData({ name: formData.name, email: formData.email, message: "" });
            } else {
                setStatus(result.error || "Something went wrong.");
            }
        } catch (error) {
            setStatus("Failed to send message. Try again later.");
        }
    };

    return (
        <form className={contactStyles.contactForm} onSubmit={handleSubmit}>
            <div className={contactStyles.formGroup}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className={contactStyles.formGroup}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className={contactStyles.formGroup}>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit">Submit</button>
            {status && <p className={contactStyles.status}>{status}</p>}
        </form>
    );
};

export default Contact;
