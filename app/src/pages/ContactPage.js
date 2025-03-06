/* eslint-disable jsx-a11y/anchor-is-valid */
import Contact from "../components/Contact/Contact";

const ContactPage = () => {
    return (
        <main>
            <div className="ellipsis" style={{ top: '50px', right: '50px' }}></div>
            <a class="sectionHeading" href="#">
                <h2>Contact</h2>
            </a>
            <Contact />
        </main>
    );
}

export default ContactPage;