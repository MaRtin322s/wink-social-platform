import { useContext, useState } from "react";
import "./Create.css";
import * as service from "../../services/publicService";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();
    const [values, setValues] = useState({
        title: '',
        category: '',
        content: ''
    });

    const submitHandler = (ev) => {
        ev.preventDefault();

        service.create(auth.accessToken, values)
        .then(() => {
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
        <section id="create">
            <div className="form">
                <h2>Create publication</h2>
                <form className="login-form" onSubmit={(ev) => submitHandler(ev)}>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Title"
                        value={values.title}
                        onChange={(ev) => changeHandler(ev)}
                    />

                    <input
                        type="text"
                        name="category"
                        id="category"
                        placeholder="Category"
                        value={values.category}
                        onChange={(ev) => changeHandler(ev)}
                    />

                    <div>
                        <textarea
                            id="content"
                            name="content"
                            placeholder="Content..."
                            value={values.content}
                            onChange={(ev) => changeHandler(ev)}
                        ></textarea>
                    </div>

                    <button type="submit">Publish</button>
                </form>
            </div>
        </section>
    );
}

export default Create;