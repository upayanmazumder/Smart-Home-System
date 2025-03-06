import faqStyles from "./FAQ.module.css";

const FAQ = () => {
    return (
        <div>
        <ul className={faqStyles.faqBox}>
            <div className={faqStyles.faqContainer}>
                <details>
                    <summary>How do I set up the smart home system?</summary>
                    <p>
                        To set up the smart home system, follow the instructions provided in the user manual
                        or
                        visit our online setup guide.
                    </p>
                </details>
                <details>
                    <summary>Can I control the devices remotely?</summary>
                    <p>
                        Yes, you can control all connected devices remotely using our mobile app available
                        for
                        both iOS and Android.
                    </p>
                </details>
                <details>
                    <summary>Is my data secure?</summary>
                    <p>
                        We prioritize your privacy and security. All data is encrypted and stored securely.
                        For
                        more details, refer to our privacy policy.
                    </p>
                </details>
            </div>
        </ul>
    </div>
    )
}

export default FAQ;