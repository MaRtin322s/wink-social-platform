import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";

const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const loginHandler = (ev) => {
        ev.preventDefault();

        if(Object.values(values).some(x => x === '')) {
            alert("All fields are required!");
        } else {
            try {
                authService.loginUser(values)
                    .then(user => {
                        userLogin(user);
                        navigate('/', { replace: true });
                    })
            } catch (err) {
                alert(err.message);
            }
        }
    }

    const changeHandler = (ev) => {
        ev.preventDefault();

        setValues(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    }

    return (
        <section id="login">
            <div className="form">
                <h2>Login</h2>
                <form className="login-form" onSubmit={(ev) => loginHandler(ev)}>
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