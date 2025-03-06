import contactStyles from "./Contact.module.css";

const Contact = () => {
    return (
        <form className={contactStyles.contactForm}>
            <div className={contactStyles.formGroup}>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div className={contactStyles.formGroup}>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className={contactStyles.formGroup}>
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Contact;