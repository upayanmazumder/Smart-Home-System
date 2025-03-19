import authStyles from "../Auth.module.css";

const ForgotPassword = () => {
    return (
        <div className={authStyles.formContainer}>
            <h2 className={authStyles.formHeading}>Forgot Password</h2>
            <p>
                Currently, there is no way to reset your password. Please email me at{" "}
                <a href="mailto:support.aetherlink@upayan.dev">support.aetherlink@upayan.dev</a> for support. I will delete your existing account so you can create a new one.
            </p>
        </div>
    );
};

export default ForgotPassword;
