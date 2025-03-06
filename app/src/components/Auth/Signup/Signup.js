import authStyles from "../Auth.module.css"

const Signup = () => {
    return (
        <div className={authStyles.formContainer}>
            <h2 className={authStyles.formHeading}>Sign Up</h2>
            <form>
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required />
                <br />
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required />
                <br />
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required />
                <br />
                <button type="submit">Signup</button>
                <p>Already have an account?<a href="/auth/login"> Sign in</a></p>
            </form>
        </div>
    )
}

export default Signup;