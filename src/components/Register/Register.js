import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as authService from '../../services/authService';
import './Register.css';

const Register = () => {
    const { storage } = useContext(AuthContext);
    const navigate = useNavigate();
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        address: ''
    });

    const registerHandler = (ev) => {
        ev.preventDefault();

        authService.registerUser(values)
            .then(user => {
                storage.setValue(user);
                navigate('/', { replace: true });
            });
    }

    const changeHandler = (ev) => {
        ev.preventDefault();

        setValues(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    }

    return (
        <section id="register">
            <div className="form">
                <h2>Register</h2>
                <form
                    className="login-form"
                    onSubmit={(ev) => registerHandler(ev)}
                >
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="First Name"
                        value={values.firstName}
                        onChange={(ev) => changeHandler(ev)}
                    />

                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Last Name"
                        value={values.lastName}
                        onChange={(ev) => changeHandler(ev)}
                    />

                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={(ev) => changeHandler(ev)}
                    />

                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={(ev) => changeHandler(ev)}
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        value={values.confirmPassword}
                        onChange={(ev) => changeHandler(ev)}
                    />

                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Mobile Number"
                        value={values.phone}
                        onChange={(ev) => changeHandler(ev)}
                    />

                    <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Address"
                        value={values.address}
                        onChange={(ev) => changeHandler(ev)}
                    />
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