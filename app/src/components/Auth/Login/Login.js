import authStyles from "../Auth.module.css";

const Login = () => {
    return (
        <div className={authStyles.formContainer}>
        <h2 className={authStyles.formHeading}>Log in</h2>
            <form>
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required />
                <br />
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required />
                <br />
                <button type="submit">Login</button>
                <p>
                    New here?
                    <a href="/auth/signup"> Sign up</a>
                    <br />
                    Forgot your password?
                    <a href="/auth/forgot-password"> Reset your password</a>
                </p>
            </form>
        </div>
    )
}

export default Login;