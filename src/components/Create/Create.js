import "./Create.css";

const Create = () => {
    return (
        <section id="create">
            <div className="form">
                <h2>Create publication</h2>
                <form className="login-form">
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Title"
                    />

                    <input
                        type="text"
                        name="category"
                        id="category"
                        placeholder="Category"
                    />

                    <div>
                        <textarea
                            id="content"
                            name="content"
                            placeholder="Content..."
                        ></textarea>
                    </div>

                    <button type="submit">Publish</button>
                </form>
            </div>
        </section>
    );
}

export default Create;