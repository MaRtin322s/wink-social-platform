import { Link } from "react-router-dom";
import './Register.css';

const Register = () => {
    return (
        <section id="register">
            <div className="form">
                <h2>Register</h2>
                <form className="login-form">
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="First Name"
                    />

                    <input
                        type="password"
                        name="lastName"
                        id="lastName"
                        placeholder="Last Name"
                    />

                    <input
                        type="password"
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

                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                    />

                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Mobile Number"
                    />

                    <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Address"
                    />

                    <div className="genderType">
                        <p>Please select your gender:</p>
                        <label>Male</label>
                        <div className="gender">
                            <input type="radio" id="female" name="gender" value="female" />
                        </div>
                        <label>Female</label>
                        <div className="gender">
                            <input type="radio" id="male" name="gender" value="male" />
                        </div>
                    </div>
                    <div>
                        <button type="submit">Register</button>
                        <p className="message">
                            You have an account? <Link to="/user/login">Sign in</Link>
                        </p>
                    </div>

                </form>
            </div>
        </section>
    );
}

export default Register;