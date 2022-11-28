import { Link } from "react-router-dom";

const Login = () => {
    return (
        <section id="login">
            <div className="form">
                <h2>Login</h2>
                <form className="login-form">
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                    />

                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                    />

                    <button type="submit">login</button>
                    <p className="message">
                        Not registered? <Link to="/user/register">Create an account</Link>
                    </p>
                </form>
            </div>
        </section>
    );
}

export default Login;